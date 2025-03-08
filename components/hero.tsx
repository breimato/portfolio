"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Desarrollador Backend"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index + 1))
      index++
      if (index >= fullText.length) {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <a href="https://github.com/breimato" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </a>
        <a href="https://linkedin.com/in/breimato" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </a>
        <ThemeToggle />
      </div>

      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hola, soy <span className="text-primary">Breixo Mato Martínez</span>
        </h1>
        <div className="h-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground">
            <span className="text-primary">{typedText}</span>
            <span className="animate-blink">|</span>
          </h2>
        </div>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Especializado en creación de APIs RESTful, scripting, bases de datos SQL y dashboards con Python y Django. 
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="flex flex-row gap-4">
            <Button asChild size="lg">
              <a href="#contact">Contactar</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/CV Breixo Mato Martinez - Senior Dev.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span className="sr-only">Scroll hacia abajo</span>
        </a>
      </div>
    </section>
  )
}

