"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"

const journeySteps = [
  {
    id: "rose",
    title: "Rose Day",
    icon: "rose",
    message: "A rose for the most beautiful person in my life",
    instruction: "Tap the rose to continue",
  },
  {
    id: "proposal",
    title: "Propose Day",
    icon: "ring",
    message: "Will you be my life partner?",
    instruction: "Tap to continue",
  },
  {
    id: "chocolate",
    title: "Chocolate Day",
    icon: "chocolate",
    message: "You make life sweeter than any chocolate",
    instruction: "Tap the chocolate to continue",
  },
  {
    id: "teddy",
    title: "Teddy Day",
    icon: "teddy",
    message: "Someone to remind you of me when I am not around",
    instruction: "Tap the teddy to continue",
  },
  {
    id: "promise",
    title: "Promise Day",
    icon: "promise",
    message: "I am only yours, you are the most special person to me",
    instruction: "Tap to continue",
  },
  {
    id: "hug",
    title: "Hug Day",
    icon: "hug",
    message: "My most comfortable place",
    instruction: "Tap to continue",
  },
  {
    id: "kiss",
    title: "Kiss Day",
    icon: "kiss",
    message: "I will never leave you",
    instruction: "Tap to continue",
  },
  {
    id: "letter",
    title: "Valentine's Day",
    icon: "letter",
    message: "",
    instruction: "",
  },
]

const finalLetter = `I know hu perfect nthi and ghani var mature pan nthi hoto. Ketli var tne radavi che and gusso pan apavu chhu. Tu mne bhagwan e aapelu best gift che. Bs mari j reje, mne chhodine n jati. Hu mari chhelli heartbeat sudhi bdhi try kris tne khush rakhvani. I love you so much and I always will`

// SVG Icons for each step
function RoseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Stem */}
      <path d="M50 55 L50 95" stroke="#228B22" strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M50 70 Q35 65 40 75 Q45 70 50 70" fill="#228B22" />
      <path d="M50 80 Q65 75 60 85 Q55 80 50 80" fill="#228B22" />
      {/* Rose petals */}
      <ellipse cx="50" cy="40" rx="8" ry="12" fill="#DC143C" transform="rotate(-30 50 40)" />
      <ellipse cx="50" cy="40" rx="8" ry="12" fill="#B22222" transform="rotate(30 50 40)" />
      <ellipse cx="50" cy="38" rx="7" ry="10" fill="#FF1744" transform="rotate(-60 50 38)" />
      <ellipse cx="50" cy="38" rx="7" ry="10" fill="#E91E63" transform="rotate(60 50 38)" />
      <ellipse cx="50" cy="35" rx="6" ry="8" fill="#FF5252" transform="rotate(-15 50 35)" />
      <ellipse cx="50" cy="35" rx="6" ry="8" fill="#FF1744" transform="rotate(15 50 35)" />
      <circle cx="50" cy="35" r="5" fill="#C62828" />
    </svg>
  )
}

function RingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Ring band */}
      <ellipse cx="50" cy="60" rx="25" ry="12" stroke="#FFD700" strokeWidth="6" fill="none" />
      <ellipse cx="50" cy="60" rx="25" ry="12" stroke="#FFA000" strokeWidth="2" fill="none" />
      {/* Diamond */}
      <polygon points="50,25 40,40 50,50 60,40" fill="#E0F7FA" stroke="#B2EBF2" strokeWidth="1" />
      <polygon points="50,25 60,40 50,50" fill="#B2EBF2" />
      {/* Sparkles */}
      <circle cx="35" cy="30" r="2" fill="#FFD700" className="animate-pulse" />
      <circle cx="65" cy="35" r="1.5" fill="#FFD700" className="animate-pulse" />
      <circle cx="50" cy="20" r="1.5" fill="#FFD700" className="animate-pulse" />
    </svg>
  )
}

function ChocolateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Box */}
      <rect x="15" y="35" width="70" height="45" rx="5" fill="#8B4513" />
      <rect x="15" y="35" width="70" height="45" rx="5" stroke="#5D3A1A" strokeWidth="2" />
      {/* Lid */}
      <rect x="12" y="25" width="76" height="15" rx="3" fill="#A0522D" />
      {/* Ribbon */}
      <rect x="45" y="25" width="10" height="55" fill="#DC143C" />
      <path d="M40 25 L50 15 L60 25" fill="#DC143C" />
      {/* Bow */}
      <ellipse cx="42" cy="18" rx="8" ry="5" fill="#DC143C" />
      <ellipse cx="58" cy="18" rx="8" ry="5" fill="#DC143C" />
      <circle cx="50" cy="18" r="4" fill="#B22222" />
    </svg>
  )
}

function TeddyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Ears */}
      <circle cx="30" cy="25" r="12" fill="#D2691E" />
      <circle cx="30" cy="25" r="7" fill="#DEB887" />
      <circle cx="70" cy="25" r="12" fill="#D2691E" />
      <circle cx="70" cy="25" r="7" fill="#DEB887" />
      {/* Head */}
      <circle cx="50" cy="38" r="22" fill="#D2691E" />
      {/* Muzzle */}
      <ellipse cx="50" cy="45" rx="10" ry="8" fill="#DEB887" />
      {/* Nose */}
      <ellipse cx="50" cy="42" rx="4" ry="3" fill="#4A3728" />
      {/* Eyes */}
      <circle cx="42" cy="35" r="3" fill="#2D1B0E" />
      <circle cx="58" cy="35" r="3" fill="#2D1B0E" />
      <circle cx="43" cy="34" r="1" fill="#FFFFFF" />
      <circle cx="59" cy="34" r="1" fill="#FFFFFF" />
      {/* Body */}
      <ellipse cx="50" cy="75" rx="20" ry="18" fill="#D2691E" />
      {/* Belly */}
      <ellipse cx="50" cy="75" rx="12" ry="12" fill="#DEB887" />
      {/* Heart */}
      <path d="M45 72 C45 68 50 68 50 72 C50 68 55 68 55 72 C55 78 50 82 50 82 C50 82 45 78 45 72" fill="#DC143C" />
    </svg>
  )
}

function PromiseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Hands */}
      <path d="M25 60 Q20 50 30 45 L45 50 L50 55" fill="#FFDBAC" stroke="#E8B89D" strokeWidth="1" />
      <path d="M75 60 Q80 50 70 45 L55 50 L50 55" fill="#FFDBAC" stroke="#E8B89D" strokeWidth="1" />
      {/* Pinky fingers interlinked */}
      <path d="M45 50 Q50 45 55 50" stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round" />
      <path d="M45 50 Q50 45 55 50" stroke="#E8B89D" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Hearts around */}
      <path d="M30 30 C30 26 35 26 35 30 C35 26 40 26 40 30 C40 36 35 40 35 40 C35 40 30 36 30 30" fill="#FF6B8A" />
      <path d="M60 25 C60 22 64 22 64 25 C64 22 68 22 68 25 C68 30 64 33 64 33 C64 33 60 30 60 25" fill="#FF6B8A" />
      <path d="M70 70 C70 67 74 67 74 70 C74 67 78 67 78 70 C78 75 74 78 74 78 C74 78 70 75 70 70" fill="#FF6B8A" />
      <path d="M22 70 C22 67 26 67 26 70 C26 67 30 67 30 70 C30 75 26 78 26 78 C26 78 22 75 22 70" fill="#FF6B8A" />
    </svg>
  )
}

function HugIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Two figures hugging */}
      {/* Person 1 */}
      <circle cx="40" cy="30" r="12" fill="#FFDBAC" />
      <ellipse cx="40" cy="60" rx="15" ry="20" fill="#FF6B8A" />
      {/* Person 2 */}
      <circle cx="60" cy="30" r="12" fill="#FFDBAC" />
      <ellipse cx="60" cy="60" rx="15" ry="20" fill="#64B5F6" />
      {/* Arms hugging */}
      <path d="M55 50 Q50 55 45 50" stroke="#FFDBAC" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M25 55 Q35 70 50 60" stroke="#FFDBAC" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M75 55 Q65 70 50 60" stroke="#FFDBAC" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Hearts */}
      <path d="M45 15 C45 12 48 12 48 15 C48 12 51 12 51 15 C51 19 48 22 48 22 C48 22 45 19 45 15" fill="#DC143C" className="animate-pulse" />
    </svg>
  )
}

function KissIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Lips */}
      <path d="M30 50 Q40 35 50 50 Q60 35 70 50 Q60 70 50 65 Q40 70 30 50" fill="#DC143C" />
      <path d="M35 48 Q42 42 50 50 Q58 42 65 48" stroke="#B22222" strokeWidth="2" fill="none" />
      {/* Hearts floating */}
      <path d="M20 30 C20 26 25 26 25 30 C25 26 30 26 30 30 C30 36 25 40 25 40 C25 40 20 36 20 30" fill="#FF6B8A" className="animate-bounce" />
      <path d="M70 25 C70 21 75 21 75 25 C75 21 80 21 80 25 C80 31 75 35 75 35 C75 35 70 31 70 25" fill="#FF6B8A" className="animate-bounce" style={{ animationDelay: "0.2s" }} />
      <path d="M75 65 C75 62 78 62 78 65 C78 62 81 62 81 65 C81 69 78 72 78 72 C78 72 75 69 75 65" fill="#FF6B8A" className="animate-bounce" style={{ animationDelay: "0.4s" }} />
      <path d="M15 60 C15 57 18 57 18 60 C18 57 21 57 21 60 C21 64 18 67 18 67 C18 67 15 64 15 60" fill="#FF6B8A" className="animate-bounce" style={{ animationDelay: "0.3s" }} />
    </svg>
  )
}

function LetterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Envelope */}
      <rect x="15" y="30" width="70" height="50" rx="3" fill="#FFF5F5" stroke="#DC143C" strokeWidth="2" />
      {/* Flap */}
      <path d="M15 30 L50 55 L85 30" fill="#FFE4E6" stroke="#DC143C" strokeWidth="2" />
      {/* Heart seal */}
      <path d="M45 50 C45 45 50 45 50 50 C50 45 55 45 55 50 C55 58 50 62 50 62 C50 62 45 58 45 50" fill="#DC143C" />
      {/* Decorative hearts */}
      <path d="M20 70 C20 68 22 68 22 70 C22 68 24 68 24 70 C24 73 22 75 22 75 C22 75 20 73 20 70" fill="#FF6B8A" />
      <path d="M76 70 C76 68 78 68 78 70 C78 68 80 68 80 70 C80 73 78 75 78 75 C78 75 76 73 76 70" fill="#FF6B8A" />
    </svg>
  )
}

function getIcon(iconName: string, className: string) {
  switch (iconName) {
    case "rose":
      return <RoseIcon className={className} />
    case "ring":
      return <RingIcon className={className} />
    case "chocolate":
      return <ChocolateIcon className={className} />
    case "teddy":
      return <TeddyIcon className={className} />
    case "promise":
      return <PromiseIcon className={className} />
    case "hug":
      return <HugIcon className={className} />
    case "kiss":
      return <KissIcon className={className} />
    case "letter":
      return <LetterIcon className={className} />
    default:
      return <Heart className={className} />
  }
}

export function ValentineJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)

  const handleTap = () => {
    if (isAnimating || currentStep >= journeySteps.length - 1) return
    
    setIsAnimating(true)
    setShowSparkles(true)
    
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
      setIsAnimating(false)
    }, 500)
    
    setTimeout(() => {
      setShowSparkles(false)
    }, 800)
  }

  const currentStepData = journeySteps[currentStep]
  const isLastStep = currentStep === journeySteps.length - 1

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        {journeySteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= currentStep ? "bg-primary scale-110" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Main card */}
      <div
        onClick={!isLastStep ? handleTap : undefined}
        className={`relative bg-card rounded-3xl p-6 shadow-xl border-2 border-primary/20 overflow-hidden transition-all duration-500 ${
          !isLastStep ? "cursor-pointer active:scale-95" : ""
        } ${isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary"
              style={{
                width: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Sparkles effect */}
        {showSparkles && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute text-primary animate-ping"
                style={{
                  width: "16px",
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              {currentStepData.title}
            </span>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-32 h-32 flex items-center justify-center transition-transform duration-500 ${
                isAnimating ? "rotate-12 scale-110" : "hover:scale-105"
              }`}
            >
              {getIcon(currentStepData.icon, "w-full h-full")}
            </div>
          </div>

          {/* Message */}
          {isLastStep ? (
            <div className="bg-secondary/50 rounded-2xl p-5 border border-primary/10">
              <div className="text-center mb-4">
                <Heart className="w-6 h-6 text-primary mx-auto mb-2" fill="currentColor" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">My Love Letter To You</p>
              </div>
              <p className="text-foreground leading-relaxed text-center font-serif italic text-sm">
                {finalLetter}
              </p>
              <div className="flex justify-center mt-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              <p className="text-foreground text-center text-lg font-serif italic leading-relaxed mb-6">
                &ldquo;{currentStepData.message}&rdquo;
              </p>

              {/* Tap instruction */}
              <div className="text-center">
                <p className="text-muted-foreground text-sm animate-pulse">
                  {currentStepData.instruction}
                </p>
                <div className="mt-2 flex justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center animate-bounce">
                    <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Reset button for last step */}
      {isLastStep && (
        <button
          onClick={() => setCurrentStep(0)}
          className="mt-6 w-full py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
        >
          Start Journey Again
        </button>
      )}
    </div>
  )
}
