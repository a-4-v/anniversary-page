"use client"

import { useState } from "react"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const loveReasons = [
  {
    number: 1,
    reason: "The way your eyes light up when you see me",
    detail: "Even after 1,825 days, your smile still makes my heart skip a beat",
  },
  {
    number: 2,
    reason: "How you remember the smallest details about us",
    detail: "Every little thing I mention, you treasure it in your heart",
  },
  {
    number: 3,
    reason: "Your laugh that fills my soul with joy",
    detail: "The sound of your happiness is my favorite melody",
  },
  {
    number: 4,
    reason: "The way you hold my hand like you never want to let go",
    detail: "In your grip, I feel safe, loved, and complete",
  },
  {
    number: 5,
    reason: "How you believe in me when I doubt myself",
    detail: "Your faith in me makes me want to be a better person",
  },
  {
    number: 6,
    reason: "The comfort of your silence beside me",
    detail: "We do not need words when our hearts speak so loudly",
  },
  {
    number: 7,
    reason: "Your patience with all my imperfections",
    detail: "You love me not despite my flaws, but with them",
  },
]

export function ReasonsILoveYou() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextReason = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % loveReasons.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevReason = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + loveReasons.length) % loveReasons.length)
      setIsAnimating(false)
    }, 300)
  }

  const currentReason = loveReasons[currentIndex]

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border overflow-hidden">
        {/* Decorative background hearts */}
        <div className="absolute top-4 right-4 text-primary/5">
          <Heart className="w-32 h-32" fill="currentColor" />
        </div>
        <div className="absolute bottom-4 left-4 text-accent/5">
          <Heart className="w-24 h-24" fill="currentColor" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center transition-all duration-300 ${
            isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
          }`}
        >
          {/* Number with heart */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart
                className="w-20 h-20 text-primary"
                fill="currentColor"
              />
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                {currentReason.number}
              </span>
            </div>
          </div>

          {/* Reason */}
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 leading-relaxed">
            {currentReason.reason}
          </h3>

          {/* Detail */}
          <p className="text-lg text-muted-foreground italic max-w-md mx-auto">
            {currentReason.detail}
          </p>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {loveReasons.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsAnimating(false)
                    }, 300)
                  }
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary rounded-full"
                    : "w-2 h-2 bg-primary/30 rounded-full hover:bg-primary/50"
                }`}
                aria-label={`Go to reason ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevReason}
          className="rounded-full w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
          <span className="sr-only">Previous reason</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextReason}
          className="rounded-full w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
          disabled={isAnimating}
        >
          <ChevronRight className="w-5 h-5 text-primary" />
          <span className="sr-only">Next reason</span>
        </Button>
      </div>

      {/* Hint text */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        7 reasons, one for each sacred vow of our future together
      </p>
    </div>
  )
}
