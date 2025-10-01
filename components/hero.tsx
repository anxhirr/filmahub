"use client"

import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cinematic-movie-theater-with-dramatic-lighting.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary mb-4">
            Featured This Week
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Discover Your Next
            <span className="block text-primary">Favorite Movie</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Explore thousands of movies, from timeless classics to the latest blockbusters. Your cinematic journey
            starts here.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/movie/inception">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Play className="w-5 h-5" />
                Watch Trailer
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2 border-border hover:bg-secondary bg-transparent">
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Movies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
