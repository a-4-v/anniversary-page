"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

const journeySteps = [
  {
    id: "rose",
    title: "Rose Day",
    message: "A rose for the most beautiful person in my life",
    instruction: "Tap to continue",
  },
  {
    id: "proposal",
    title: "Propose Day",
    message: "Will you be my life partner?",
    instruction: "Tap to continue",
  },
  {
    id: "chocolate",
    title: "Chocolate Day",
    message: "You make life sweeter than any chocolate",
    instruction: "Tap to continue",
  },
  {
    id: "teddy",
    title: "Teddy Day",
    message: "Someone to remind you of me when I am not around",
    instruction: "Tap to continue",
  },
  {
    id: "promise",
    title: "Promise Day",
    message: "I am only yours, you are the most special person to me",
    instruction: "Tap to continue",
  },
  {
    id: "hug",
    title: "Hug Day",
    message: "My most comfortable place",
    instruction: "Tap to continue",
  },
  {
    id: "kiss",
    title: "Kiss Day",
    message: "I will never leave you",
    instruction: "Tap to continue",
  },
  {
    id: "letter",
    title: "Valentine's Day",
    message: "",
    instruction: "",
  },
]

const finalLetter = `I know hu perfect nthi and ghani var mature pan nthi hoto. Ketli var tne radavi che and gusso pan apavu chhu. Tu mne bhagwan e aapelu best gift che. Bs mari j reje, mne chhodine n jati. Hu mari chhelli heartbeat sudhi bdhi try kris tne khush rakhvani. I love you so much and I always will`

export function ValentineJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showSparkle, setShowSparkle] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)

  const handleTap = () => {
    if (currentStep < journeySteps.length - 1) {
      setShowSparkle(true)
      setTimeout(() => {
        setShowSparkle(false)
        setCurrentStep((prev) => prev + 1)
      }, 300)
    }
  }

  const openLetter = () => {
    if (!letterOpen) {
      setLetterOpen(true)
    }
  }

  const resetJourney = () => {
    setCurrentStep(0)
    setLetterOpen(false)
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
        <p className="text-sm uppercase tracking-widest text-primary mb-6">
          {step.title}
        </p>

        {/* Message or Letter */}
        {isLetter ? (
          <div className="space-y-6">
            {/* Royal Letter with Opening Animation */}
            <div 
              className="relative max-w-md mx-auto cursor-pointer perspective-1000"
              onClick={openLetter}
            >
              {/* Envelope */}
              <div className={`relative transition-all duration-700 ${letterOpen ? "opacity-0 scale-90" : "opacity-100"}`}>
                {/* Envelope body */}
                <div className="bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-xl border-2 border-amber-300 p-8 relative overflow-hidden">
                  {/* Envelope flap */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-amber-200 to-amber-300 origin-top transition-transform duration-700 ${
                      letterOpen ? "rotate-x-180" : ""
                    }`}
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      transformStyle: "preserve-3d",
                    }}
                  />
                  {/* Wax seal */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-lg flex items-center justify-center border-2 border-red-900 z-10">
                    <Heart className="w-6 h-6 text-red-200" fill="currentColor" />
                  </div>
                  <div className="h-20" />
                  <p className="text-amber-700 font-serif italic text-center">Tap to open</p>
                </div>
              </div>

              {/* Opened Letter - Royal Style */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ${
                  letterOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-75 translate-y-10 pointer-events-none"
                }`}
              >
                {/* Royal letter paper */}
                <div className="relative bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 rounded-sm shadow-2xl border-4 border-double border-amber-400">
                  {/* Royal decorative header */}
                  <div className="border-b-2 border-amber-300 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 p-4">
                    <div className="flex justify-center gap-2 items-center">
                      <div className="h-px w-12 bg-amber-400" />
                      <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                      <div className="h-px w-12 bg-amber-400" />
                    </div>
                  </div>
                  
                  {/* Letter content */}
                  <div className="p-6 md:p-8">
                    {/* Salutation with flourish */}
                    <div className="mb-6">
                      <p className="text-lg md:text-xl text-amber-800 font-serif italic text-center">
                        My Dearest Dhruvi,
                      </p>
                      <div className="flex justify-center mt-2">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                      </div>
                    </div>
                    
                    {/* Letter body - justified */}
                    <p className="text-base md:text-lg leading-loose text-amber-900 font-serif text-justify px-2 md:px-4">
                      {finalLetter}
                    </p>
                    
                    {/* Signature section */}
                    <div className="mt-8 border-t border-amber-200 pt-6">
                      <div className="text-right pr-4">
                        <p className="text-lg font-serif text-amber-700 italic">
                          Forever & Always Yours,
                        </p>
                        <p className="text-2xl md:text-3xl font-serif text-amber-900 mt-2" style={{ fontFamily: "cursive" }}>
                          Niral
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Royal decorative footer */}
                  <div className="border-t-2 border-amber-300 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 p-3">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="w-3 h-3 text-primary/60" fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Corner ornaments */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400 rounded-tl-sm" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-400 rounded-tr-sm" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-400 rounded-bl-sm" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-400 rounded-br-sm" />
                </div>
              </div>
            </div>

            {letterOpen && (
              <button
                onClick={resetJourney}
                className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                Start Journey Again
              </button>
            )}
          </div>
        ) : (
          <>
            <p className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed px-4">
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
