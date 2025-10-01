import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Star } from "lucide-react"
import Link from "next/link"

// Mock movies data
const allMovies = [
  {
    id: "inception",
    title: "Inception",
    year: "2010",
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    image: "/inception-movie-poster.png",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: "2014",
    rating: 8.7,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    image: "/interstellar-movie-poster.jpg",
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    year: "2008",
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    image: "/dark-knight-poster.png",
  },
  {
    id: "dune",
    title: "Dune",
    year: "2021",
    rating: 8.0,
    genre: ["Action", "Adventure", "Drama"],
    image: "/dune-inspired-poster.png",
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: "2017",
    rating: 8.0,
    genre: ["Drama", "Sci-Fi", "Thriller"],
    image: "/blade-runner-2049-poster.jpg",
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    year: "1999",
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    image: "/matrix-movie-poster.png",
  },
  {
    id: "parasite",
    title: "Parasite",
    year: "2019",
    rating: 8.5,
    genre: ["Drama", "Thriller"],
    image: "/parasite-movie-poster.png",
  },
  {
    id: "joker",
    title: "Joker",
    year: "2019",
    rating: 8.4,
    genre: ["Crime", "Drama", "Thriller"],
    image: "/generic-clown-poster.png",
  },
]

const genreInfo: Record<string, { title: string; description: string }> = {
  action: {
    title: "Action Movies",
    description: "High-octane thrills, explosive sequences, and adrenaline-pumping adventures",
  },
  "sci-fi": {
    title: "Science Fiction",
    description: "Explore the future, space, and the boundaries of human imagination",
  },
  drama: {
    title: "Drama",
    description: "Compelling stories that explore the depths of human emotion and experience",
  },
  thriller: {
    title: "Thriller",
    description: "Edge-of-your-seat suspense and psychological tension",
  },
  adventure: {
    title: "Adventure",
    description: "Epic journeys and daring quests across fantastical worlds",
  },
  crime: {
    title: "Crime",
    description: "Gritty tales of criminals, detectives, and the underworld",
  },
}

export default function GenrePage({ params }: { params: { genre: string } }) {
  const { genre } = params
  const genreKey = genre.toLowerCase()
  const info = genreInfo[genreKey] || { title: genre, description: `Discover the best ${genre} movies` }

  // Filter movies by genre
  const filteredMovies = allMovies.filter((movie) => movie.genre.some((g) => g.toLowerCase() === genreKey))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-accent/50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Genre Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">{info.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{info.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{filteredMovies.length} movies</span>
          </div>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-accent/50 mb-3">
                    <img
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                        <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs font-semibold">{movie.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {movie.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{movie.year}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No movies found in this genre</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
