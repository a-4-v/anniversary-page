"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  question: string
  options: string[]
  emojis: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "Jab tum mujhe ek lambe din ke baad dekhti ho, tumhara dil kaisa feel karta hai?",
    options: [
      "Jaise finally apne ghar aa gayi hoon",
      "5 saal baad bhi mera dil dhadak jaata hai tere liye",
      "Itna pyaar feel hota hai jo words mein nahi aa sakta",
      "Jaise sab kuch finally sahi ho gaya",
    ],
    emojis: ["🏠💕", "💓💗", "🥰💖", "✨💫"],
  },
  {
    id: 2,
    question: "Kis moment mein tumhe sabse zyada mera pyaar feel hota hai?",
    options: [
      "Jab main tumhe bina kuch bole sirf gale lagata hoon",
      "Jab main tumhari choti choti baatein yaad rakhta hoon",
      "Jab main tumhe aise dekhta hoon jaise tum meri poori duniya ho",
      "Jab main tumhe har din choose karta hoon",
    ],
    emojis: ["🤗💕", "🥹💝", "👀💖", "💑💗"],
  },
  {
    id: 3,
    question: "Hamari choti si ladaai ke waqt tumhara dil secretly kya kehta hai?",
    options: [
      "Itna pyaar karte hue gussa nahi reh sakti",
      "Main already seconds gin rahi hoon jab tak hum maan jayein",
      "Teri smile mera nakli gussa tod dene wali hai",
      "Bas teri baahon mein wapas jaana hai",
    ],
    emojis: ["😤💕", "⏰💗", "😊💖", "🤗💓"],
  },
  {
    id: 4,
    question: "Jab tum hamare forever ke baare mein sochti ho, tumhare dil mein kya hota hai?",
    options: [
      "Hamari shaadi sochke butterflies aati hain",
      "Poora sukoon feel hota hai ki tum meri kismat ho",
      "Tumhe husband bolne ka wait nahi hota",
      "Grateful feel hoti hoon is beautiful love story ke liye",
    ],
    emojis: ["🦋💒", "☺️💫", "💍💕", "🙏💖"],
  },
  {
    id: 5,
    question: "Tumhe kya lagta hai jab main tumhe succeed hote dekhta hoon toh mujhe kaisa feel hota hai?",
    options: [
      "Khud ki success se bhi zyada proud feel hota hai",
      "Poori duniya ko tumhare baare mein batana chahta hoon",
      "Phir se tumse pyaar ho jaata hai",
      "Itna overwhelmed ki main tumhe apna keh sakta hoon",
    ],
    emojis: ["🏆💕", "📢💗", "😍💖", "🥺💓"],
  },
]

export function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showEmoji, setShowEmoji] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState("")
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    if (showEmoji) return
    setSelectedAnswer(optionIndex)
    setSelectedEmoji(questions[currentQuestion].emojis[optionIndex])
    setShowEmoji(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowEmoji(false)
      setSelectedEmoji("")
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowEmoji(false)
    setSelectedEmoji("")
    setQuizComplete(false)
  }

  if (quizComplete) {
    return (
      <div className="text-center space-y-6 py-8">
        <Sparkles className="w-16 h-16 text-primary mx-auto animate-pulse" />
        <h3 className="text-3xl font-serif text-foreground">Hamare Dilon Ne Bol Diya!</h3>
        <p className="text-5xl">💕💑💕</p>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Har jawab mein hamara pyaar dikhai deta hai... Tum meri jaan ho, hamesha ke liye!
        </p>
        <Button
          onClick={restartQuiz}
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Heart className="w-4 h-4 mr-2" />
          Phir Se Khelo, Meri Jaan
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex justify-center gap-2">
        {questions.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index < currentQuestion
                ? "bg-primary"
                : index === currentQuestion
                  ? "bg-primary/60"
                  : "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Question */}
      <div className="text-center space-y-2">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <h3 className="text-xl md:text-2xl font-serif text-foreground">
          {questions[currentQuestion].question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 max-w-lg mx-auto">
        {questions[currentQuestion].options.map((option, index) => {
          const isSelected = selectedAnswer === index

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showEmoji}
              className={cn(
                "w-full p-4 rounded-xl text-left transition-all duration-300 border-2",
                !showEmoji && "hover:border-primary hover:bg-accent/50 cursor-pointer",
                !showEmoji && "bg-card border-border",
                isSelected && "bg-primary/10 border-primary",
                showEmoji && !isSelected && "bg-muted/50 border-border opacity-60"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn("text-foreground", isSelected && "text-primary font-medium")}>
                  {option}
                </span>
                {isSelected && showEmoji && (
                  <span className="text-2xl animate-bounce">{selectedEmoji}</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Emoji Reaction */}
      {showEmoji && (
        <div className="text-center space-y-4 animate-in fade-in duration-300">
          <p className="text-4xl animate-pulse">{selectedEmoji}</p>
          <Button
            onClick={nextQuestion}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {currentQuestion < questions.length - 1 ? "Agla Sawaal" : "Quiz Complete Karo"}
            <Heart className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}
