export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: "GuessDle",
    description:
      "Aplicación web para jugar Worddle de distintos temas: fútbol, League of Legends, One Piece, etc. La aplicación tiene un ranking de puntuaciones para que puedas jugar con tus amigos. Además, para añadir un juego más, solo hay que añadir un archivo JSON con los datos y lanzar un script. Reutilización de código y modularidad.",
    technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/breimato/GuessDle",
  },
  {
    title: "One Piece API",
    description:
      "API REST para obtener, crear, actualizar y eliminar información sobre los elementos del mundo de One Piece.",
    technologies: ["Java", "Spring", "PostgreSQL", "REST", "MyBatis", "Docker"],
    repoUrl: "https://github.com/breimato/OnePieceApi",
  },
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
  {
    title: "Video Compressor - Facebook Style",
    description:
      "Script de Python para comprimir videos a 720p con optimización de bitrate, manteniendo la estructura de carpetas y procesamiento multi-hilo para mayor velocidad.",
    technologies: ["Python", "FFmpeg", "Multithreading", "Video Processing"],
    repoUrl: "https://github.com/breimato/video-compressing",
  },
  {
    title: "Calculadora de Interés Compuesto",
    description:
      "Calculadora web interactiva para calcular interés compuesto con visualización en tiempo real y gráficas interactivas. Disponible en español e inglés.",
    technologies: ["TypeScript", "HTML", "CSS", "Astro", "Responsive Design"],
    repoUrl: "https://github.com/breimato/calculadora-interes-compuesto",
  }
];
