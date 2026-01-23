export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  type: "Frontend" | "Backend" | "Fullstack";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive Resume Portfolio",
    description:
      "A full-stack portfolio showcasing system design concepts.",
    techStack: ["Next.js", "Tailwind", "Spring Boot"],
    type: "Fullstack",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A task manager with authentication and role-based access.",
    techStack: ["React", "Node.js", "MongoDB"],
    type: "Frontend",
  },
];

