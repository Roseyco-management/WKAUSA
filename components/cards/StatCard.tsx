import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({
  value,
  label,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div className={cn("card p-6", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-wka-red/10 text-wka-red">
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div
          className={cn(
            "mt-4 inline-flex items-center text-sm font-medium",
            trend === "up" && "text-green-600",
            trend === "down" && "text-red-600",
            trend === "neutral" && "text-gray-600"
          )}
        >
          {trend === "up" && "↑ Trending up"}
          {trend === "down" && "↓ Trending down"}
          {trend === "neutral" && "— No change"}
        </div>
      )}
    </div>
  );
}
