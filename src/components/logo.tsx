import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 font-display", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--primary-2),var(--primary)_55%,var(--secondary))] shadow-[0_0_18px_-2px_rgba(59,158,255,0.7)]">
        <span className="absolute inset-0 rounded-xl bg-white/10" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-5 w-5 text-white"
        >
          <path
            d="M4 6.5C4 5.11929 5.11929 4 6.5 4H17.5C18.8807 4 20 5.11929 20 6.5V14.5C20 15.8807 18.8807 17 17.5 17H6.5C5.11929 17 4 15.8807 4 14.5V6.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M9 20H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M12 17V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path
            d="M8.5 8.5L13 11L8.5 13.5V8.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-foreground">
        {siteConfig.shortName}
      </span>
    </div>
  );
}
