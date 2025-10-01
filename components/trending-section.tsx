"use client"

import { Flame, Play } from "lucide-react"
import Link from "next/link"

const trendingMovies = [
  {
    id: 1,
    title: "Quantum Realm",
    description: "A mind-bending journey through parallel dimensions where reality itself becomes questionable.",
    rating: 9.1,
    views: "2.4M",
    image: "/quantum-physics-sci-fi-movie-scene.jpg",
    videoUrl: "/placeholder-video-quantum-scifi.mp4",
  },
  {
    id: 2,
    title: "Shadow Protocol",
    description: "An elite operative must stop a global conspiracy before time runs out.",
    rating: 8.8,
    views: "1.9M",
    image: "/spy-action-movie-scene.jpg",
    videoUrl: "/placeholder-video-spy-action.mp4",
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    description: "In a dystopian future, one person holds the key to humanity's survival.",
    rating: 8.6,
    views: "1.7M",
    image: "/dystopian-future-movie-scene.jpg",
    videoUrl: "/placeholder-video-dystopian-future.mp4",
  },
]

export function TrendingSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary/20 p-3 rounded-xl">
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Trending Now</h2>
            <p className="text-muted-foreground mt-1">What everyone's watching this week</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingMovies.map((movie, index) => {
            const movieSlug = movie.title.toLowerCase().replace(/\s+/g, "-")
            return (
              <Link key={movie.id} href={`/movie/${movieSlug}`}>
                <div className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>

                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{movie.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="text-primary font-semibold">★</span>
                          <span className="font-medium">{movie.rating}</span>
                        </div>
                        <div className="text-muted-foreground">{movie.views} views</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
