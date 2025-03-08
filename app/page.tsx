import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeProvider from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador Backend",
  description: "Portfolio profesional de desarrollador backend",
}

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

