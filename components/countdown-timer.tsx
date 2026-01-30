"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border border-border min-w-[80px] md:min-w-[100px]">
              <span className="text-3xl md:text-5xl font-serif text-primary">--</span>
            </div>
            <span className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border border-border min-w-[80px] md:min-w-[100px] transition-transform hover:scale-105">
            <span className="text-3xl md:text-5xl font-serif text-primary">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
