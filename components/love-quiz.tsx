"use client"

import { useState } from "react"
import { Heart, Sparkles, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  funnyResponse: {
    correct: string
    wrong: string
  }
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
    correctAnswer: 1,
    funnyResponse: {
      correct: "Mujhe pata tha! 1,825 din baad bhi main tumhare dil ki dhadkan hoon!",
      wrong: "Sab feelings sahi hain, par maan lo... tumhara dil abhi bhi mujhe dekh ke skip karta hai!",
    },
  },
  {
    id: 2,
    question: "Kis moment mein tumhe sabse zyada mera pyaar feel hota hai?",
    options: [
      "Jab tum mujhe bina kuch bole sirf gale laga lete ho",
      "Jab tum meri choti choti baatein yaad rakhte ho",
      "Jab tum mujhe aise dekhte ho jaise main tumhari poori duniya hoon",
      "Jab tum mujhe har din choose karte ho",
    ],
    correctAnswer: 2,
    funnyResponse: {
      correct: "Kyunki tum HO meri poori duniya, aur main chahta hoon tum ye hamesha meri aankhon mein dekho!",
      wrong: "Sweet guess! Par jab humari nazrein milti hain, mujhe umeed hai tum infinity dekhti ho...",
    },
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
    correctAnswer: 1,
    funnyResponse: {
      correct: "Haha! Mujhe pata tha! Hamara pyaar itna strong hai ki koi bhi silly argument zyada der nahi tikta!",
      wrong: "Sachchi baat toh ye hai... hum dono bas jaldi se manana chahte hain!",
    },
  },
  {
    id: 4,
    question: "Jab tum hamare forever ke baare mein sochti ho, tumhare dil mein kya hota hai?",
    options: [
      "Hamari shaadi sochke butterflies aati hain",
      "Poora sukoon feel hota hai ki tum meri kismat ho",
      "Tumhe husband bolne ka wait nahi hota",
      "Grateful aansu aate hain is beautiful love story ke liye",
    ],
    correctAnswer: 2,
    funnyResponse: {
      correct: "Jaldi hi, meri jaan... jaldi hi tum mujhe hamesha ke liye apna bulaaogi, aur mujhe wait nahi hota!",
      wrong: "Har jawab ek hi beautiful sach ki taraf jaata hai - hamara forever stars mein likha hai!",
    },
  },
  {
    id: 5,
    question: "Tumhe kya lagta hai jab main tumhe succeed hote dekhta hoon toh meri rooh kaisa feel karti hai?",
    options: [
      "Khud ki success se bhi zyada proud feel hota hai",
      "Poori duniya ko tumhare baare mein batana chahta hoon",
      "Phir se tumse pyaar ho jaata hai",
      "Itna overwhelmed ki main tumhe apna keh sakta hoon",
    ],
    correctAnswer: 0,
    funnyResponse: {
      correct: "Tum mere dil ko kitna achhe se jaanti ho! Tumhari khushi meri sabse badi achievement hai!",
      wrong: "Sab sahi hai, meri jaan! Par tumhara biggest supporter hona hamesha pehle aayega!",
    },
  },
]

export function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [feedback, setFeedback] = useState<string>("")

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return
    setSelectedAnswer(optionIndex)
    const isCorrect = optionIndex === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
      setFeedback(questions[currentQuestion].funnyResponse.correct)
    } else {
      setFeedback(questions[currentQuestion].funnyResponse.wrong)
    }
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setFeedback("")
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizComplete(false)
    setFeedback("")
  }

  if (quizComplete) {
    const percentage = (score / questions.length) * 100
    let message = ""
    if (percentage === 100) {
      message = "Tum mera dil poori tarah se jaanti ho... tabhi toh tumse itna gehra pyaar ho gaya!"
    } else if (percentage >= 60) {
      message = "Tum sachchi mein hamare pyaar ko samajhti ho! Isliye hum perfect hain saath mein, meri jaan!"
    } else {
      message = "Hamara pyaar shabdon se kahin zyada bolta hai... aur ye kitna khoobsurat hai!"
    }

    return (
      <div className="text-center space-y-6 py-8">
        <Sparkles className="w-16 h-16 text-primary mx-auto animate-pulse" />
        <h3 className="text-3xl font-serif text-foreground">Hamare Dilon Ne Bol Diya!</h3>
        <p className="text-5xl font-serif text-primary">
          {score}/{questions.length}
        </p>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">{message}</p>
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
          const isCorrect = index === questions[currentQuestion].correctAnswer
          const showCorrect = showResult && isCorrect
          const showWrong = showResult && isSelected && !isCorrect

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 rounded-xl text-left transition-all duration-300 border-2",
                !showResult && "hover:border-primary hover:bg-accent/50 cursor-pointer",
                !showResult && "bg-card border-border",
                showCorrect && "bg-green-50 border-green-400",
                showWrong && "bg-red-50 border-red-400",
                showResult && !showCorrect && !showWrong && "bg-muted/50 border-border opacity-60"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn("text-foreground", showCorrect && "text-green-700", showWrong && "text-red-700")}>
                  {option}
                </span>
                {showCorrect && <Check className="w-5 h-5 text-green-500" />}
                {showWrong && <X className="w-5 h-5 text-red-500" />}
              </div>
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {showResult && (
        <div className="text-center space-y-4 animate-in fade-in duration-300">
          <p className="text-lg text-muted-foreground italic">{feedback}</p>
          <Button
            onClick={nextQuestion}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {currentQuestion < questions.length - 1 ? "Agla Sawaal" : "Hamara Love Score Dekho"}
            <Heart className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}
