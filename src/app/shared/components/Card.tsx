import * as React from "react";
import { cn } from "../utils/cn"; 

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4",
        className
      )}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export { Card };