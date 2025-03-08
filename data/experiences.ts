export interface Experience {
  id: string
  position: string
  company: string
  period: string
  description: string
  detailedDescription: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "seresco",
    position: "Django Backend Developer",
    company: "Seresco",
    period: "Febrero 2023 - Enero 2025",
    description:
      "Desarrollo y optimización de un dashboard y servicios de sincronización de datos, logrando mejoras notables en rendimiento y mantenibilidad.",
    detailedDescription:
      "Como Django Backend Developer en Seresco, lideré y diseñé la nueva sincronización de datos entre el dashboard y API Connect, aplicando principios de arquitectura limpia y patrones de diseño. Implementé documentación automatizada para agilizar la comprensión de la aplicación y participé en la definición de la base de datos con Django Migrations. Además, integré Pytest y MagicMock para pruebas, garantizando la calidad del código y la estabilidad de la solución.",
    responsibilities: [
      "Implementar el uso de convenciones de Git para mejorar la colaboración",
      "Liderar el desarrollo de la nueva sincronización de datos entre el dashboard y API Connect",
      "Implementar documentación automatizada con Sphinx para facilitar el mantenimiento",
      "Participar en el diseño de la base de datos utilizando Django Migrations",
      "Integrar Pytest junto con MagicMock para pruebas automatizadas",
      "Gestionar el despliegue, monitoreo y pruebas de APIs en API Connect usando Postman y Kibana",
    ],
    achievements: [
      "Reducción del tiempo de sincronización de datos en un 88.89% (de 4.5 horas a 30 minutos)",
      "Mejora de la organización y trazabilidad del proyecto mediante prácticas de Git bien definidas",
    ],
    technologies: [
      "Python",
      "Django",
      "Pytest",
      "Sphinx",
      "Postman",
      "Kibana",
      "Git",
      "API Connect",
    ],
  },
  {
    id: "nunegal",
    position: "PHP & Python Backend Developer",
    company: "Nunegal",
    period: "Enero 2022 - Febrero 2023",
    description:
      "Diseño y mantenimiento de funcionalidades en el portal de reclutamiento, garantizando calidad y escalabilidad en el código.",
    detailedDescription:
      "En Nunegal, me centré en el desarrollo y la optimización de nuevas características para el portal de reclutamiento y el portal del empleado. Colaboré estrechamente con el equipo de Recursos Humanos para traducir sus necesidades en soluciones técnicas, implementando APIs robustas y seguras. Además, aseguré las buenas prácticas de seguridad a través de un sistema de hashing de contraseñas y realicé integraciones con diversas tecnologías.",
    responsibilities: [
      "Desarrollar y mantener nuevas características para el portal de reclutamiento",
      "Diseñar y desarrollar la API del portal del empleado para facilitar el acceso a datos",
      "Trabajar en colaboración con el equipo de RRHH para cubrir sus necesidades técnicas",
      "Implementar un sistema de hashing de contraseñas para reforzar la seguridad",
      "Mantener un código limpio y escalable en PHP y Python",
    ],
    achievements: [
      "Mejoras significativas en la eficiencia de procesos en el portal de reclutamiento",
      "Diseño de una API robusta que facilitó el acceso y análisis de datos a los analistas",
    ],
    technologies: [
      "PHP",
      "Python",
      "Laravel",
      "CodeIgniter",
      "MySQL",
      "PostgreSQL",
      "Git",
    ],
  },
]
