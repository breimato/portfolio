"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, Code, GitBranch, Cloud } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const categories = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Lenguajes",
      skills: ["Python", "PHP", "JavaScript"],
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Frameworks & Librerías",
      skills: ["Django", "PyTest", "Laravel", "CodeIgniter", "Sphinx"],
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Bases de Datos",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Cloud & DevOps",
      skills: ["Kibana"],
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "Herramientas",
      skills: ["Git", "Postman", "Jira", "Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Card className="border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                  <CardDescription>Tecnologías que domino</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm dark:bg-secondary/60 dark:text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
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