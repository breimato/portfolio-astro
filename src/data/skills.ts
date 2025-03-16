export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: Record<string, string[]> = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  frameworks: ["Node.js", "Express", "NestJS", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB"],
  devops: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  tools: ["Git", "Jira", "Swagger", "Postman", "GraphQL"]
};
