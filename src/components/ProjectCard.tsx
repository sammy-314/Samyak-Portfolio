
import { Github } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  className?: string;
}

const ProjectCard = ({ title, description, techStack, githubLink, className }: ProjectCardProps) => {
  return (
    <div className={cn("neon-border p-6 glass-card transition-all duration-300 hover:-translate-y-1", className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        )}
      </div>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
