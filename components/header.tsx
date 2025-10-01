"use client"

import { Search, Film, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-lg p-2 group-hover:scale-110 transition-transform">
              <Film className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">FimaHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/movies" className="text-sm font-medium hover:text-primary transition-colors">
              Movies
            </Link>
            <Link href="/trending" className="text-sm font-medium hover:text-primary transition-colors">
              Trending
            </Link>
            <Link href="/genres" className="text-sm font-medium hover:text-primary transition-colors">
              Genres
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-secondary"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 animate-in slide-in-from-top-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search for movies..." className="pl-10 bg-secondary border-border" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-in slide-in-from-top-2">
            <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/movies" className="block text-sm font-medium hover:text-primary transition-colors">
              Movies
            </Link>
            <Link href="/trending" className="block text-sm font-medium hover:text-primary transition-colors">
              Trending
            </Link>
            <Link href="/genres" className="block text-sm font-medium hover:text-primary transition-colors">
              Genres
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
