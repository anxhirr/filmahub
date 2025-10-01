"use client"

import { Star, Play } from "lucide-react"
import Link from "next/link"

interface Movie {
  id: number
  title: string
  genre: string
  rating: number
  year: number
  image: string
  videoUrl?: string
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  // Convert movie title to URL-friendly slug
  const movieSlug = movie.title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/movie/${movieSlug}`}>
      <div className="group relative cursor-pointer">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary">
          <img
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300 hover:scale-110">
                <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
              </div>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs font-semibold">{movie.rating}</span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3 space-y-1">
          <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-primary transition-colors">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.genre}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
