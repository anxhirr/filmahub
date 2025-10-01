import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedMovies } from "@/components/featured-movies"
import { TrendingSection } from "@/components/trending-section"
import { GenreSection } from "@/components/genre-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedMovies />
      <TrendingSection />
      <GenreSection />
      <Footer />
    </main>
  )
}
