"use client"

import { MovieCard } from "@/components/movie-card"

const featuredMovies = [
  {
    id: 1,
    title: "Stellar Odyssey",
    genre: "Sci-Fi",
    rating: 8.9,
    year: 2024,
    image: "/futuristic-space-movie-poster.jpg",
    videoUrl: "/placeholder-video-space-adventure.mp4",
  },
  {
    id: 2,
    title: "The Last Guardian",
    genre: "Action",
    rating: 8.5,
    year: 2024,
    image: "/action-hero-movie-poster.jpg",
    videoUrl: "/placeholder-video-action-thriller.mp4",
  },
  {
    id: 3,
    title: "Midnight in Paris",
    genre: "Romance",
    rating: 8.2,
    year: 2024,
    image: "/romantic-paris-movie-poster.jpg",
    videoUrl: "/placeholder-video-romantic-drama.mp4",
  },
  {
    id: 4,
    title: "Dark Waters",
    genre: "Thriller",
    rating: 8.7,
    year: 2024,
    image: "/dark-thriller-movie-poster.jpg",
    videoUrl: "/placeholder-video-thriller.mp4",
  },
  {
    id: 5,
    title: "The Comedy Club",
    genre: "Comedy",
    rating: 7.9,
    year: 2024,
    image: "/comedy-movie-poster-bright-colors.jpg",
    videoUrl: "/placeholder-video-comedy.mp4",
  },
  {
    id: 6,
    title: "Ancient Legends",
    genre: "Fantasy",
    rating: 8.4,
    year: 2024,
    image: "/fantasy-epic-movie-poster.jpg",
    videoUrl: "/placeholder-video-fantasy-epic.mp4",
  },
  {
    id: 7,
    title: "Neon Nights",
    genre: "Action",
    rating: 8.1,
    year: 2024,
    image: "/neon-action-movie-poster.jpg",
    videoUrl: "/placeholder-video-action-thriller.mp4",
  },
  {
    id: 8,
    title: "Love in Tokyo",
    genre: "Romance",
    rating: 7.8,
    year: 2024,
    image: "/tokyo-romance-movie-poster.jpg",
    videoUrl: "/placeholder-video-romantic-drama.mp4",
  },
  {
    id: 9,
    title: "Laugh Out Loud",
    genre: "Comedy",
    rating: 8.0,
    year: 2024,
    image: "/comedy-standup-movie-poster.jpg",
    videoUrl: "/placeholder-video-comedy.mp4",
  },
  {
    id: 10,
    title: "The Haunting",
    genre: "Horror",
    rating: 8.3,
    year: 2024,
    image: "/horror-haunted-house-poster.jpg",
    videoUrl: "/placeholder-video-horror.mp4",
  },
  {
    id: 11,
    title: "Broken Dreams",
    genre: "Drama",
    rating: 8.6,
    year: 2024,
    image: "/drama-emotional-movie-poster.jpg",
    videoUrl: "/placeholder-video-drama.mp4",
  },
  {
    id: 12,
    title: "Space Warriors",
    genre: "Sci-Fi",
    rating: 8.4,
    year: 2024,
    image: "/scifi-space-battle-poster.jpg",
    videoUrl: "/placeholder-video-space-adventure.mp4",
  },
]

export function FeaturedMovies() {
  return (
    <section id="featured-movies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Featured Movies</h2>
            <p className="text-muted-foreground text-lg">Handpicked selections just for you</p>
          </div>
          <button className="hidden md:block text-primary hover:underline font-medium">View All →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  )
}
