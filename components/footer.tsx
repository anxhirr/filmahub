import { Film, Github, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-lg p-2">
                <Film className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">FimaHub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your ultimate destination for discovering and exploring movies from around the world.
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Movies */}
          <div>
            <h3 className="font-semibold mb-4">Movies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Popular
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="font-semibold mb-4">Genres</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Action
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Comedy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Drama
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Sci-Fi
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 FimaHub. All rights reserved. Built with passion for movie lovers.</p>
        </div>
      </div>
    </footer>
  )
}
