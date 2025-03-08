"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"


export default function Projects() {
  const projects = [
    {
      title: "DownloadOrganizer",
      description:
        "Script en Python que organiza automáticamente los archivos de la carpeta de descargas, clasificándolos en subcarpetas según su tipo y facilitando la gestión de archivos.",
      technologies: ["Python", "CLI", "File System"],
      demoUrl: "#",
      repoUrl: "https://github.com/breimato/DownloadOrganizer",
    },
    {
      title: "ProCook",
      description:
        "Aplicación web para la gestión y búsqueda de recetas de cocina. Permite agregar, editar y buscar recetas, ofreciendo una experiencia sencilla para los usuarios.",
      technologies: ["Python", "Flask", "PostgreSQL", "HTML", "CSS"],
      demoUrl: "#",
      repoUrl: "https://github.com/breimato/ProCook",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Card className="border-primary/20 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="dark:bg-secondary/60 dark:text-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}