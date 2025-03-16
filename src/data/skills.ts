export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "code",
    title: "Lenguajes",
    skills: ["Python", "PHP", "JavaScript"],
  },
  {
    icon: "server",
    title: "Frameworks & Librerías",
    skills: ["Django", "PyTest", "Laravel", "CodeIgniter", "Sphinx"],
  },
  {
    icon: "database",
    title: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    skills: ["Kibana"],
  },
  {
    icon: "git",
    title: "Herramientas",
    skills: ["Git", "Postman", "Jira", "Scrum"],
  },
];
