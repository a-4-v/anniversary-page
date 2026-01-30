"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"

const journeySteps = [
  {
    id: "rose",
    title: "Rose Day",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop&q=80",
    message: "A rose for the most beautiful person in my life",
    instruction: "Tap to continue",
  },
  {
    id: "proposal",
    title: "Propose Day",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop&q=80",
    message: "Will you be my life partner?",
    instruction: "Tap to continue",
  },
  {
    id: "chocolate",
    title: "Chocolate Day",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop&q=80",
    message: "You make life sweeter than any chocolate",
    instruction: "Tap to continue",
  },
  {
    id: "teddy",
    title: "Teddy Day",
    image: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=400&h=400&fit=crop&q=80",
    message: "Someone to remind you of me when I am not around",
    instruction: "Tap to continue",
  },
  {
    id: "promise",
    title: "Promise Day",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop&q=80",
    message: "I am only yours, you are the most special person to me",
    instruction: "Tap to continue",
  },
  {
    id: "hug",
    title: "Hug Day",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=400&fit=crop&q=80",
    message: "My most comfortable place",
    instruction: "Tap to continue",
  },
  {
    id: "kiss",
    title: "Kiss Day",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop&q=80",
    message: "I will never leave you",
    instruction: "Tap to continue",
  },
  {
    id: "letter",
    title: "Valentine's Day",
    image: "",
    message: "",
    instruction: "",
  },
]

const finalLetter = `I know hu perfect nthi and ghani var mature pan nthi hoto. Ketli var tne radavi che and gusso pan apavu chhu. Tu mne bhagwan e aapelu best gift che. Bs mari j reje, mne chhodine n jati. Hu mari chhelli heartbeat sudhi bdhi try kris tne khush rakhvani. I love you so much and I always will`

export function ValentineJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showSparkle, setShowSparkle] = useState(false)
  const [letterOpened, setLetterOpened] = useState(false)

  const handleTap = () => {
    if (currentStep < journeySteps.length - 1) {
      setShowSparkle(true)
      setTimeout(() => {
        setShowSparkle(false)
        setCurrentStep((prev) => prev + 1)
      }, 300)
    }
  }

  const handleLetterOpen = () => {
    if (!letterOpened) {
      setLetterOpened(true)
    }
  }

  const resetJourney = () => {
    setCurrentStep(0)
    setLetterOpened(false)
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

        {/* Message or Letter */}
        {isLetter ? (
          <div className="space-y-6">
            {!letterOpened ? (
              /* Closed Scroll/Letter */
              <div 
                className="cursor-pointer mx-auto"
                onClick={handleLetterOpen}
              >
                <p className="text-muted-foreground mb-4 text-sm">Tap to open your letter</p>
                
                {/* Rolled/Scroll Letter Design */}
                <div className="relative w-48 h-64 mx-auto">
                  {/* Left cylinder shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 rounded-l-full shadow-lg z-10" />
                  
                  {/* Main paper body */}
                  <div className="absolute left-4 right-4 top-2 bottom-2 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 shadow-inner">
                    {/* Paper texture lines */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-3/4 h-px bg-amber-900" />
                      ))}
                    </div>
                    {/* Sealed text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-amber-800/50 font-serif italic text-sm rotate-[-5deg]">With Love</span>
                    </div>
                  </div>
                  
                  {/* Right cylinder shadow */}
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-amber-700 via-amber-600 to-amber-800 rounded-r-full shadow-lg z-10" />
                  
                  {/* Ribbon/Seal */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-lg flex items-center justify-center border-2 border-red-400">
                      <Heart className="w-5 h-5 text-red-200" fill="currentColor" />
                    </div>
                    {/* Ribbon tails */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-16">
                      <div className="absolute left-0 w-3 h-full bg-gradient-to-b from-red-600 to-red-700 transform -rotate-12 rounded-b-sm" />
                      <div className="absolute right-0 w-3 h-full bg-gradient-to-b from-red-600 to-red-700 transform rotate-12 rounded-b-sm" />
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-8 animate-pulse">Tap to unroll</p>
              </div>
            ) : (
              /* Opened Letter with animation */
              <div className="animate-in fade-in zoom-in-95 duration-700">
                {/* Letter paper */}
                <div className="relative max-w-md mx-auto">
                  <div className="relative bg-gradient-to-b from-amber-50 to-amber-100 rounded-sm shadow-2xl border border-amber-300">
                    {/* Decorative top border */}
                    <div className="h-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 rounded-t-sm" />
                    
                    {/* Letter content */}
                    <div className="p-6 md:p-8">
                      {/* Letter header */}
                      <p className="text-base text-amber-700 mb-6 text-left font-serif italic">My Dearest Dhruvi,</p>
                      
                      {/* Letter body */}
                      <p className="text-base md:text-lg leading-loose text-amber-900 font-serif text-justify">
                        {finalLetter}
                      </p>
                      
                      {/* Letter footer */}
                      <div className="mt-8 text-right">
                        <p className="text-lg font-serif text-primary italic">
                          Forever Yours,
                        </p>
                        <p className="text-2xl font-serif text-amber-800 mt-2">
                          Niral
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative bottom border */}
                    <div className="h-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 rounded-b-sm" />
                  </div>
                  
                  {/* Paper shadow */}
                  <div className="absolute -bottom-3 left-2 right-2 h-6 bg-amber-200/40 rounded-b-lg blur-md -z-10" />
                </div>

                <button
                  onClick={resetJourney}
                  className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Start Journey Again
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
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
