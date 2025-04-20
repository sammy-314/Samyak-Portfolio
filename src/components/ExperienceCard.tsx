
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  descriptions: string[];
  className?: string;
}

const ExperienceCard = ({ position, company, duration, location, descriptions, className }: ExperienceCardProps) => {
  return (
    <div className={cn("relative pl-5 animate-slide-up", className)}>
      <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-neon-teal"></div>
      <div className="absolute left-[3px] top-3.5 h-full w-0.5 bg-gradient-to-b from-neon-teal to-transparent"></div>
      
      <div className="mb-1">
        <h3 className="text-lg font-bold">{position}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-white/70">
          <span className="font-medium">{company}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span>{duration}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      
      <ul className="mt-2 space-y-1">
        {descriptions.map((desc, index) => (
          <li key={index} className="text-sm text-white/80">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
