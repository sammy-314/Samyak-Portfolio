
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  className?: string;
  style?: React.CSSProperties; // Add style prop to interface
}

const ProjectCard = ({ title, description, techStack, githubLink, className, style }: ProjectCardProps) => {
  return (
    <div 
      className={cn("glass-card p-6 rounded-lg hover:shadow-md hover:shadow-neon-purple/20 transition-all", className)}
      style={style} // Apply style prop
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs bg-white/10 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-end">
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-neon-teal hover:text-neon-purple transition-colors flex items-center gap-1"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
