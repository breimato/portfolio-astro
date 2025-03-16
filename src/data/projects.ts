export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: "Chillringo Infra",
    description:
      "Infraestructura como código para el proyecto Chillringo, implementando CI/CD con GitHub Actions y despliegue en AWS con Terraform.",
    technologies: ["Terraform", "AWS", "GitHub Actions", "Infrastructure as Code"],
    repoUrl: "https://github.com/breimato/chillringo-infra",
  },
  {
    title: "Pokedex",
    description:
      "Aplicación web que consume la API de Pokémon para mostrar información detallada sobre diferentes Pokémon, sus tipos, habilidades y estadísticas.",
    technologies: ["JavaScript", "React", "API REST", "CSS"],
    repoUrl: "https://github.com/breimato/pokedex",
  },
  {
    title: "Portfolio",
    description:
      "Sitio web personal que muestra mi experiencia, habilidades y proyectos. Diseñado con un enfoque moderno y responsivo.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/breimato/portfolio",
  },
  {
    title: "DownloadOrganizer",
    description:
      "Script en Python que organiza automáticamente los archivos de la carpeta de descargas, clasificándolos en subcarpetas según su tipo y facilitando la gestión de archivos.",
    technologies: ["Python", "CLI", "File System"],
    repoUrl: "https://github.com/breimato/DownloadOrganizer",
  },
  {
    title: "ProCook",
    description:
      "Aplicación web para la gestión y búsqueda de recetas de cocina. Permite agregar, editar y buscar recetas, ofreciendo una experiencia sencilla para los usuarios.",
    technologies: ["Python", "Flask", "PostgreSQL", "HTML", "CSS"],
    repoUrl: "https://github.com/breimato/ProCook",
  },
];
