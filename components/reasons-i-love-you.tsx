"use client"

import React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { Heart, Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LoveCard {
  id: number
  message: string
  subtext: string
  revealed: boolean
}

const loveMessages = [
  { message: "I Promise", subtext: "To love you more each day" },
  { message: "You Are", subtext: "The best thing in my life" },
  { message: "Forever", subtext: "Is not long enough with you" },
  { message: "My Heart", subtext: "Beats only for you" },
  { message: "Together", subtext: "We can conquer anything" },
  { message: "You Make", subtext: "Every moment magical" },
]

export function ReasonsILoveYou() {
  const [cards, setCards] = useState<LoveCard[]>([])
  const [allRevealed, setAllRevealed] = useState(false)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
  const isDrawing = useRef<boolean[]>([])

  const initializeCards = useCallback(() => {
    const shuffled = [...loveMessages].sort(() => Math.random() - 0.5)
    setCards(
      shuffled.map((msg, i) => ({
        id: i,
        message: msg.message,
        subtext: msg.subtext,
        revealed: false,
      }))
    )
    setAllRevealed(false)
    isDrawing.current = new Array(6).fill(false)
    
    // Reset canvases
    setTimeout(() => {
      canvasRefs.current.forEach((canvas) => {
        if (canvas) {
          const ctx = canvas.getContext("2d")
          if (ctx) {
            ctx.globalCompositeOperation = "source-over"
            drawScratchLayer(ctx, canvas.width, canvas.height)
          }
        }
      })
    }, 50)
  }, [])

  const drawScratchLayer = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#be185d")
    gradient.addColorStop(0.5, "#ec4899")
    gradient.addColorStop(1, "#f472b6")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add sparkle dots
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Text
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.font = "bold 13px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Scratch Here", width / 2, height / 2 - 3)
    ctx.font = "11px sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fillText("to reveal", width / 2, height / 2 + 12)
  }

  useEffect(() => {
    initializeCards()
  }, [initializeCards])

  useEffect(() => {
    canvasRefs.current.forEach((canvas, index) => {
      if (canvas && !cards[index]?.revealed) {
        const ctx = canvas.getContext("2d")
        if (ctx) {
          drawScratchLayer(ctx, canvas.width, canvas.height)
        }
      }
    })
  }, [cards.length])

  const scratch = (
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    cardIndex: number
  ) => {
    const ctx = canvas.getContext("2d")
    if (ctx && !cards[cardIndex]?.revealed) {
      ctx.globalCompositeOperation = "destination-out"
      ctx.beginPath()
      ctx.arc(x, y, 22, 0, Math.PI * 2)
      ctx.fill()

      // Check reveal progress
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      let transparent = 0
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) transparent++
      }
      const progress = (transparent / (imageData.data.length / 4)) * 100

      if (progress > 45) {
        setCards((prev) =>
          prev.map((card, i) =>
            i === cardIndex ? { ...card, revealed: true } : card
          )
        )
      }
    }
  }

  const getPosition = (
    e: React.TouchEvent | React.MouseEvent,
    canvas: HTMLCanvasElement
  ) => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      }
    }
    return {
      x: ((e as React.MouseEvent).clientX - rect.left) * scaleX,
      y: ((e as React.MouseEvent).clientY - rect.top) * scaleY,
    }
  }

  const handleStart = (e: React.TouchEvent | React.MouseEvent, index: number) => {
    isDrawing.current[index] = true
    const canvas = canvasRefs.current[index]
    if (canvas && !cards[index]?.revealed) {
      const pos = getPosition(e, canvas)
      scratch(canvas, pos.x, pos.y, index)
    }
  }

  const handleEnd = (index: number) => {
    isDrawing.current[index] = false
  }

  const handleMove = (
    e: React.TouchEvent | React.MouseEvent,
    index: number
  ) => {
    if (!isDrawing.current[index]) return
    const canvas = canvasRefs.current[index]
    if (canvas && !cards[index]?.revealed) {
      const pos = getPosition(e, canvas)
      scratch(canvas, pos.x, pos.y, index)
    }
  }

  useEffect(() => {
    const revealedCount = cards.filter((c) => c.revealed).length
    if (revealedCount === cards.length && cards.length > 0) {
      setAllRevealed(true)
    }
  }, [cards])

  const revealedCount = cards.filter((c) => c.revealed).length

  return (
    <div className="w-full">
      {/* Cards Grid - 2 columns for mobile */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
              card.revealed ? "border-primary/40 scale-[1.02]" : "border-transparent"
            }`}
          >
            {/* Revealed Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex flex-col items-center justify-center p-3 text-center">
              <Heart
                className={`w-6 h-6 text-primary mb-1.5 ${
                  card.revealed ? "animate-pulse" : "opacity-30"
                }`}
                fill="currentColor"
              />
              <p className="text-sm md:text-base font-serif font-bold text-primary leading-tight">
                {card.message}
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight px-1">
                {card.subtext}
              </p>
            </div>

            {/* Scratch Layer */}
            {!card.revealed && (
              <canvas
                ref={(el) => {
                  canvasRefs.current[index] = el
                }}
                width={180}
                height={135}
                className="absolute inset-0 w-full h-full cursor-pointer touch-none"
                onMouseDown={(e) => handleStart(e, index)}
                onMouseUp={() => handleEnd(index)}
                onMouseLeave={() => handleEnd(index)}
                onMouseMove={(e) => handleMove(e, index)}
                onTouchStart={(e) => handleStart(e, index)}
                onTouchEnd={() => handleEnd(index)}
                onTouchMove={(e) => handleMove(e, index)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-muted-foreground">Love notes revealed</p>
          <p className="text-xs font-medium text-primary">
            {revealedCount} / {cards.length}
          </p>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-pink-400 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(revealedCount / cards.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Completion Message */}
      {allRevealed && (
        <div
          className="text-center py-5 px-4 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-2xl border border-primary/20 animate-fade-in"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Sparkles
                key={i}
                className="w-4 h-4 text-primary animate-sparkle"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <p className="text-base md:text-lg font-serif text-primary mb-1">
            You revealed all my love!
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Every word is a promise from my heart to yours
          </p>
          <Button
            onClick={initializeCards}
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-2" />
            Play Again
          </Button>
        </div>
      )}

      {/* Instructions */}
      {!allRevealed && (
        <p className="text-center text-[11px] text-muted-foreground">
          Use your finger to scratch each card and reveal my love notes
        </p>
      )}

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
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
        .animate-sparkle {
          animation: sparkle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
