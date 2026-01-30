"use client"

import { useState } from "react"
import { Heart, Sparkles, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LoveLetter {
  id: number
  startWord: string
  options: string[]
  correctIndex: number
  fullSentence: string
}

const loveLetters: LoveLetter[] = [
  {
    id: 1,
    startWord: "Tum mere liye...",
    options: ["timepass ho", "sab kuch ho", "friend ho"],
    correctIndex: 1,
    fullSentence: "Tum mere liye sab kuch ho",
  },
  {
    id: 2,
    startWord: "Main tumse...",
    options: ["kabhi kabhi", "har pal", "thoda thoda"],
    correctIndex: 1,
    fullSentence: "Main tumse har pal pyaar karta hoon",
  },
  {
    id: 3,
    startWord: "Tumhari smile...",
    options: ["theek hai", "mera din bana deti hai", "normal hai"],
    correctIndex: 1,
    fullSentence: "Tumhari smile mera din bana deti hai",
  },
  {
    id: 4,
    startWord: "Tumhare bina...",
    options: ["chal jayega", "zindagi adhuri hai", "koi baat nahi"],
    correctIndex: 1,
    fullSentence: "Tumhare bina zindagi adhuri hai",
  },
  {
    id: 5,
    startWord: "Hamesha tumhare saath...",
    options: ["shayad rahoon", "rehna chahta hoon", "dekhenge"],
    correctIndex: 1,
    fullSentence: "Hamesha tumhare saath rehna chahta hoon",
  },
]

export function ReasonsILoveYou() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedLetters, setCompletedLetters] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [shake, setShake] = useState(false)

  const currentLetter = loveLetters[currentIndex]

  const handleSelect = (optionIndex: number) => {
    if (showResult) return
    setSelectedOption(optionIndex)
    setShowResult(true)

    if (optionIndex === currentLetter.correctIndex) {
      setScore((prev) => prev + 1)
      setCompletedLetters((prev) => [...prev, currentLetter.fullSentence])
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      // Still add the correct sentence to the love letter
      setCompletedLetters((prev) => [...prev, currentLetter.fullSentence])
    }
  }

  const handleNext = () => {
    if (currentIndex < loveLetters.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setIsComplete(true)
    }
  }

  const resetGame = () => {
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowResult(false)
    setScore(0)
    setCompletedLetters([])
    setIsComplete(false)
  }

  if (isComplete) {
    return (
      <div className="w-full">
        {/* Completed Love Letter */}
        <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-2xl p-5 md:p-8 border border-primary/20 shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="w-4 h-4 text-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-serif text-center text-primary mb-4">
            My Love Letter To You
          </h3>
          
          <div className="bg-card/80 rounded-xl p-4 md:p-6 mb-5 border border-primary/10">
            <p className="text-sm md:text-base text-muted-foreground mb-3 italic">Dear Dhruvi,</p>
            <div className="space-y-2">
              {completedLetters.map((sentence, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-foreground font-serif leading-relaxed animate-fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {sentence}
                  {i < completedLetters.length - 1 ? "." : "..."}
                </p>
              ))}
            </div>
            <p className="text-sm md:text-base text-muted-foreground mt-4 italic text-right">
              Forever Yours, Niral
            </p>
          </div>

          <div className="text-center mb-5">
            <p className="text-sm text-muted-foreground">
              You completed the love letter with{" "}
              <span className="text-primary font-bold">{score}/{loveLetters.length}</span>{" "}
              correct choices
            </p>
            {score === loveLetters.length && (
              <p className="text-primary font-serif mt-2 text-base">
                Perfect! You know my heart completely!
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={resetGame}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Write Again
            </Button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-muted-foreground">Writing love letter</p>
          <p className="text-xs font-medium text-primary">
            {currentIndex + 1} / {loveLetters.length}
          </p>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-pink-400 rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / loveLetters.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Current Letter Prompt */}
      <div
        className={`bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-2xl p-5 md:p-6 border border-primary/20 shadow-lg mb-4 ${
          shake ? "animate-shake" : ""
        }`}
      >
        <div className="flex justify-center mb-4">
          <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
        </div>

        <p className="text-lg md:text-xl font-serif text-center text-foreground mb-5">
          {currentLetter.startWord}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {currentLetter.options.map((option, index) => {
            const isCorrect = index === currentLetter.correctIndex
            const isSelected = selectedOption === index
            
            let buttonClass = "w-full py-3.5 px-4 rounded-xl border-2 text-sm md:text-base font-medium transition-all duration-300 "
            
            if (showResult) {
              if (isCorrect) {
                buttonClass += "border-green-500 bg-green-50 text-green-700"
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-red-400 bg-red-50 text-red-600"
              } else {
                buttonClass += "border-muted bg-muted/50 text-muted-foreground opacity-50"
              }
            } else {
              buttonClass += "border-primary/20 bg-card hover:border-primary hover:bg-primary/5 text-foreground active:scale-[0.98]"
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={showResult}
                className={buttonClass}
              >
                {option}
              </button>
            )
          })}
        </div>

        {/* Result Message */}
        {showResult && (
          <div className="mt-5 text-center animate-fade-in">
            {selectedOption === currentLetter.correctIndex ? (
              <p className="text-green-600 font-medium text-sm">
                Yes! You know what is in my heart!
              </p>
            ) : (
              <p className="text-muted-foreground text-sm">
                The right words are: <span className="text-primary font-medium">{currentLetter.options[currentLetter.correctIndex]}</span>
              </p>
            )}
          </div>
        )}
      </div>

      {/* Next Button */}
      {showResult && (
        <div className="flex justify-center animate-fade-in">
          <Button
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {currentIndex < loveLetters.length - 1 ? (
              <>
                Next Line
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                See Complete Letter
                <Heart className="w-4 h-4 ml-2" fill="currentColor" />
              </>
            )}
          </Button>
        </div>
      )}

      {/* Instructions */}
      {!showResult && (
        <p className="text-center text-xs text-muted-foreground mt-4">
          Complete the sentence by choosing the right words from my heart
        </p>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  )
}
