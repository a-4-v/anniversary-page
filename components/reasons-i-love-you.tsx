"use client"

import React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { Heart, RotateCcw, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FallingHeart {
  id: number
  x: number
  y: number
  speed: number
  size: number
  type: "heart" | "golden" | "broken"
  rotation: number
}

const loveMessages = [
  "You make my heart smile",
  "Forever isn't long enough with you",
  "You are my today and tomorrow",
  "Every love story is beautiful, but ours is my favorite",
  "In your arms is my favorite place",
  "You are the reason I believe in love",
  "My heart beats only for you",
]

export function ReasonsILoveYou() {
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState<FallingHeart[]>([])
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [catcherX, setCatcherX] = useState(50)
  const [currentMessage, setCurrentMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [caughtAnimation, setCaughtAnimation] = useState<{ x: number; y: number } | null>(null)
  const gameAreaRef = useRef<HTMLDivElement>(null)
  const heartIdRef = useRef(0)

  const startGame = useCallback(() => {
    setScore(0)
    setHearts([])
    setGameActive(true)
    setGameOver(false)
    setTimeLeft(30)
    setCurrentMessage("")
    setShowMessage(false)
  }, [])

  // Timer countdown
  useEffect(() => {
    if (!gameActive || gameOver) return
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameActive(false)
          setGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameActive, gameOver])

  // Spawn hearts
  useEffect(() => {
    if (!gameActive || gameOver) return

    const spawnInterval = setInterval(() => {
      const random = Math.random()
      let type: "heart" | "golden" | "broken" = "heart"
      if (random > 0.9) type = "golden"
      else if (random > 0.75) type = "broken"

      const newHeart: FallingHeart = {
        id: heartIdRef.current++,
        x: Math.random() * 80 + 10,
        y: -10,
        speed: 1.5 + Math.random() * 2,
        size: type === "golden" ? 36 : type === "broken" ? 24 : 28,
        type,
        rotation: Math.random() * 360,
      }
      setHearts((prev) => [...prev, newHeart])
    }, 600)

    return () => clearInterval(spawnInterval)
  }, [gameActive, gameOver])

  // Move hearts down
  useEffect(() => {
    if (!gameActive || gameOver) return

    const moveInterval = setInterval(() => {
      setHearts((prev) => {
        const updated = prev
          .map((heart) => ({
            ...heart,
            y: heart.y + heart.speed,
            rotation: heart.rotation + 2,
          }))
          .filter((heart) => heart.y < 110)
        return updated
      })
    }, 50)

    return () => clearInterval(moveInterval)
  }, [gameActive, gameOver])

  // Check collision with catcher
  useEffect(() => {
    if (!gameActive || gameOver) return

    const catcherWidth = 80
    const catcherY = 85

    setHearts((prev) => {
      let caught = false
      let caughtHeart: FallingHeart | null = null
      
      const remaining = prev.filter((heart) => {
        const heartCenterX = heart.x
        const catcherLeft = catcherX - catcherWidth / 2
        const catcherRight = catcherX + catcherWidth / 2

        if (
          heart.y >= catcherY - 8 &&
          heart.y <= catcherY + 8 &&
          heartCenterX >= catcherLeft &&
          heartCenterX <= catcherRight
        ) {
          caught = true
          caughtHeart = heart
          return false
        }
        return true
      })

      if (caught && caughtHeart) {
        const h = caughtHeart as FallingHeart
        if (h.type === "golden") {
          setScore((s) => s + 5)
          const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)]
          setCurrentMessage(msg)
          setShowMessage(true)
          setTimeout(() => setShowMessage(false), 2000)
        } else if (h.type === "broken") {
          setScore((s) => Math.max(0, s - 2))
        } else {
          setScore((s) => s + 1)
        }
        setCaughtAnimation({ x: catcherX, y: catcherY })
        setTimeout(() => setCaughtAnimation(null), 300)
      }

      return remaining
    })
  }, [hearts, catcherX, gameActive, gameOver])

  // Touch/Mouse controls
  const handleMove = useCallback(
    (clientX: number) => {
      if (!gameAreaRef.current || !gameActive) return
      const rect = gameAreaRef.current.getBoundingClientRect()
      const x = ((clientX - rect.left) / rect.width) * 100
      setCatcherX(Math.max(10, Math.min(90, x)))
    },
    [gameActive]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleMove(e.clientX)
    },
    [handleMove]
  )

  const getFinalMessage = () => {
    if (score >= 50) return "You caught all my love! We are soulmates!"
    if (score >= 30) return "Amazing! Our love connection is strong!"
    if (score >= 15) return "Beautiful! You have my heart!"
    return "Keep trying, my love awaits you!"
  }

  return (
    <div className="relative">
      <div className="bg-card rounded-3xl p-4 md:p-6 shadow-xl border border-border overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        {!gameActive && !gameOver && (
          <div className="relative text-center py-8">
            <div className="mb-6">
              <Heart className="w-16 h-16 text-primary mx-auto animate-pulse" fill="currentColor" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
              Catch My Love
            </h3>
            <p className="text-muted-foreground text-sm mb-2 max-w-xs mx-auto">
              Catch the falling hearts! Golden hearts give bonus points and reveal love messages.
            </p>
            <p className="text-muted-foreground text-xs mb-6">
              Avoid broken hearts - they take away points!
            </p>
            <div className="flex justify-center gap-4 mb-6 text-xs">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                <span className="text-muted-foreground">+1</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                <span className="text-muted-foreground">+5</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-muted-foreground/50" />
                <span className="text-muted-foreground">-2</span>
              </div>
            </div>
            <Button
              onClick={startGame}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base"
            >
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Start Game
            </Button>
          </div>
        )}

        {gameActive && (
          <>
            {/* Score and Timer */}
            <div className="relative flex justify-between items-center mb-3 px-2">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                <span className="font-semibold text-foreground text-lg">{score}</span>
              </div>
              <div className={`font-semibold text-lg ${timeLeft <= 10 ? "text-destructive animate-pulse" : "text-foreground"}`}>
                {timeLeft}s
              </div>
            </div>

            {/* Love Message Display */}
            {showMessage && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium animate-bounce whitespace-nowrap">
                {currentMessage}
              </div>
            )}

            {/* Game Area */}
            <div
              ref={gameAreaRef}
              className="relative h-[50vh] min-h-[300px] max-h-[400px] bg-gradient-to-b from-accent/10 to-primary/10 rounded-2xl overflow-hidden touch-none cursor-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* Falling Hearts */}
              {hearts.map((heart) => (
                <div
                  key={heart.id}
                  className="absolute transition-none pointer-events-none"
                  style={{
                    left: `${heart.x}%`,
                    top: `${heart.y}%`,
                    transform: `translate(-50%, -50%) rotate(${heart.rotation}deg)`,
                  }}
                >
                  {heart.type === "golden" ? (
                    <Star
                      className="text-yellow-500 drop-shadow-lg"
                      style={{ width: heart.size, height: heart.size }}
                      fill="currentColor"
                    />
                  ) : heart.type === "broken" ? (
                    <Heart
                      className="text-muted-foreground/50"
                      style={{ width: heart.size, height: heart.size }}
                    />
                  ) : (
                    <Heart
                      className="text-primary drop-shadow-md"
                      style={{ width: heart.size, height: heart.size }}
                      fill="currentColor"
                    />
                  )}
                </div>
              ))}

              {/* Caught Animation */}
              {caughtAnimation && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${caughtAnimation.x}%`,
                    top: `${caughtAnimation.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Sparkles className="w-8 h-8 text-primary animate-ping" />
                </div>
              )}

              {/* Catcher */}
              <div
                className="absolute bottom-[12%] transition-all duration-75 ease-out"
                style={{ left: `${catcherX}%`, transform: "translateX(-50%)" }}
              >
                <div className="relative">
                  {/* Basket/Catcher */}
                  <div className="w-20 h-10 bg-gradient-to-b from-primary to-primary/80 rounded-b-3xl rounded-t-lg border-2 border-primary-foreground/20 shadow-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md -z-10" />
                </div>
              </div>

              {/* Touch instruction */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60">
                Move finger or mouse to catch hearts
              </div>
            </div>
          </>
        )}

        {gameOver && (
          <div className="relative text-center py-8 animate-fade-in">
            <div className="mb-4">
              {score >= 30 ? (
                <div className="relative inline-block">
                  <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" />
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500" />
                </div>
              ) : (
                <Heart className="w-16 h-16 text-primary mx-auto" fill="currentColor" />
              )}
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
              Game Over!
            </h3>
            <p className="text-3xl font-bold text-primary mb-3">{score} Hearts</p>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
              {getFinalMessage()}
            </p>
            <Button
              onClick={startGame}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
