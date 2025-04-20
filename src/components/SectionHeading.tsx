
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2 className={cn("section-heading", className)}>
      {children}
    </h2>
  );
};

export default SectionHeading;
