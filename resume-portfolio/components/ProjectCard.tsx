import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Action */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>View Details</span>
        <ExternalLink className="w-4 h-4" />
      </div>
    </div>
  );
}
