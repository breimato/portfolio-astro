export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Backend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Presente",
    description: "Liderazgo en el desarrollo de microservicios para procesamiento de pagos con más de 1M de transacciones diarias. Optimización de rendimiento y escalabilidad en plataforma cloud.",
    responsibilities: [
      "Diseño e implementación de arquitectura de microservicios",
      "Desarrollo de pipelines CI/CD para automatizar despliegues",
      "Optimización de consultas y estructura de base de datos para alta concurrencia",
      "Mentoría a desarrolladores junior del equipo"
    ]
  },
  {
    title: "Backend Developer",
    company: "DataFlow Systems",
    period: "2019 - 2022",
    description: "Desarrollo de APIs RESTful para sistema de gestión de datos financieros. Implementación de autenticación y autorización basada en roles.",
    responsibilities: [
      "Creación de endpoints REST siguiendo estándares OpenAPI",
      "Integración con servicios de terceros mediante webhooks",
      "Desarrollo de tests unitarios y de integración",
      "Monitorización y resolución de incidencias en producción"
    ]
  },
  {
    title: "Desarrollador Full Stack",
    company: "WebSolutions",
    period: "2017 - 2019",
    description: "Desarrollo de aplicaciones web completas para clientes de diversos sectores. Especialización progresiva en backend.",
    responsibilities: [
      "Implementación de funcionalidades full-stack usando MERN",
      "Desarrollo de CRMs personalizados para pequeñas empresas",
      "Optimización de rendimiento front-end y back-end",
      "Soporte técnico y mantenimiento de aplicaciones existentes"
    ]
  }
];
