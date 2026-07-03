import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "text-white bg-[linear-gradient(100deg,var(--primary-2),var(--primary)_55%,var(--secondary))] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_-8px_rgba(59,158,255,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_16px_40px_-10px_rgba(168,85,247,0.6)] hover:brightness-110",
  secondary:
    "text-foreground glass-strong hover:bg-white/[0.08]",
  outline:
    "text-foreground border border-border bg-transparent hover:border-primary/60 hover:bg-primary/5",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
};

const sizeStyles: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "text-sm px-4 py-2 gap-1.5 rounded-full",
  md: "text-sm px-6 py-3 gap-2 rounded-full",
  lg: "text-base px-8 py-4 gap-2.5 rounded-full",
};

const baseStyles =
  "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out active:scale-[0.97] whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none";

type AnchorButtonProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type NativeButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (props.href) {
    const { href, external, ...rest } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
        {children}
      </Link>
    );
  }

  const nativeProps = props as NativeButtonProps;
  const rest: React.ButtonHTMLAttributes<HTMLButtonElement> = { ...nativeProps };
  delete (rest as Partial<ButtonBaseProps>).variant;
  delete (rest as Partial<ButtonBaseProps>).size;
  delete (rest as Partial<ButtonBaseProps>).className;
  delete (rest as Partial<ButtonBaseProps>).children;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
