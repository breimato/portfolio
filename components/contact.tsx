"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Abre Gmail con los datos en asunto/cuerpo
  const handleGmail = () => {
    const subject = `Contacto de ${formData.name}`
    const body = `Hola, mi nombre es ${formData.name}.\n\n${formData.message}\n\nMi correo es: ${formData.email}`
    // URL de composición de Gmail:
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=breimatom@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, "_blank")
  }

  // Abre WhatsApp con el texto predefinido
  const handleWhatsApp = () => {
    const text = `Hola, mi nombre es ${formData.name}. ${formData.message} (Mi correo es: ${formData.email})`
    // Reemplaza 34663946460 por el número de teléfono
    const whatsAppUrl = `https://wa.me/34663946460?text=${encodeURIComponent(text)}`

    window.open(whatsAppUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">¡Hablemos!</h3>
            <p className="text-muted-foreground mb-6">
              ¿Tienes un proyecto interesante o una oportunidad laboral? No dudes en contactarme.
              Estoy disponible para discutir cómo puedo ayudarte con tus necesidades de desarrollo backend.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:breimatom@gmail.com" className="hover:text-primary transition-colors">
                  breimatom@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>También puedes encontrarme en LinkedIn</span>
              </div>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>Elige el método más cómodo para ti</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Aquí podrían ir tus campos de texto, si los quisieras */}
              <div className="mb-6">
                {/* Inputs o texto informativo */}
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleGmail}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Abrir Gmail
                </Button>

                <Button
                  type="button"
                  className="flex-1"
                  onClick={handleWhatsApp}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Abrir WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
