import { Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-50 h-50 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/breixo.jpg"
                alt="Breixo Mato Martínez"
                width={250}
                height={250}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un desarrollador backend con más de 3 años de experiencia en el desarrollo de aplicaciones web y especialmente
                en tratar con personas y equipos, ya sean compañeros o clientes. Adoro la programación, pero nada es mas importante que las personas.
                Mi objetivo es dar el mejor servicio y hacer que la experiencia del cliente sea la más agradable posible.
              </p>
              <p>
                Me he especializado en scripting, APIs RESTful y bases de datos SQL.
                Disfruto optimizando el rendimiento y asegurando la seguridad de las aplicaciones.
              </p>
              <p>
                Fuera del mundo de la programación, soy una persona muy sociable. Me encanta compartir mi tiempo con mis seres queridos, entrenar, 
                y hablar o divagar con mi gente.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span>Terminal</span>
              </CardTitle>
              <CardDescription>Información personal</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 font-mono text-sm">
              <div className="space-y-4">
                <div>
                  <span className="text-primary">$ </span>
                  <span className="text-muted-foreground">whoami</span>
                  <p className="mt-1 pl-4">Breixo Mato Martínez, Desarrollador Backend</p>
                </div>
                <div>
                  <span className="text-primary">$ </span>
                  <span className="text-muted-foreground">location</span>
                  <p className="mt-1 pl-4">Galicia, España</p>
                </div>
                <div>
                  <span className="text-primary">$ </span>
                  <span className="text-muted-foreground">education</span>
                  <p className="mt-1 pl-4">Ciclo Superior de Aplicaciones Multiplataforma, IES Fernando Wirtz Suárez</p>
                </div>
                <div>
                  <span className="text-primary">$ </span>
                  <span className="text-muted-foreground">interests</span>
                  <p className="mt-1 pl-4">Tecnología, deporte y pasar tiempo son mis seres queridos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

