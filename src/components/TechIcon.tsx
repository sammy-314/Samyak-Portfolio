
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface TechIconProps {
  children: ReactNode;
  name: string;
  className?: string;
  color?: string;
}

const TechIcon = ({ children, name, className, color }: TechIconProps) => {
  return (
    <div className="group relative">
      <div 
        className={cn("tech-icon", className || "bg-white/5")}
        style={{ backgroundColor: color ? `${color}20` : undefined }}
      >
        <div className="transition-opacity group-hover:opacity-100 opacity-0 absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium bg-black/90 whitespace-nowrap">
          {name}
        </div>
        {children}
      </div>
    </div>
  );
};

export default TechIcon;
