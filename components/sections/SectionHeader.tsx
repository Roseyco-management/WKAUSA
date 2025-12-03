import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2
        className={cn(
          "heading-2",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg",
            light ? "text-gray-300" : "text-gray-600",
            centered && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-1 w-12 bg-wka-red rounded-full" />
        <div className="h-1 w-4 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
