export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "code",
    title: "Lenguajes",
    skills: ["Python", "Java", "PHP"],
  },
  {
    icon: "server",
    title: "Frameworks & Librerías",
    skills: ["Spring", "MyBatis", "Django", "PyTest", "Laravel", "CodeIgniter", "Sphinx"],
  },
  {
    icon: "database",
    title: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "Oracle", "SQLite"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    skills: ["Kibana", "Docker", "Azure DevOps", "Ansible"],
  },
  {
    icon: "git",
    title: "Herramientas",
    skills: ["Git", "GitHub", "Postman", "Jira", "Scrum"],
  },
];
