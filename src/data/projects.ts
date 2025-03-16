export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "API RESTful de E-commerce",
    description: "Diseño e implementación de una API completa para plataforma de comercio electrónico con autenticación JWT, procesamiento de pagos y gestión de productos.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Jest"],
    demoUrl: "https://github.com/",
    repoUrl: "https://github.com/",
    image: "/projects/ecommerce-api.jpg"
  },
  {
    title: "Microservicios para Sistema de Reservas",
    description: "Arquitectura de microservicios para sistema de reservas con comunicación asíncrona mediante colas de mensajes y bases de datos distribuidas.",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "AWS"],
    demoUrl: "https://github.com/",
    repoUrl: "https://github.com/",
    image: "/projects/microservices.jpg"
  },
  {
    title: "API Gateway para Fintech",
    description: "Desarrollo de un API Gateway personalizado para aplicación fintech con manejo avanzado de rate-limiting, caching y balanceo de carga.",
    technologies: ["TypeScript", "NestJS", "Redis", "GraphQL", "Kubernetes"],
    demoUrl: "https://github.com/",
    repoUrl: "https://github.com/",
    image: "/projects/api-gateway.jpg"
  }
];
