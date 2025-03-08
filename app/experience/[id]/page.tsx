"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { experiences, type Experience } from "@/data/experiences"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building, CheckCircle, ListChecks } from "lucide-react"
import { use } from "react"

export default function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const [experience, setExperience] = useState<Experience | null>(null)

  useEffect(() => {
    const exp = experiences.find((e) => e.id === id)
    if (exp) {
      setExperience(exp)
    } else {
      router.push("/#experience")
    }
  }, [id, router])

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Button variant="ghost" className="mb-8 flex items-center gap-2" onClick={() => router.push("/#experience")}>
        <ArrowLeft className="h-4 w-4" />
        Volver a Experiencias
      </Button>

      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <Badge className="w-fit">{experience.period}</Badge>
            <CardTitle className="text-3xl">{experience.position}</CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="h-5 w-5" />
              <span className="text-xl">{experience.company}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Descripción</h3>
            <p className="text-muted-foreground">{experience.detailedDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              Responsabilidades
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Logros
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="dark:bg-secondary/60 dark:text-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/#experience")} className="w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a todas las experiencias
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}