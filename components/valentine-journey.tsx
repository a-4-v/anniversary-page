"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"

const journeySteps = [
  {
    id: "rose",
    title: "Rose Day",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop&q=80",
    message: "A rose for the most beautiful person in my life",
    instruction: "Tap to continue",
  },
  {
    id: "proposal",
    title: "Propose Day",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&q=80",
    message: "Will you be my life partner?",
    instruction: "Tap to continue",
  },
  {
    id: "chocolate",
    title: "Chocolate Day",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop&q=80",
    message: "You make life sweeter than any chocolate",
    instruction: "Tap to continue",
  },
  {
    id: "teddy",
    title: "Teddy Day",
    image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=400&h=400&fit=crop&q=80",
    message: "Someone to remind you of me when I am not around",
    instruction: "Tap to continue",
  },
  {
    id: "promise",
    title: "Promise Day",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&h=400&fit=crop&q=80",
    message: "I am only yours, you are the most special person to me",
    instruction: "Tap to continue",
  },
  {
    id: "hug",
    title: "Hug Day",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&q=80",
    message: "My most comfortable place",
    instruction: "Tap to continue",
  },
  {
    id: "kiss",
    title: "Kiss Day",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop&q=80",
    message: "I will never leave you",
    instruction: "Tap to continue",
  },
  {
    id: "letter",
    title: "Valentine's Day",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=400&h=400&fit=crop&q=80",
    message: "",
    instruction: "",
  },
]

const finalLetter = `I know hu perfect nthi and ghani var mature pan nthi hoto. Ketli var tne radavi che and gusso pan apavu chhu. Tu mne bhagwan e aapelu best gift che. Bs mari j reje, mne chhodine n jati. Hu mari chhelli heartbeat sudhi bdhi try kris tne khush rakhvani. I love you so much and I always will`

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

        {/* Image */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={step.image || "/placeholder.svg"}
              alt={step.title}
              fill
              className="object-cover"
              unoptimized
            />
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
