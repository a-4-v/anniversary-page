"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

const journeySteps = [
  {
    id: "rose",
    title: "Rose Day",
    icon: "rose",
    message: "A rose for the most beautiful person in my life",
    instruction: "Tap to continue",
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
    instruction: "Tap to continue",
  },
  {
    id: "teddy",
    title: "Teddy Day",
    icon: "teddy",
    message: "Someone to remind you of me when I am not around",
    instruction: "Tap to continue",
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

// Elegant Minimalist SVG Icons
function RoseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none">
      <path d="M40 55 L40 90" stroke="#3D7A37" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 70 Q30 65 25 70 Q30 75 40 70" fill="#4A9F42" />
      <circle cx="40" cy="35" r="18" fill="#DC143C" opacity="0.9" />
      <circle cx="35" cy="32" r="12" fill="#E8365D" opacity="0.9" />
      <circle cx="45" cy="32" r="12" fill="#C41E3A" opacity="0.9" />
      <circle cx="40" cy="30" r="8" fill="#9B1B30" />
      <circle cx="40" cy="28" r="4" fill="#7B0D1E" />
    </svg>
  )
}

function RingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <ellipse cx="40" cy="50" rx="18" ry="8" stroke="#FFD700" strokeWidth="6" fill="none" />
      <ellipse cx="40" cy="50" rx="18" ry="8" stroke="#FFF8DC" strokeWidth="1" fill="none" opacity="0.5" />
      <polygon points="40,18 30,35 40,45 50,35" fill="#E0FFFF" stroke="#B0E0E6" strokeWidth="1" />
      <polygon points="40,18 50,35 40,45" fill="#B0E0E6" />
      <polygon points="36,28 40,18 44,28 40,32" fill="#FFFFFF" opacity="0.7" />
      <circle cx="40" cy="12" r="2" fill="#FFD700" className="animate-pulse" />
    </svg>
  )
}

function ChocolateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 70" className={className} fill="none">
      <path 
        d="M40 60 C20 60 5 45 5 30 C5 15 18 8 30 8 C36 8 40 12 40 18 C40 12 44 8 50 8 C62 8 75 15 75 30 C75 45 60 60 40 60"
        fill="#8B4513"
        stroke="#5D3A1A"
        strokeWidth="2"
      />
      <circle cx="30" cy="35" r="6" fill="#3D1F0D" />
      <circle cx="50" cy="35" r="6" fill="#3D1F0D" />
      <circle cx="40" cy="45" r="5" fill="#D2691E" />
      <path d="M35 12 Q40 5 45 12" stroke="#DC143C" strokeWidth="3" fill="none" />
    </svg>
  )
}

function TeddyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none">
      <circle cx="25" cy="22" r="10" fill="#C4A77D" />
      <circle cx="55" cy="22" r="10" fill="#C4A77D" />
      <circle cx="25" cy="22" r="5" fill="#DEB887" />
      <circle cx="55" cy="22" r="5" fill="#DEB887" />
      <ellipse cx="40" cy="35" rx="22" ry="20" fill="#C4A77D" />
      <ellipse cx="40" cy="42" rx="10" ry="7" fill="#DEB887" />
      <ellipse cx="40" cy="40" rx="4" ry="3" fill="#2D1B0E" />
      <circle cx="32" cy="32" r="3" fill="#2D1B0E" />
      <circle cx="48" cy="32" r="3" fill="#2D1B0E" />
      <circle cx="33" cy="31" r="1" fill="#FFFFFF" />
      <circle cx="49" cy="31" r="1" fill="#FFFFFF" />
      <ellipse cx="40" cy="70" rx="20" ry="18" fill="#C4A77D" />
      <ellipse cx="40" cy="68" rx="12" ry="10" fill="#DEB887" />
      <path d="M35 65 C35 61 40 61 40 65 C40 61 45 61 45 65 C45 71 40 75 40 75 C40 75 35 71 35 65" fill="#DC143C" />
    </svg>
  )
}

function PromiseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none">
      <path d="M10 35 Q15 25 25 30 L35 35" stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 35 Q65 25 55 30 L45 35" stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M35 35 Q40 30 45 35" stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M35 12 C35 8 40 8 40 12 C40 8 45 8 45 12 C45 18 40 22 40 22 C40 22 35 18 35 12" fill="#DC143C" />
    </svg>
  )
}

function HugIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <circle cx="32" cy="25" r="10" fill="#FFDBAC" />
      <circle cx="48" cy="23" r="10" fill="#FFDBAC" />
      <ellipse cx="40" cy="55" rx="22" ry="20" fill="#E8B4B8" />
      <path d="M18 45 Q25 55 40 50" stroke="#FFDBAC" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M62 43 Q55 53 40 48" stroke="#FFDBAC" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M35 35 C35 32 40 32 40 35 C40 32 45 32 45 35 C45 40 40 44 40 44 C40 44 35 40 35 35" fill="#DC143C" className="animate-pulse" />
    </svg>
  )
}

function KissIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none">
      <path d="M20 30 Q30 20 40 30 Q50 20 60 30 Q50 45 40 40 Q30 45 20 30" fill="#E8365D" />
      <path d="M40 30 L40 40" stroke="#C41E3A" strokeWidth="1" />
      <path d="M15 15 C15 12 18 12 18 15 C18 12 21 12 21 15 C21 19 18 22 18 22 C18 22 15 19 15 15" fill="#FF6B8A" opacity="0.7" />
      <path d="M60 12 C60 9 63 9 63 12 C63 9 66 9 66 12 C66 16 63 19 63 19 C63 19 60 16 60 12" fill="#FF6B8A" opacity="0.7" />
      <path d="M65 25 C65 23 67 23 67 25 C67 23 69 23 69 25 C69 28 67 30 67 30 C67 30 65 28 65 25" fill="#DC143C" opacity="0.5" />
    </svg>
  )
}

function LetterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none">
      <rect x="10" y="15" width="60" height="40" rx="3" fill="#FFF8DC" stroke="#DEB887" strokeWidth="2" />
      <path d="M10 15 L40 35 L70 15" stroke="#DEB887" strokeWidth="2" fill="#FFFACD" />
      <path d="M35 38 C35 34 40 34 40 38 C40 34 45 34 45 38 C45 44 40 48 40 48 C40 48 35 44 35 38" fill="#DC143C" />
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
  const [showSparkle, setShowSparkle] = useState(false)

  const handleTap = () => {
    if (currentStep < journeySteps.length - 1) {
      setShowSparkle(true)
      setTimeout(() => {
        setShowSparkle(false)
        setCurrentStep((prev) => prev + 1)
      }, 300)
    }
  }

  const resetJourney = () => {
    setCurrentStep(0)
  }

  const step = journeySteps[currentStep]
  const isLetter = step.id === "letter"

  return (
    <div className="relative">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-8">
        {journeySteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= currentStep ? "bg-primary scale-110" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className={`bg-card rounded-3xl p-6 md:p-10 shadow-lg border border-border text-center relative overflow-hidden ${
          !isLetter ? "cursor-pointer active:scale-98" : ""
        } transition-transform`}
        onClick={!isLetter ? handleTap : undefined}
      >
        {/* Sparkle effect */}
        {showSparkle && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
        )}

        {/* Title */}
        <p className="text-sm uppercase tracking-widest text-primary mb-4">
          {step.title}
        </p>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {getIcon(step.icon, "w-28 h-28 md:w-36 md:h-36")}
          </div>
        </div>

        {/* Message or Letter */}
        {isLetter ? (
          <div className="space-y-6">
            {/* Letter shaped container */}
            <div className="relative max-w-md mx-auto">
              {/* Letter paper with folded corner */}
              <div className="relative bg-amber-50 rounded-sm shadow-lg border border-amber-200">
                {/* Folded corner effect */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-bl-lg shadow-inner" />
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] border-t-card" />
                
                {/* Letter content */}
                <div className="p-6 md:p-8 pt-8">
                  {/* Letter header */}
                  <p className="text-sm text-amber-600 mb-4 text-left font-serif italic">My Dearest Dhruvi,</p>
                  
                  {/* Letter body */}
                  <p className="text-base md:text-lg leading-loose text-amber-900 font-serif text-justify">
                    {finalLetter}
                  </p>
                  
                  {/* Letter footer */}
                  <div className="mt-8 text-right">
                    <p className="text-lg font-serif text-primary italic">
                      Forever Yours,
                    </p>
                    <p className="text-xl font-serif text-amber-800 mt-1">
                      Niral
                    </p>
                  </div>
                </div>
                
                {/* Decorative lines */}
                <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1 opacity-10">
                  <div className="h-px bg-amber-900" />
                  <div className="h-px bg-amber-900" />
                </div>
              </div>
              
              {/* Envelope shadow underneath */}
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-amber-200/50 rounded-b-lg blur-sm -z-10" />
            </div>

            <button
              onClick={resetJourney}
              className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Start Journey Again
            </button>
          </div>
        ) : (
          <>
            <p className="text-lg md:text-xl font-serif text-foreground mb-6 leading-relaxed">
              {step.message}
            </p>
            <p className="text-sm text-muted-foreground animate-pulse">
              {step.instruction}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
