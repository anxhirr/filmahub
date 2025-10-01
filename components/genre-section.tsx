"use client"

import { Film, Zap, Heart, Laugh, Ghost, Sparkles } from "lucide-react"
import Link from "next/link"

const genres = [
  {
    name: "Action",
    icon: Zap,
    count: "5,234",
    color: "orange-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    name: "Romance",
    icon: Heart,
    count: "3,891",
    color: "pink-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    name: "Comedy",
    icon: Laugh,
    count: "4,567",
    color: "yellow-500/20",
    borderColor: "border-yellow-500/30",
  },
  {
    name: "Horror",
    icon: Ghost,
    count: "2,345",
    color: "purple-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    name: "Sci-Fi",
    icon: Sparkles,
    count: "3,678",
    color: "cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    name: "Drama",
    icon: Film,
    count: "6,123",
    color: "emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
]

export function GenreSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Browse by Genre</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your perfect movie match across diverse categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => {
            const Icon = genre.icon
            return (
              <Link key={genre.name} href={`/genre/${genre.name.toLowerCase()}`}>
                <div className="group relative p-6 rounded-xl bg-gradient-to-br from-[orange-500/20] border border-[border-orange-500/30] hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{genre.name}</h3>
                      <p className="text-xs text-muted-foreground">{genre.count} movies</p>
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
