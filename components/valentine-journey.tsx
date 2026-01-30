"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"

const journeySteps = [
  {
    id: "rose",
    title: "Rose Day",
    icon: "rose",
    message: "A rose for the most beautiful person in my life",
    instruction: "Tap the rose to continue",
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
    instruction: "Tap the chocolate to continue",
  },
  {
    id: "teddy",
    title: "Teddy Day",
    icon: "teddy",
    message: "Someone to remind you of me when I am not around",
    instruction: "Tap the teddy to continue",
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

// Elegant SVG Icons
function RoseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none">
      {/* Long elegant stem */}
      <path 
        d="M60 75 Q58 95 60 115 Q62 125 60 135" 
        stroke="url(#stemGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none"
      />
      {/* Thorns */}
      <path d="M58 90 L52 87 L56 92" fill="#2D5A27" />
      <path d="M62 105 L68 102 L64 107" fill="#2D5A27" />
      {/* Leaves */}
      <path 
        d="M60 95 Q45 88 35 92 Q42 98 60 95" 
        fill="url(#leafGradient)" 
      />
      <path d="M60 95 Q48 93 40 95" stroke="#1B4D1B" strokeWidth="0.5" fill="none" />
      <path 
        d="M60 110 Q75 103 85 107 Q78 113 60 110" 
        fill="url(#leafGradient)" 
      />
      <path d="M60 110 Q72 108 80 110" stroke="#1B4D1B" strokeWidth="0.5" fill="none" />
      
      {/* Rose bloom - outer petals */}
      <ellipse cx="60" cy="50" rx="22" ry="28" fill="url(#roseGradient1)" transform="rotate(-20 60 50)" opacity="0.9" />
      <ellipse cx="60" cy="50" rx="22" ry="28" fill="url(#roseGradient2)" transform="rotate(20 60 50)" opacity="0.9" />
      <ellipse cx="60" cy="48" rx="18" ry="24" fill="url(#roseGradient1)" transform="rotate(-45 60 48)" opacity="0.95" />
      <ellipse cx="60" cy="48" rx="18" ry="24" fill="url(#roseGradient2)" transform="rotate(45 60 48)" opacity="0.95" />
      {/* Middle petals */}
      <ellipse cx="60" cy="45" rx="14" ry="18" fill="url(#roseGradient3)" transform="rotate(-10 60 45)" />
      <ellipse cx="60" cy="45" rx="14" ry="18" fill="url(#roseGradient3)" transform="rotate(10 60 45)" />
      <ellipse cx="60" cy="42" rx="10" ry="14" fill="url(#roseGradient4)" transform="rotate(-30 60 42)" />
      <ellipse cx="60" cy="42" rx="10" ry="14" fill="url(#roseGradient4)" transform="rotate(30 60 42)" />
      {/* Center spiral */}
      <ellipse cx="60" cy="40" rx="6" ry="8" fill="#9B1B30" />
      <ellipse cx="60" cy="38" rx="3" ry="4" fill="#7B0D1E" />
      
      {/* Dew drops */}
      <ellipse cx="45" cy="55" rx="2" ry="2.5" fill="url(#dewDrop)" opacity="0.8" />
      <ellipse cx="72" cy="48" rx="1.5" ry="2" fill="url(#dewDrop)" opacity="0.7" />
      
      <defs>
        <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D7A37" />
          <stop offset="100%" stopColor="#1B4D1B" />
        </linearGradient>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A9F42" />
          <stop offset="100%" stopColor="#2D5A27" />
        </linearGradient>
        <linearGradient id="roseGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        <linearGradient id="roseGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8365D" />
          <stop offset="100%" stopColor="#9B1B30" />
        </linearGradient>
        <linearGradient id="roseGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF2D55" />
          <stop offset="100%" stopColor="#C41E3A" />
        </linearGradient>
        <linearGradient id="roseGradient4" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E8365D" />
          <stop offset="100%" stopColor="#A31545" />
        </linearGradient>
        <radialGradient id="dewDrop">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#B0E0E6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.3" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function RingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      {/* Velvet cushion base */}
      <ellipse cx="60" cy="90" rx="45" ry="15" fill="url(#cushionGradient)" />
      <ellipse cx="60" cy="88" rx="40" ry="12" fill="url(#cushionTop)" />
      
      {/* Ring band with 3D effect */}
      <ellipse cx="60" cy="65" rx="22" ry="10" stroke="url(#goldGradient)" strokeWidth="8" fill="none" />
      <ellipse cx="60" cy="65" rx="22" ry="10" stroke="url(#goldHighlight)" strokeWidth="2" fill="none" />
      <ellipse cx="60" cy="63" rx="20" ry="8" stroke="url(#goldInner)" strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Diamond setting */}
      <ellipse cx="60" cy="55" rx="8" ry="3" fill="url(#goldGradient)" />
      
      {/* Diamond */}
      <polygon points="60,25 48,42 60,55 72,42" fill="url(#diamondGradient)" />
      <polygon points="60,25 72,42 60,55" fill="url(#diamondSide)" />
      <polygon points="54,35 60,25 66,35 60,42" fill="#FFFFFF" opacity="0.6" />
      
      {/* Diamond facets */}
      <line x1="60" y1="25" x2="60" y2="42" stroke="#E0FFFF" strokeWidth="0.5" opacity="0.5" />
      <line x1="48" y1="42" x2="60" y2="42" stroke="#B0E0E6" strokeWidth="0.5" opacity="0.5" />
      <line x1="72" y1="42" x2="60" y2="42" stroke="#B0E0E6" strokeWidth="0.5" opacity="0.5" />
      
      {/* Sparkles */}
      <g className="animate-pulse">
        <circle cx="50" cy="22" r="2" fill="#FFD700" />
        <circle cx="75" cy="30" r="1.5" fill="#FFD700" />
        <circle cx="42" cy="38" r="1" fill="#FFFFFF" />
        <circle cx="78" cy="45" r="1.5" fill="#FFFFFF" />
        <circle cx="60" cy="18" r="2" fill="#FFFFFF" />
      </g>
      
      {/* Light rays */}
      <line x1="60" y1="15" x2="60" y2="10" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="20" x2="40" y2="15" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
      <line x1="75" y1="20" x2="80" y2="15" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
      
      <defs>
        <linearGradient id="cushionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#722F37" />
          <stop offset="100%" stopColor="#4A1C23" />
        </linearGradient>
        <linearGradient id="cushionTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B3A42" />
          <stop offset="100%" stopColor="#722F37" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="goldInner" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="50%" stopColor="#AFEEEE" />
          <stop offset="100%" stopColor="#E0FFFF" />
        </linearGradient>
        <linearGradient id="diamondSide" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0E6" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ChocolateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none">
      {/* Heart-shaped chocolate box */}
      <path 
        d="M60 85 C30 85 10 65 10 45 C10 25 30 15 45 15 C52 15 58 20 60 28 C62 20 68 15 75 15 C90 15 110 25 110 45 C110 65 90 85 60 85"
        fill="url(#boxGradient)"
        stroke="#3D1F0D"
        strokeWidth="2"
      />
      {/* Box lid line */}
      <path 
        d="M60 30 C45 30 25 35 15 50"
        stroke="#5D3A1A"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path 
        d="M60 30 C75 30 95 35 105 50"
        stroke="#5D3A1A"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      
      {/* Chocolates inside */}
      <circle cx="40" cy="55" r="8" fill="url(#choco1)" />
      <circle cx="60" cy="50" r="9" fill="url(#choco2)" />
      <circle cx="80" cy="55" r="8" fill="url(#choco1)" />
      <circle cx="50" cy="68" r="7" fill="url(#choco3)" />
      <circle cx="70" cy="68" r="7" fill="url(#choco3)" />
      
      {/* Chocolate shine */}
      <ellipse cx="38" cy="52" rx="2" ry="1.5" fill="#8B6914" opacity="0.4" />
      <ellipse cx="58" cy="47" rx="2.5" ry="2" fill="#8B6914" opacity="0.4" />
      <ellipse cx="78" cy="52" rx="2" ry="1.5" fill="#8B6914" opacity="0.4" />
      
      {/* Ribbon */}
      <path d="M55 20 Q60 10 65 20" fill="#DC143C" />
      <ellipse cx="52" cy="22" rx="6" ry="4" fill="#DC143C" transform="rotate(-20 52 22)" />
      <ellipse cx="68" cy="22" rx="6" ry="4" fill="#DC143C" transform="rotate(20 68 22)" />
      <circle cx="60" cy="23" r="4" fill="#B22222" />
      
      <defs>
        <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#654321" />
          <stop offset="100%" stopColor="#4A2C0A" />
        </linearGradient>
        <radialGradient id="choco1">
          <stop offset="0%" stopColor="#5D3A1A" />
          <stop offset="100%" stopColor="#3D1F0D" />
        </radialGradient>
        <radialGradient id="choco2">
          <stop offset="0%" stopColor="#D2691E" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        <radialGradient id="choco3">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function TeddyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none">
      {/* Ears */}
      <circle cx="35" cy="28" r="15" fill="url(#furGradient)" />
      <circle cx="35" cy="28" r="9" fill="url(#innerEar)" />
      <circle cx="85" cy="28" r="15" fill="url(#furGradient)" />
      <circle cx="85" cy="28" r="9" fill="url(#innerEar)" />
      
      {/* Head */}
      <ellipse cx="60" cy="48" rx="30" ry="28" fill="url(#furGradient)" />
      
      {/* Muzzle */}
      <ellipse cx="60" cy="58" rx="14" ry="10" fill="url(#muzzleGradient)" />
      
      {/* Nose */}
      <ellipse cx="60" cy="54" rx="5" ry="4" fill="#2D1B0E" />
      <ellipse cx="59" cy="53" rx="1.5" ry="1" fill="#5D4037" opacity="0.5" />
      
      {/* Eyes */}
      <ellipse cx="48" cy="42" rx="5" ry="6" fill="#2D1B0E" />
      <ellipse cx="72" cy="42" rx="5" ry="6" fill="#2D1B0E" />
      <circle cx="49" cy="40" r="2" fill="#FFFFFF" />
      <circle cx="73" cy="40" r="2" fill="#FFFFFF" />
      
      {/* Mouth */}
      <path d="M55 62 Q60 66 65 62" stroke="#2D1B0E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      {/* Body */}
      <ellipse cx="60" cy="98" rx="28" ry="25" fill="url(#furGradient)" />
      
      {/* Belly patch */}
      <ellipse cx="60" cy="95" rx="18" ry="16" fill="url(#muzzleGradient)" />
      
      {/* Arms */}
      <ellipse cx="30" cy="90" rx="12" ry="18" fill="url(#furGradient)" transform="rotate(-20 30 90)" />
      <ellipse cx="90" cy="90" rx="12" ry="18" fill="url(#furGradient)" transform="rotate(20 90 90)" />
      
      {/* Paw pads */}
      <ellipse cx="28" cy="100" rx="6" ry="5" fill="url(#innerEar)" />
      <ellipse cx="92" cy="100" rx="6" ry="5" fill="url(#innerEar)" />
      
      {/* Heart the teddy is holding */}
      <path 
        d="M52 88 C52 82 60 82 60 88 C60 82 68 82 68 88 C68 98 60 105 60 105 C60 105 52 98 52 88"
        fill="url(#heartGradient)"
        stroke="#8B0000"
        strokeWidth="1"
      />
      
      {/* Bow tie */}
      <ellipse cx="50" cy="75" rx="8" ry="5" fill="#DC143C" />
      <ellipse cx="70" cy="75" rx="8" ry="5" fill="#DC143C" />
      <circle cx="60" cy="75" r="4" fill="#B22222" />
      
      <defs>
        <linearGradient id="furGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4A77D" />
          <stop offset="50%" stopColor="#A67B5B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="innerEar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C39E" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        <linearGradient id="muzzleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B8A" />
          <stop offset="100%" stopColor="#DC143C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function PromiseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none">
      {/* Interlinked hands - pinky promise */}
      {/* Left hand */}
      <path 
        d="M15 55 Q10 45 20 40 L35 42 Q40 44 42 48 L44 55"
        fill="url(#skinGradient)"
        stroke="#E8B89D"
        strokeWidth="1"
      />
      {/* Left fingers */}
      <path d="M20 40 Q18 32 22 28 Q26 32 24 40" fill="url(#skinGradient)" stroke="#E8B89D" strokeWidth="0.5" />
      <path d="M26 39 Q25 30 29 26 Q33 30 31 39" fill="url(#skinGradient)" stroke="#E8B89D" strokeWidth="0.5" />
      <path d="M32 40 Q32 32 36 30 Q40 34 38 42" fill="url(#skinGradient)" stroke="#E8B89D" strokeWidth="0.5" />
      
      {/* Right hand */}
      <path 
        d="M105 55 Q110 45 100 40 L85 42 Q80 44 78 48 L76 55"
        fill="url(#skinGradient)"
        stroke="#E8B89D"
        strokeWidth="1"
      />
      {/* Right fingers */}
      <path d="M100 40 Q102 32 98 28 Q94 32 96 40" fill="url(#skinGradient)" stroke="#E8B89D" strokeWidth="0.5" />
      <path d="M94 39 Q95 30 91 26 Q87 30 89 39" fill="url(#skinGradient)" stroke="#E8B89D" strokeWidth="0.5" />
      <path d="M88 40 Q88 32 84 30 Q80 34 82 42" fill="url(#skinGradient)" stroke="#E8B89D" strokeWidth="0.5" />
      
      {/* Interlinked pinkies */}
      <path 
        d="M44 55 Q50 48 60 50 Q70 48 76 55"
        stroke="url(#skinGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M44 55 Q50 48 60 50 Q70 48 76 55"
        stroke="#E8B89D"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Decorative hearts */}
      <path d="M25 70 C25 65 32 65 32 70 C32 65 39 65 39 70 C39 78 32 84 32 84 C32 84 25 78 25 70" fill="url(#heartGradient2)" opacity="0.8" />
      <path d="M81 70 C81 65 88 65 88 70 C88 65 95 65 95 70 C95 78 88 84 88 84 C88 84 81 78 81 70" fill="url(#heartGradient2)" opacity="0.8" />
      <path d="M55 15 C55 10 62 10 62 15 C62 10 69 10 69 15 C69 23 62 29 62 29 C62 29 55 23 55 15" fill="url(#heartGradient2)" />
      
      {/* Sparkles */}
      <g className="animate-pulse">
        <circle cx="50" cy="25" r="2" fill="#FFD700" />
        <circle cx="75" cy="20" r="1.5" fill="#FFD700" />
        <circle cx="45" cy="35" r="1" fill="#FFFFFF" />
        <circle cx="78" cy="32" r="1.5" fill="#FFFFFF" />
      </g>
      
      <defs>
        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDBAC" />
          <stop offset="100%" stopColor="#E8B89D" />
        </linearGradient>
        <linearGradient id="heartGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B8A" />
          <stop offset="100%" stopColor="#DC143C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function HugIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      {/* Background glow */}
      <circle cx="60" cy="60" r="50" fill="url(#glowGradient)" opacity="0.3" />
      
      {/* Person 1 - Female silhouette */}
      <ellipse cx="48" cy="40" rx="12" ry="14" fill="url(#person1Gradient)" />
      {/* Hair */}
      <path d="M36 35 Q38 20 48 18 Q58 20 60 35 Q58 30 48 32 Q38 30 36 35" fill="#4A3728" />
      <path d="M36 38 Q34 50 38 55" stroke="#4A3728" strokeWidth="3" fill="none" />
      {/* Body */}
      <ellipse cx="48" cy="75" rx="18" ry="22" fill="url(#dress1Gradient)" />
      
      {/* Person 2 - Male silhouette */}
      <ellipse cx="72" cy="38" rx="12" ry="14" fill="url(#person2Gradient)" />
      {/* Hair */}
      <path d="M60 32 Q65 22 72 20 Q80 22 84 32 Q80 28 72 28 Q64 28 60 32" fill="#2D1B0E" />
      {/* Body */}
      <ellipse cx="72" cy="73" rx="18" ry="22" fill="url(#shirt1Gradient)" />
      
      {/* Embracing arms */}
      <path 
        d="M30 65 Q35 80 55 75"
        stroke="url(#person1Gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M90 60 Q85 75 65 72"
        stroke="url(#person2Gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Hearts around */}
      <path d="M55 15 C55 11 60 11 60 15 C60 11 65 11 65 15 C65 21 60 25 60 25 C60 25 55 21 55 15" fill="#DC143C" className="animate-pulse" />
      <path d="M20 50 C20 47 24 47 24 50 C24 47 28 47 28 50 C28 55 24 58 24 58 C24 58 20 55 20 50" fill="#FF6B8A" opacity="0.7" />
      <path d="M95 45 C95 42 99 42 99 45 C99 42 103 42 103 45 C103 50 99 53 99 53 C99 53 95 50 95 45" fill="#FF6B8A" opacity="0.7" />
      
      <defs>
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="person1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDBAC" />
          <stop offset="100%" stopColor="#E8B89D" />
        </linearGradient>
        <linearGradient id="person2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D0C5" />
          <stop offset="100%" stopColor="#D4A590" />
        </linearGradient>
        <linearGradient id="dress1Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B8A" />
          <stop offset="100%" stopColor="#DC143C" />
        </linearGradient>
        <linearGradient id="shirt1Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#2E5B8A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function KissIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none">
      {/* Lips - elegant design */}
      <path 
        d="M25 50 Q40 30 60 50 Q80 30 95 50 Q80 75 60 68 Q40 75 25 50"
        fill="url(#lipsGradient)"
        stroke="#8B0000"
        strokeWidth="1"
      />
      {/* Upper lip detail */}
      <path 
        d="M30 48 Q45 38 60 50 Q75 38 90 48"
        stroke="#A52A2A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Lip shine */}
      <ellipse cx="45" cy="45" rx="8" ry="4" fill="#FF6B8A" opacity="0.4" />
      <ellipse cx="75" cy="45" rx="8" ry="4" fill="#FF6B8A" opacity="0.4" />
      
      {/* Cupid's bow highlight */}
      <path d="M55 48 Q60 44 65 48" stroke="#FFB6C1" strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* Floating hearts */}
      <g>
        <path d="M15 25 C15 20 22 20 22 25 C22 20 29 20 29 25 C29 33 22 38 22 38 C22 38 15 33 15 25" fill="#FF6B8A" className="animate-bounce" />
        <path d="M85 20 C85 15 92 15 92 20 C92 15 99 15 99 20 C99 28 92 33 92 33 C92 33 85 28 85 20" fill="#DC143C" className="animate-bounce" style={{ animationDelay: "0.2s" }} />
        <path d="M95 60 C95 56 100 56 100 60 C100 56 105 56 105 60 C105 66 100 70 100 70 C100 70 95 66 95 60" fill="#FF6B8A" className="animate-bounce" style={{ animationDelay: "0.4s" }} />
        <path d="M10 65 C10 61 15 61 15 65 C15 61 20 61 20 65 C20 71 15 75 15 75 C15 75 10 71 10 65" fill="#FFB6C1" className="animate-bounce" style={{ animationDelay: "0.3s" }} />
      </g>
      
      {/* Sparkles */}
      <g className="animate-pulse">
        <circle cx="40" cy="15" r="2" fill="#FFD700" />
        <circle cx="80" cy="12" r="1.5" fill="#FFD700" />
        <circle cx="105" cy="40" r="2" fill="#FFFFFF" />
        <circle cx="12" cy="45" r="1.5" fill="#FFFFFF" />
      </g>
      
      <defs>
        <linearGradient id="lipsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DC143C" />
          <stop offset="50%" stopColor="#B22222" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function LetterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none">
      {/* Envelope shadow */}
      <rect x="18" y="33" width="84" height="55" rx="4" fill="#00000020" />
      
      {/* Envelope body */}
      <rect x="15" y="30" width="90" height="55" rx="4" fill="url(#envelopeGradient)" stroke="#DC143C" strokeWidth="2" />
      
      {/* Envelope flap */}
      <path d="M15 30 L60 58 L105 30" fill="url(#flapGradient)" stroke="#DC143C" strokeWidth="2" />
      
      {/* Inner envelope detail */}
      <path d="M20 35 L60 55 L100 35" stroke="#FFB6C1" strokeWidth="1" fill="none" opacity="0.5" />
      
      {/* Heart wax seal */}
      <circle cx="60" cy="52" r="12" fill="url(#sealGradient)" stroke="#8B0000" strokeWidth="1" />
      <path d="M55 50 C55 46 60 46 60 50 C60 46 65 46 65 50 C65 56 60 60 60 60 C60 60 55 56 55 50" fill="#FFF5F5" />
      
      {/* Decorative elements */}
      <path d="M25 75 C25 72 29 72 29 75 C29 72 33 72 33 75 C33 79 29 82 29 82 C29 82 25 79 25 75" fill="#FFB6C1" opacity="0.6" />
      <path d="M87 75 C87 72 91 72 91 75 C91 72 95 72 95 75 C95 79 91 82 91 82 C91 82 87 79 87 75" fill="#FFB6C1" opacity="0.6" />
      
      {/* Sparkles */}
      <g className="animate-pulse">
        <circle cx="30" cy="25" r="2" fill="#FFD700" />
        <circle cx="90" cy="22" r="1.5" fill="#FFD700" />
        <circle cx="60" cy="18" r="2" fill="#FFD700" />
      </g>
      
      <defs>
        <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF5F5" />
          <stop offset="100%" stopColor="#FFE4E6" />
        </linearGradient>
        <linearGradient id="flapGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFE4E6" />
          <stop offset="100%" stopColor="#FECDD3" />
        </linearGradient>
        <radialGradient id="sealGradient">
          <stop offset="0%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
      </defs>
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)

  const handleTap = () => {
    if (isAnimating || currentStep >= journeySteps.length - 1) return
    
    setIsAnimating(true)
    setShowSparkles(true)
    
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
      setIsAnimating(false)
    }, 500)
    
    setTimeout(() => {
      setShowSparkles(false)
    }, 800)
  }

  const currentStepData = journeySteps[currentStep]
  const isLastStep = currentStep === journeySteps.length - 1

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        {journeySteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= currentStep ? "bg-primary scale-110" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Main card */}
      <div
        onClick={!isLastStep ? handleTap : undefined}
        className={`relative bg-card rounded-3xl p-6 shadow-xl border-2 border-primary/20 overflow-hidden transition-all duration-500 ${
          !isLastStep ? "cursor-pointer active:scale-95" : ""
        } ${isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary"
              style={{
                width: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Sparkles effect */}
        {showSparkles && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute text-primary animate-ping"
                style={{
                  width: "16px",
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              {currentStepData.title}
            </span>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-36 h-36 flex items-center justify-center transition-transform duration-500 ${
                isAnimating ? "rotate-6 scale-110" : "hover:scale-105"
              }`}
            >
              {getIcon(currentStepData.icon, "w-full h-full drop-shadow-lg")}
            </div>
          </div>

          {/* Message */}
          {isLastStep ? (
            <div className="bg-gradient-to-b from-secondary/50 to-secondary/30 rounded-2xl p-5 border border-primary/10">
              <div className="text-center mb-4">
                <Heart className="w-6 h-6 text-primary mx-auto mb-2" fill="currentColor" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">My Love Letter To You</p>
              </div>
              <p className="text-foreground leading-relaxed text-center font-serif italic text-sm">
                {finalLetter}
              </p>
              <div className="flex justify-center mt-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              <p className="text-foreground text-center text-lg font-serif italic leading-relaxed mb-6">
                &ldquo;{currentStepData.message}&rdquo;
              </p>

              {/* Tap instruction */}
              <div className="text-center">
                <p className="text-muted-foreground text-sm animate-pulse">
                  {currentStepData.instruction}
                </p>
                <div className="mt-2 flex justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center animate-bounce">
                    <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Reset button for last step */}
      {isLastStep && (
        <button
          onClick={() => setCurrentStep(0)}
          className="mt-6 w-full py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
        >
          Start Journey Again
        </button>
      )}
    </div>
  )
}
