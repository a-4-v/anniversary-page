"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

const loveNotes = [
  {
    id: 1,
    note: "The way your eyes light up when you see me",
    detail: "Even after 1,825 days, your smile still makes my heart skip a beat",
  },
  {
    id: 2,
    note: "How you remember the smallest details about us",
    detail: "Every little thing I mention, you treasure it in your heart",
  },
  {
    id: 3,
    note: "Your laugh that fills my soul with joy",
    detail: "The sound of your happiness is my favorite melody",
  },
  {
    id: 4,
    note: "The way you hold my hand like you never want to let go",
    detail: "In your grip, I feel safe, loved, and complete",
  },
  {
    id: 5,
    note: "How you believe in me when I doubt myself",
    detail: "Your faith in me makes me want to be a better person",
  },
  {
    id: 6,
    note: "The comfort of your silence beside me",
    detail: "We do not need words when our hearts speak so loudly",
  },
  {
    id: 7,
    note: "Your patience with all my imperfections",
    detail: "You love me not despite my flaws, but with them",
  },
]

interface FloatingHeart {
  id: number
  x: number
  y: number
  scale: number
  delay: number
  duration: number
  revealed: boolean
}

export function ReasonsILoveYou() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])
  const [revealedNote, setRevealedNote] = useState<number | null>(null)
  const [revealedCount, setRevealedCount] = useState(0)
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    // Create floating hearts with positions
    const initialHearts: FloatingHeart[] = loveNotes.map((_, index) => ({
      id: index,
      x: 10 + (index % 4) * 22 + Math.random() * 10,
      y: 15 + Math.floor(index / 4) * 40 + Math.random() * 15,
      scale: 0.8 + Math.random() * 0.4,
      delay: index * 0.2,
      duration: 3 + Math.random() * 2,
      revealed: false,
    }))
    setHearts(initialHearts)
  }, [])

  const handleHeartClick = (heartId: number, event: React.MouseEvent) => {
    const heart = hearts.find((h) => h.id === heartId)
    if (heart?.revealed) return

    // Create sparkle effect at click position
    const rect = event.currentTarget.getBoundingClientRect()
    const containerRect = event.currentTarget.parentElement?.getBoundingClientRect()
    if (containerRect) {
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      }))
      setSparkles((prev) => [...prev, ...newSparkles])
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id)))
      }, 1000)
    }

    // Mark heart as revealed
    setHearts((prev) =>
      prev.map((h) => (h.id === heartId ? { ...h, revealed: true } : h))
    )
    setRevealedNote(heartId)
    setRevealedCount((prev) => prev + 1)
  }

  const closeNote = () => {
    setRevealedNote(null)
  }

  const allRevealed = revealedCount === loveNotes.length

  return (
    <div className="relative">
      {/* Interactive Hearts Container */}
      <div className="relative bg-card rounded-3xl p-6 md:p-10 shadow-xl border border-border overflow-hidden min-h-[400px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        {/* Instruction text */}
        <div className="relative z-10 text-center mb-8">
          <p className="text-muted-foreground text-sm md:text-base">
            {allRevealed
              ? "You have discovered all my reasons..."
              : "Tap on the floating hearts to reveal my love notes"}
          </p>
          <p className="text-primary/70 text-xs mt-1">
            {revealedCount} of {loveNotes.length} discovered
          </p>
        </div>

        {/* Floating Hearts */}
        <div className="relative h-[280px] md:h-[320px]">
          {hearts.map((heart) => (
            <button
              key={heart.id}
              onClick={(e) => handleHeartClick(heart.id, e)}
              disabled={heart.revealed}
              className={`absolute transition-all duration-500 focus:outline-none group ${
                heart.revealed
                  ? "opacity-30 cursor-default"
                  : "cursor-pointer hover:scale-125"
              }`}
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
                transform: `scale(${heart.scale})`,
                animation: heart.revealed
                  ? "none"
                  : `float ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
              }}
            >
              <div className="relative">
                <Heart
                  className={`w-12 h-12 md:w-14 md:h-14 transition-colors duration-300 ${
                    heart.revealed
                      ? "text-primary/40"
                      : "text-primary group-hover:text-primary/80"
                  }`}
                  fill="currentColor"
                />
                {!heart.revealed && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {heart.id + 1}
                    </span>
                  </div>
                )}
                {!heart.revealed && (
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
              </div>
            </button>
          ))}

          {/* Sparkle effects */}
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute pointer-events-none"
              style={{ left: sparkle.x, top: sparkle.y }}
            >
              {[...Array(8)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute w-4 h-4 text-primary animate-sparkle"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-20px)`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative z-10 mt-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out rounded-full"
              style={{ width: `${(revealedCount / loveNotes.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Revealed Note Modal */}
      {revealedNote !== null && (
        <div
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeNote}
        >
          <div
            className="bg-card rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl border border-primary/20 animate-reveal-note"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Heart with number */}
            <div className="flex justify-center mb-6">
              <div className="relative animate-pulse-heart">
                <Heart className="w-20 h-20 text-primary" fill="currentColor" />
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {revealedNote + 1}
                </span>
              </div>
            </div>

            {/* Note content */}
            <h3 className="text-xl md:text-2xl font-serif text-foreground text-center mb-4 leading-relaxed">
              &ldquo;{loveNotes[revealedNote].note}&rdquo;
            </h3>
            <p className="text-muted-foreground italic text-center">
              {loveNotes[revealedNote].detail}
            </p>

            {/* Close button */}
            <button
              onClick={closeNote}
              className="mt-8 w-full py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Keep This Close to Your Heart
            </button>
          </div>
        </div>
      )}

      {/* All revealed celebration */}
      {allRevealed && (
        <div className="mt-6 text-center animate-fade-in">
          <p className="text-lg font-serif text-primary">
            And there are infinite more reasons waiting to be written...
          </p>
          <p className="text-sm text-muted-foreground mt-2 italic">
            7 reasons, one for each sacred vow of our Saat Phere
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(-30px) scale(0);
          }
        }
        @keyframes reveal-note {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-reveal-note {
          animation: reveal-note 0.4s ease-out forwards;
        }
        .animate-pulse-heart {
          animation: pulse-heart 1.5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-sparkle {
          animation: sparkle 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
