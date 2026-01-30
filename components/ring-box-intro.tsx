"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RingBoxIntroProps {
  onComplete: () => void
}

export function RingBoxIntro({ onComplete }: RingBoxIntroProps) {
  const [stage, setStage] = useState<
    "question" | "areyousure" | "youaremine" | "glow" | "opening" | "ring" | "text" | "fading"
  >("question")
  const [noCount, setNoCount] = useState(0)

  const handleYes = () => {
    setStage("glow")
    setTimeout(() => setStage("opening"), 800)
    setTimeout(() => setStage("ring"), 2000)
    setTimeout(() => setStage("text"), 3000)
    setTimeout(() => setStage("fading"), 4800)
    setTimeout(() => onComplete(), 5800)
  }

  const handleNo = () => {
    if (noCount === 0) {
      setNoCount(1)
      setStage("areyousure")
    } else {
      setNoCount(2)
      setStage("youaremine")
      setTimeout(() => {
        setStage("glow")
        setTimeout(() => setStage("opening"), 800)
        setTimeout(() => setStage("ring"), 2000)
        setTimeout(() => setStage("text"), 3000)
        setTimeout(() => setStage("fading"), 4800)
        setTimeout(() => onComplete(), 5800)
      }, 2500)
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        stage === "fading" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at center, #1a0a10 0%, #0d0507 50%, #000000 100%)",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(255, ${150 + Math.random() * 100}, ${180 + Math.random() * 75}, ${0.3 + Math.random() * 0.5})`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Question Stage */}
      {stage === "question" && (
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <div className="mb-6 md:mb-8">
            <Heart className="w-14 h-14 md:w-16 md:h-16 text-rose-500 mx-auto animate-heartbeat" fill="currentColor" />
          </div>
          <h1
            className="font-serif text-3xl md:text-5xl mb-8 md:mb-10 tracking-wide animate-glow"
            style={{
              background: "linear-gradient(180deg, #ffd700 0%, #ffb347 50%, #ffd700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Will You Be Mine?
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleYes}
              className="px-10 py-6 text-lg md:text-xl font-serif bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full shadow-lg shadow-rose-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Yes
            </Button>
            <Button
              onClick={handleNo}
              variant="outline"
              className="px-10 py-6 text-lg md:text-xl font-serif border-rose-400/50 text-rose-300 hover:bg-rose-500/20 hover:text-rose-200 rounded-full transition-all hover:scale-105 active:scale-95 bg-transparent"
            >
              No
            </Button>
          </div>
        </div>
      )}

      {/* Are You Sure Stage */}
      {stage === "areyousure" && (
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <div className="mb-6 text-5xl md:text-6xl animate-shake">
            {"\u{1F979}"}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl mb-3 tracking-wide text-rose-300">
            Are you sure?
          </h1>
          <p className="text-rose-400/70 mb-8 md:mb-10 text-base md:text-lg">Please think again...</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleYes}
              className="px-8 py-6 text-base md:text-xl font-serif bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full shadow-lg shadow-rose-500/30 transition-all hover:scale-110 active:scale-95 animate-pulse-slow"
            >
              Yes, I am yours!
            </Button>
            <Button
              onClick={handleNo}
              variant="outline"
              className="px-8 py-6 text-base md:text-lg font-serif border-rose-400/30 text-rose-400/60 hover:bg-rose-500/10 rounded-full transition-all bg-transparent"
            >
              No
            </Button>
          </div>
        </div>
      )}

      {/* You Are Mine Stage */}
      {stage === "youaremine" && (
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <div className="mb-4 md:mb-6 relative">
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-rose-500 mx-auto animate-bounce" fill="currentColor" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-rose-500/20 animate-ping" />
            </div>
          </div>
          <h1
            className="font-serif text-3xl md:text-5xl mb-3 md:mb-4 tracking-wide"
            style={{
              background: "linear-gradient(180deg, #ff6b9d 0%, #ff4081 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            No! You are mine only!
          </h1>
          <p className="text-rose-300 text-lg md:text-xl mb-2">Forever and always</p>
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 md:w-6 md:h-6 text-rose-500 animate-pulse"
                fill="currentColor"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Ring Box Animation Stages */}
      {(stage === "glow" || stage === "opening" || stage === "ring" || stage === "text" || stage === "fading") && (
        <>
          {/* Radial glow behind box */}
          <div
            className={`absolute w-64 h-64 md:w-96 md:h-96 rounded-full transition-all duration-1000 ease-out ${
              stage !== "glow" ? "opacity-100 scale-100" : "opacity-50 scale-75"
            }`}
            style={{
              background: "radial-gradient(circle, rgba(190,50,90,0.4) 0%, rgba(190,50,90,0) 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Main container with 3D perspective */}
          <div
            className="relative animate-scaleIn"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            {/* Box shadow on ground */}
            <div
              className={`absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-40 md:w-56 h-6 md:h-8 rounded-full transition-all duration-1000 ${
                stage === "opening" || stage === "ring" || stage === "text"
                  ? "opacity-60 scale-110"
                  : "opacity-30 scale-100"
              }`}
              style={{
                background: "radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />

            {/* Ring Box */}
            <div
              className="relative transition-all duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform:
                  stage === "opening" || stage === "ring" || stage === "text"
                    ? "rotateX(15deg)"
                    : "rotateX(0deg)",
              }}
            >
              {/* Box Base */}
              <div className="relative w-44 h-28 md:w-56 md:h-36 rounded-xl overflow-hidden">
                {/* Velvet exterior */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(145deg, #2a1520 0%, #1a0d12 50%, #0f0508 100%)",
                  }}
                />

                {/* Interior velvet */}
                <div
                  className="absolute inset-2 md:inset-3 rounded-lg"
                  style={{
                    background: "linear-gradient(180deg, #1a0a10 0%, #2d1018 50%, #1a0a10 100%)",
                    boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)",
                  }}
                >
                  {/* Ring cushion */}
                  <div
                    className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-20 md:w-24 h-16 md:h-20 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse, rgba(60,20,35,1) 0%, rgba(30,10,18,1) 100%)",
                      boxShadow: "inset 0 4px 15px rgba(0,0,0,0.6)",
                    }}
                  />

                  {/* Ring */}
                  <div
                    className={`absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                      stage === "ring" || stage === "text"
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-75"
                    }`}
                  >
                    {/* Ring glow */}
                    <div
                      className="absolute -inset-4 md:-inset-6 rounded-full animate-pulse"
                      style={{
                        background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%)",
                        filter: "blur(10px)",
                      }}
                    />

                    {/* Ring band */}
                    <div
                      className="relative w-11 h-11 md:w-14 md:h-14 rounded-full animate-float"
                      style={{
                        background: "linear-gradient(135deg, #ffd700 0%, #b8860b 25%, #ffd700 50%, #daa520 75%, #ffd700 100%)",
                        boxShadow: "0 4px 20px rgba(255,215,0,0.6), inset 0 2px 10px rgba(255,255,255,0.3)",
                      }}
                    >
                      {/* Ring inner */}
                      <div
                        className="absolute inset-1.5 md:inset-2 rounded-full"
                        style={{
                          background: "linear-gradient(180deg, #1a0a10 0%, #2d1018 100%)",
                        }}
                      />

                      {/* Diamond */}
                      <div
                        className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2"
                        style={{ filter: "drop-shadow(0 0 25px rgba(255,255,255,0.9))" }}
                      >
                        <div
                          className="relative w-6 h-6 md:w-8 md:h-8 animate-sparkle"
                          style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #e8e8e8 25%, #ffffff 50%, #f0f0f0 75%, #ffffff 100%)",
                            clipPath: "polygon(50% 0%, 100% 38%, 80% 100%, 20% 100%, 0% 38%)",
                          }}
                        >
                          <div
                            className="absolute inset-0 animate-shine"
                            style={{
                              background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%)",
                              clipPath: "polygon(50% 0%, 100% 38%, 80% 100%, 20% 100%, 0% 38%)",
                            }}
                          />
                        </div>
                        <Sparkles className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 text-white animate-pulse" />
                        <Sparkles className="absolute -top-1 -left-3 w-2 h-2 md:w-3 md:h-3 text-white/80 animate-pulse" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gold trim */}
                <div
                  className="absolute top-0 inset-x-0 h-0.5 md:h-1"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #b8860b 20%, #ffd700 50%, #b8860b 80%, transparent 100%)",
                  }}
                />
              </div>

              {/* Box Lid */}
              <div
                className={`absolute top-0 left-0 w-44 h-20 md:w-56 md:h-24 origin-bottom transition-all ease-out ${
                  stage === "opening" || stage === "ring" || stage === "text"
                    ? "duration-1000"
                    : "duration-500"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    stage === "opening" || stage === "ring" || stage === "text"
                      ? "rotateX(-130deg) translateY(-2px)"
                      : "rotateX(0deg) translateY(0px)",
                }}
              >
                {/* Lid surface */}
                <div
                  className="absolute inset-0 rounded-t-xl"
                  style={{
                    background: "linear-gradient(145deg, #2a1520 0%, #1a0d12 50%, #0f0508 100%)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Gold trim on lid */}
                  <div
                    className="absolute top-0 inset-x-0 h-0.5 md:h-1 rounded-t-xl"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, #b8860b 20%, #ffd700 50%, #b8860b 80%, transparent 100%)",
                    }}
                  />

                  {/* Heart emblem */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Heart
                      className="w-10 h-10 md:w-12 md:h-12 text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.8)] animate-heartbeat"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Lid inner */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "linear-gradient(180deg, #2d1018 0%, #1a0a10 100%)",
                    transform: "rotateX(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            </div>

            {/* Text reveal */}
            <div
              className={`absolute -bottom-24 md:-bottom-32 left-1/2 -translate-x-1/2 text-center w-64 md:w-80 transition-all duration-700 ${
                stage === "text" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p
                className="font-serif text-2xl md:text-3xl mb-2 md:mb-3 tracking-wide animate-glow"
                style={{
                  background: "linear-gradient(180deg, #ffd700 0%, #ffb347 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Forever Yours
              </p>
              <p className="text-rose-300/80 text-xs md:text-sm tracking-[0.3em] uppercase">
                Dhruvi & Niral
              </p>
            </div>
          </div>

          {/* Rising hearts */}
          {(stage === "ring" || stage === "text") && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-rose-500/30 animate-rise"
                  fill="currentColor"
                  style={{
                    left: `${5 + Math.random() * 90}%`,
                    bottom: "-20px",
                    width: `${14 + Math.random() * 16}px`,
                    height: `${14 + Math.random() * 16}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes shine {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes rise {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% {
            transform: translateY(-100vh) rotate(15deg) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,215,0,0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(255,215,0,0.8)); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-shine { animation: shine 2s ease-in-out infinite; }
        .animate-rise { animation: rise 4s ease-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-heartbeat { animation: heartbeat 1.2s ease-in-out infinite; }
        .animate-float { animation: float 2s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 1.5s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-pulse-slow { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  )
}
