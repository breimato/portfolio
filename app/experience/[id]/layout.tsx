import type React from "react"
import type { Metadata } from "next"
import ThemeProvider from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Experiencia | Desarrollador Backend",
  description: "Detalle de experiencia profesional",
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">{children}</main>
    </ThemeProvider>
  )
}

