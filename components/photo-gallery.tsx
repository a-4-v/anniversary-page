"use client"

import { useState } from "react"
import { Heart, X } from "lucide-react"

const photos = [
  {
    id: 1,
    caption: "Our First Adventure",
    placeholder: "First memory together",
  },
  {
    id: 2,
    caption: "Sunset Smiles",
    placeholder: "A beautiful sunset moment",
  },
  {
    id: 3,
    caption: "Celebrating Love",
    placeholder: "Special celebration",
  },
  {
    id: 4,
    caption: "Adventures Together",
    placeholder: "Our adventures",
  },
  {
    id: 5,
    caption: "Forever & Always",
    placeholder: "Our promise",
  },
  {
    id: 6,
    caption: "Making Memories",
    placeholder: "Creating memories",
  },
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            onClick={() => setSelectedPhoto(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
              <div className="text-center p-4">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2 opacity-50" />
                <p className="text-sm text-foreground/60 font-serif italic">{photo.placeholder}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-card text-sm font-medium">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-card hover:text-primary transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-3xl w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
            <div className="text-center p-8">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl text-foreground font-serif italic">
                {photos[selectedPhoto].placeholder}
              </p>
              <p className="text-lg text-foreground/80 mt-2">{photos[selectedPhoto].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
