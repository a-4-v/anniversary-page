"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface RingBoxIntroProps {
  onComplete: () => void
}

export function RingBoxIntro({ onComplete }: RingBoxIntroProps) {
  const [stage, setStage] = useState<"closed" | "opening" | "ring" | "fading">("closed")

  useEffect(() => {
    // Start opening after a brief pause
    const timer1 = setTimeout(() => setStage("opening"), 800)
    // Show ring
    const timer2 = setTimeout(() => setStage("ring"), 2000)
    // Start fading
    const timer3 = setTimeout(() => setStage("fading"), 3500)
    // Complete
    const timer4 = setTimeout(() => onComplete(), 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-rose-50 to-rose-100 transition-opacity duration-1000 ${
        stage === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rose-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Ring Box Container */}
      <div className="relative">
        {/* Box Shadow */}
        <div
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/10 rounded-full blur-md transition-all duration-1000 ${
            stage === "opening" || stage === "ring" ? "scale-110" : "scale-100"
          }`}
        />

        {/* Box Base */}
        <div className="relative w-52 h-32 bg-gradient-to-b from-rose-800 to-rose-900 rounded-lg shadow-2xl">
          {/* Velvet Interior */}
          <div className="absolute inset-2 bg-gradient-to-b from-rose-950 to-rose-900 rounded-md overflow-hidden">
            {/* Ring Cushion */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-16 bg-rose-100/20 rounded-full blur-sm" />
            
            {/* Ring Slot */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-20">
              {/* Ring */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                  stage === "ring" ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4"
                }`}
              >
                {/* Ring Band */}
                <div className="relative w-10 h-10 rounded-full border-4 border-yellow-400 shadow-lg">
                  {/* Diamond */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-white via-rose-100 to-rose-200 rotate-45 shadow-lg">
                    <div className="absolute inset-0.5 bg-gradient-to-br from-white to-rose-50 rotate-0" />
                  </div>
                  {/* Ring shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent animate-pulse" />
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-rose-400/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Gold trim */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-t-lg" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-b-lg" />
        </div>

        {/* Box Lid */}
        <div
          className={`absolute -top-1 left-0 w-52 h-20 origin-bottom transition-all duration-1000 ease-out ${
            stage === "opening" || stage === "ring"
              ? "-rotate-x-110 -translate-y-16"
              : "rotate-x-0 translate-y-0"
          }`}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Lid Top */}
          <div className="absolute inset-0 bg-gradient-to-b from-rose-700 to-rose-800 rounded-t-lg shadow-xl">
            {/* Gold trim on lid */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-t-lg" />
            {/* Heart emblem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Heart className="w-8 h-8 text-yellow-500/80" fill="currentColor" />
            </div>
          </div>
          {/* Lid Inner */}
          <div
            className="absolute inset-0 bg-rose-950 rounded-lg"
            style={{ transform: "rotateX(180deg) translateZ(20px)" }}
          />
        </div>

        {/* Text reveal */}
        <div
          className={`absolute -bottom-24 left-1/2 -translate-x-1/2 text-center whitespace-nowrap transition-all duration-700 ${
            stage === "ring" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-rose-800 font-serif text-2xl mb-1">Will you be mine forever?</p>
          <p className="text-rose-600 text-sm tracking-widest uppercase">Dhruvi & Niral</p>
        </div>
      </div>

      {/* Floating hearts */}
      {stage === "ring" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-300/60 animate-bounce"
              fill="currentColor"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${60 + Math.random() * 30}%`,
                width: `${12 + Math.random() * 16}px`,
                height: `${12 + Math.random() * 16}px`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
