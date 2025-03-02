import * as React from "react";
import { cn } from "../utils/cn"; 

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-all focus:outline-none focus:ring-2",
          {
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500": variant === "default",
            "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-500": variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };