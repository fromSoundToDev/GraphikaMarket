import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Définition des variantes d'alertes avec cva
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Composant principal : Alert
const Alert = React.forwardRef(function Alert(
  { className, variant = "default", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
});

// Titre de l'alerte
const AlertTitle = React.forwardRef(function AlertTitle(
  { className, ...props },
  ref
) {
  return (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  );
});

// Description de l'alerte
const AlertDescription = React.forwardRef(function AlertDescription(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
});

export { Alert, AlertTitle, AlertDescription };
