"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import { PhotoGallery } from "@/components/photo-gallery"
import { LoveQuiz } from "@/components/love-quiz"
import { RingBoxIntro } from "@/components/ring-box-intro"

export default function AnniversaryPage() {
  const [showIntro, setShowIntro] = useState(true)
  
  // February 13th, 2026 - next occurrence
  const anniversaryDate = new Date("2026-02-13T00:00:00")

  return (
    <>
      {showIntro && <RingBoxIntro onComplete={() => setShowIntro(false)} />}
      
      <main
        className={`min-h-screen bg-background transition-opacity duration-1000 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Decorative Hearts Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-primary/10">
            <Heart className="w-24 h-24" fill="currentColor" />
          </div>
          <div className="absolute top-40 right-20 text-primary/5">
            <Heart className="w-32 h-32" fill="currentColor" />
          </div>
          <div className="absolute bottom-40 left-1/4 text-accent/10">
            <Heart className="w-16 h-16" fill="currentColor" />
          </div>
          <div className="absolute top-1/3 right-10 text-primary/5">
            <Heart className="w-20 h-20" fill="currentColor" />
          </div>
          <div className="absolute bottom-20 right-1/3 text-accent/5">
            <Heart className="w-28 h-28" fill="currentColor" />
          </div>
        </div>

        {/* Header Section */}
        <header className="relative py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary/30" />
              <Sparkles className="w-6 h-6 text-primary" />
              <div className="h-px w-12 bg-primary/30" />
            </div>

            {/* Event Name */}
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Celebrating
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-4 text-balance">
              5 Years of Love
            </h1>

            {/* Couple Names */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl md:text-4xl font-serif text-primary">Dhruvi</span>
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" fill="currentColor" />
              <span className="text-2xl md:text-4xl font-serif text-primary">Niral</span>
            </div>

            {/* Romantic Message */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic font-serif">
              {'"Five years ago, fate brought two hearts together, and in that magical moment, our forever began. Every heartbeat since has been a love letter written just for you."'}
            </p>

            {/* Date Badge - Highlighted */}
            <div className="mt-10 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative bg-primary px-10 py-5 rounded-2xl shadow-xl border-2 border-primary/30">
                  <div className="flex items-center justify-center gap-3">
                    <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/80">Save the Date</p>
                      <p className="text-2xl md:text-3xl font-serif text-primary-foreground font-bold">13th February</p>
                    </div>
                    <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Countdown Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
              Every Second Brings Us Closer
            </h2>
            <p className="text-muted-foreground mb-10">Counting down the moments until we celebrate our beautiful journey</p>
            <CountdownTimer targetDate={anniversaryDate} />
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary/30" />
                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                <div className="h-px w-8 bg-primary/30" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                Moments Frozen in Time
              </h2>
              <p className="text-muted-foreground">
                Each photograph holds a piece of our heart, a chapter of our love story
              </p>
            </div>
            <PhotoGallery />
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary/30" />
                <Sparkles className="w-5 h-5 text-primary" />
                <div className="h-px w-8 bg-primary/30" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                How Well Do Our Hearts Know Each Other?
              </h2>
              <p className="text-muted-foreground">
                A romantic journey through our feelings and the love we share
              </p>
            </div>
            <div className="bg-card rounded-3xl p-6 md:p-10 shadow-lg border border-border">
              <LoveQuiz />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 bg-foreground text-card">
          <div className="max-w-4xl mx-auto text-center">
            {/* Om Symbol */}
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-primary">&#x0950;</span>
            </div>
            <div className="flex justify-center mb-6">
              <Heart className="w-10 h-10 text-primary animate-pulse" fill="currentColor" />
            </div>
            <p className="text-xl md:text-2xl font-serif mb-2 text-primary/90 italic">
              &ldquo;Janam Janam Ka Saath&rdquo;
            </p>
            <p className="text-2xl md:text-3xl font-serif mb-4 text-balance">
              {'"From five beautiful years... to seven sacred vows around the holy fire"'}
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-xl mx-auto leading-relaxed">
              Today we celebrate 1,825 days of loving you. Soon, we will take our Saat Phere 
              around the Agni, and with each sacred step, I will promise you my love for 
              this life and the next seven lifetimes. You are my Ardhangini &mdash; the other 
              half of my soul. Until we are bound by the sacred thread of marriage, 
              and for all eternity after &mdash; Tum Meri Ho, Hamesha Ke Liye.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="text-xl font-serif text-primary">Dhruvi</span>
              <span className="text-2xl text-primary">&</span>
              <span className="text-xl font-serif text-primary">Niral</span>
            </div>
            <p className="mt-4 text-base opacity-70 italic font-serif">
              &ldquo;Saat Janmon Ka Rishta&rdquo;
            </p>
            <p className="mt-6 text-sm opacity-60">
              Made with love and devotion for our sacred journey together
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(7)].map((_, i) => (
                <Heart key={i} className="w-4 h-4 text-primary" fill="currentColor" />
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
