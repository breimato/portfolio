"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experiences"
import { motion } from "framer-motion"

export default function Experience() {
  const router = useRouter()

  const handleExperienceClick = (id: string) => {
    router.push(`/experience/${id}`)
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Profesional</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleExperienceClick(exp.id)}
              className="cursor-pointer"
            >
              <Card className="border-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <CardTitle>{exp.position}</CardTitle>
                    <Badge variant="outline" className="sm:self-start">
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="dark:bg-secondary/60 dark:text-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {exp.technologies.length > 5 && <Badge variant="outline">+{exp.technologies.length - 5} más</Badge>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

