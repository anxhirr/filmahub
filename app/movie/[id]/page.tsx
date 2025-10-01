import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock movie data - in a real app, this would come from an API
const moviesData: Record<string, any> = {
  inception: {
    title: "Inception",
    year: "2010",
    rating: 8.8,
    duration: "148 min",
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    backdrop: "/inception-movie-scene.png",
    poster: "/inception-movie-poster.png",
  },
  interstellar: {
    title: "Interstellar",
    year: "2014",
    rating: 8.7,
    duration: "169 min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    backdrop: "/interstellar-space.png",
    poster: "/interstellar-movie-poster.jpg",
  },
  "the-dark-knight": {
    title: "The Dark Knight",
    year: "2008",
    rating: 9.0,
    duration: "152 min",
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    backdrop: "/dark-knight-batman-scene.jpg",
    poster: "/dark-knight-poster.png",
  },
  dune: {
    title: "Dune",
    year: "2021",
    rating: 8.0,
    duration: "155 min",
    genre: ["Action", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya", "Oscar Isaac"],
    description:
      "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    videoUrl: "https://www.youtube.com/embed/8g18jFHCLXk",
    backdrop: "/dune-desert-scene.jpg",
    poster: "/dune-inspired-poster.png",
  },
}

export default function MoviePage({ params }: { params: { id: string } }) {
  const { id } = params
  const movie = moviesData[id] || moviesData["inception"]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Video */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-accent/50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Video Player - Full Width Hero */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div
            className="relative rounded-xl overflow-hidden bg-black shadow-2xl border border-border/50"
            style={{ position: "relative", paddingTop: "56.25%" }}
          >
            <iframe
              src={movie.videoUrl}
              loading="lazy"
              style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
              allowFullScreen={true}
            />
          </div>

          {/* Movie Title and Metadata */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">{movie.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5 bg-accent/50 px-3 py-1.5 rounded-full">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold">{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {movie.genre.map((g: string) => (
                  <Link key={g} href={`/genre/${g.toLowerCase()}`}>
                    <Button variant="outline" size="sm" className="rounded-full h-8 bg-transparent">
                      {g}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{movie.description}</p>
          </div>

          {/* Director and Cast */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Director</h3>
              <p className="text-lg text-muted-foreground">{movie.director}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor: string) => (
                  <span key={actor} className="px-4 py-2 bg-accent/50 rounded-full text-sm border border-border/50">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
