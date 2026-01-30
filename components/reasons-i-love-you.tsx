"use client"

import { useState, useEffect, useCallback } from "react"
import { Heart, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Card {
  id: number
  pairId: number
  content: string
  type: "start" | "end"
  isFlipped: boolean
  isMatched: boolean
}

const lovePhrases = [
  { start: "Tum Meri", end: "Jaan Ho" },
  { start: "Dil Se", end: "Pyaar Hai" },
  { start: "Hamesha", end: "Tumhare Saath" },
  { start: "Saat Janam", end: "Ka Rishta" },
  { start: "Meri", end: "Dhruvi" },
  { start: "Forever", end: "Yours" },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function ReasonsILoveYou() {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [isChecking, setIsChecking] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [sparklePositions, setSparklePositions] = useState<{ x: number; y: number }[]>([])

  const initializeGame = useCallback(() => {
    const cardPairs: Card[] = []
    lovePhrases.forEach((phrase, index) => {
      cardPairs.push({
        id: index * 2,
        pairId: index,
        content: phrase.start,
        type: "start",
        isFlipped: false,
        isMatched: false,
      })
      cardPairs.push({
        id: index * 2 + 1,
        pairId: index,
        content: phrase.end,
        type: "end",
        isFlipped: false,
        isMatched: false,
      })
    })
    setCards(shuffleArray(cardPairs))
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setShowCelebration(false)
  }, [])

  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  const handleCardClick = (cardId: number) => {
    if (isChecking) return
    const card = cards.find((c) => c.id === cardId)
    if (!card || card.isFlipped || card.isMatched) return
    if (flippedCards.length >= 2) return

    const newCards = cards.map((c) =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    )
    setCards(newCards)

    const newFlipped = [...flippedCards, cardId]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1)
      setIsChecking(true)

      const [firstId, secondId] = newFlipped
      const firstCard = newCards.find((c) => c.id === firstId)
      const secondCard = newCards.find((c) => c.id === secondId)

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId && firstCard.type !== secondCard.type) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.pairId === firstCard.pairId ? { ...c, isMatched: true } : c
            )
          )
          setMatchedPairs((m) => {
            const newCount = m + 1
            if (newCount === lovePhrases.length) {
              setShowCelebration(true)
              // Generate sparkle positions
              const sparkles = Array.from({ length: 20 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
              }))
              setSparklePositions(sparkles)
            }
            return newCount
          })
          setFlippedCards([])
          setIsChecking(false)
        }, 600)
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c
            )
          )
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  const isGameComplete = matchedPairs === lovePhrases.length

  return (
    <div className="relative">
      <div className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        {/* Header */}
        <div className="relative text-center mb-6">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
            Match Our Love Phrases
          </h3>
          <p className="text-muted-foreground text-sm">
            Find the matching pairs to complete our love story
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <span className="text-muted-foreground">
              Moves: <span className="text-primary font-semibold">{moves}</span>
            </span>
            <span className="text-muted-foreground">
              Matched: <span className="text-primary font-semibold">{matchedPairs}/{lovePhrases.length}</span>
            </span>
          </div>
        </div>

        {/* Game Grid */}
        <div className="relative grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isFlipped || card.isMatched || isChecking}
              className="relative aspect-[3/4] perspective-1000"
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  card.isFlipped || card.isMatched ? "rotate-y-180" : ""
                }`}
              >
                {/* Card Back */}
                <div
                  className={`absolute inset-0 rounded-xl flex items-center justify-center backface-hidden ${
                    card.isMatched
                      ? "bg-primary/20"
                      : "bg-gradient-to-br from-primary/80 to-primary cursor-pointer hover:from-primary hover:to-primary/90 hover:scale-105"
                  } transition-all duration-300 shadow-lg border border-primary/20`}
                >
                  <Heart
                    className={`w-8 h-8 md:w-10 md:h-10 ${
                      card.isMatched ? "text-primary/40" : "text-primary-foreground"
                    }`}
                    fill="currentColor"
                  />
                </div>

                {/* Card Front */}
                <div
                  className={`absolute inset-0 rounded-xl flex items-center justify-center p-2 backface-hidden rotate-y-180 ${
                    card.isMatched
                      ? "bg-gradient-to-br from-accent/40 to-primary/30 border-primary/40"
                      : "bg-card border-primary/30"
                  } border-2 shadow-lg`}
                >
                  <span
                    className={`font-serif text-sm md:text-base text-center leading-tight ${
                      card.isMatched ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {card.content}
                  </span>
                  {card.isMatched && (
                    <Sparkles className="absolute top-2 right-2 w-4 h-4 text-primary animate-pulse" />
                  )}
                </div>
              </div>
            </button>
          ))}

          {/* Celebration sparkles */}
          {showCelebration &&
            sparklePositions.map((pos, i) => (
              <div
                key={i}
                className="absolute pointer-events-none animate-sparkle-float"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            ))}
        </div>

        {/* Game Complete Message */}
        {isGameComplete && (
          <div className="relative mt-8 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
              <span className="font-serif text-xl text-primary">Perfect Match!</span>
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
            </div>
            <p className="text-muted-foreground mb-4">
              Just like us... we are meant to be together forever
            </p>
            <p className="text-sm text-foreground/70 mb-6">
              Completed in {moves} moves
            </p>
            <Button
              onClick={initializeGame}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
          </div>
        )}

        {/* Reset button when game is in progress */}
        {!isGameComplete && moves > 0 && (
          <div className="relative mt-6 text-center">
            <Button
              onClick={initializeGame}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes sparkle-float {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg) translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-sparkle-float {
          animation: sparkle-float 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
