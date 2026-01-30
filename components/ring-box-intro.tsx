"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

interface RingBoxIntroProps {
  onComplete: () => void
}

export function RingBoxIntro({ onComplete }: RingBoxIntroProps) {
  const [stage, setStage] = useState<"initial" | "glow" | "opening" | "ring" | "text" | "fading">("initial")

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("glow"), 500),
      setTimeout(() => setStage("opening"), 1500),
      setTimeout(() => setStage("ring"), 2800),
      setTimeout(() => setStage("text"), 3800),
      setTimeout(() => setStage("fading"), 5500),
      setTimeout(() => onComplete(), 6500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

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
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(255, ${150 + Math.random() * 100}, ${180 + Math.random() * 75}, ${0.2 + Math.random() * 0.4})`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Radial glow behind box */}
      <div
        className={`absolute w-96 h-96 rounded-full transition-all duration-1500 ease-out ${
          stage !== "initial" ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{
          background: "radial-gradient(circle, rgba(190,50,90,0.3) 0%, rgba(190,50,90,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main container with 3D perspective */}
      <div
        className="relative"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {/* Box shadow on ground */}
        <div
          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-56 h-8 rounded-full transition-all duration-1000 ${
            stage === "opening" || stage === "ring" || stage === "text"
              ? "opacity-60 scale-110"
              : "opacity-30 scale-100"
          }`}
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* Ring Box - 3D */}
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
          <div className="relative w-56 h-36 rounded-xl overflow-hidden">
            {/* Velvet exterior gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(145deg, #2a1520 0%, #1a0d12 50%, #0f0508 100%)",
              }}
            />

            {/* Subtle texture overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Interior velvet */}
            <div
              className="absolute inset-3 rounded-lg"
              style={{
                background: "linear-gradient(180deg, #1a0a10 0%, #2d1018 50%, #1a0a10 100%)",
                boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              {/* Ring cushion indent */}
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-20 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(60,20,35,1) 0%, rgba(30,10,18,1) 100%)",
                  boxShadow: "inset 0 4px 15px rgba(0,0,0,0.6)",
                }}
              />

              {/* Ring */}
              <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                  stage === "ring" || stage === "text"
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-75"
                }`}
              >
                {/* Ring glow */}
                <div
                  className="absolute -inset-6 rounded-full animate-pulse"
                  style={{
                    background: "radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />

                {/* Ring band */}
                <div
                  className="relative w-14 h-14 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #ffd700 0%, #b8860b 25%, #ffd700 50%, #daa520 75%, #ffd700 100%)",
                    boxShadow: "0 4px 20px rgba(255,215,0,0.5), inset 0 2px 10px rgba(255,255,255,0.3)",
                  }}
                >
                  {/* Ring inner hole */}
                  <div
                    className="absolute inset-2 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #1a0a10 0%, #2d1018 100%)",
                    }}
                  />

                  {/* Diamond */}
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                    style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.8))" }}
                  >
                    {/* Diamond shape */}
                    <div
                      className="relative w-8 h-8"
                      style={{
                        background: "linear-gradient(135deg, #ffffff 0%, #e8e8e8 25%, #ffffff 50%, #f0f0f0 75%, #ffffff 100%)",
                        clipPath: "polygon(50% 0%, 100% 38%, 80% 100%, 20% 100%, 0% 38%)",
                      }}
                    >
                      {/* Diamond shine */}
                      <div
                        className="absolute inset-0 animate-shine"
                        style={{
                          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
                          clipPath: "polygon(50% 0%, 100% 38%, 80% 100%, 20% 100%, 0% 38%)",
                        }}
                      />
                    </div>
                    {/* Diamond sparkles */}
                    <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-white animate-pulse" />
                    <Sparkles className="absolute -top-1 -left-3 w-3 h-3 text-white/80 animate-pulse delay-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Gold trim lines */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #b8860b 20%, #ffd700 50%, #b8860b 80%, transparent 100%)",
              }}
            />
            <div
              className="absolute bottom-0 inset-x-0 h-0.5"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #8b7355 20%, #b8860b 50%, #8b7355 80%, transparent 100%)",
              }}
            />
          </div>

          {/* Box Lid with 3D flip */}
          <div
            className={`absolute top-0 left-0 w-56 h-24 origin-bottom transition-all ease-out ${
              stage === "opening" || stage === "ring" || stage === "text"
                ? "duration-1200"
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
            {/* Lid outer surface */}
            <div
              className="absolute inset-0 rounded-t-xl"
              style={{
                background: "linear-gradient(145deg, #2a1520 0%, #1a0d12 50%, #0f0508 100%)",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Gold trim on lid */}
              <div
                className="absolute top-0 inset-x-0 h-1 rounded-t-xl"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #b8860b 20%, #ffd700 50%, #b8860b 80%, transparent 100%)",
                }}
              />

              {/* Heart emblem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`transition-all duration-500 ${
                    stage === "glow" ? "scale-110" : "scale-100"
                  }`}
                >
                  <Heart
                    className={`w-12 h-12 transition-all duration-700 ${
                      stage !== "initial"
                        ? "text-rose-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]"
                        : "text-rose-900/60"
                    }`}
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-20 rounded-t-xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Lid inner surface */}
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
          className={`absolute -bottom-32 left-1/2 -translate-x-1/2 text-center w-80 transition-all duration-700 ${
            stage === "text" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="font-serif text-3xl mb-3 tracking-wide"
            style={{
              background: "linear-gradient(180deg, #ffd700 0%, #ffb347 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(255,215,0,0.3)",
            }}
          >
            Will You Be Mine Forever?
          </p>
          <p className="text-rose-300/80 text-sm tracking-[0.3em] uppercase">
            Dhruvi & Niral
          </p>
        </div>
      </div>

      {/* Rising hearts animation */}
      {(stage === "ring" || stage === "text") && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-500/40"
              fill="currentColor"
              style={{
                left: `${5 + Math.random() * 90}%`,
                bottom: "-20px",
                width: `${16 + Math.random() * 20}px`,
                height: `${16 + Math.random() * 20}px`,
                animation: `rise ${4 + Math.random() * 3}s ease-out ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes rise {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) rotate(20deg) scale(0.5);
            opacity: 0;
          }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .duration-1200 {
          transition-duration: 1200ms;
        }
        .duration-1500 {
          transition-duration: 1500ms;
        }
      `}</style>
    </div>
  )
}
