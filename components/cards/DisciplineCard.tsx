import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisciplineCardProps {
  name: string;
  shortName: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function DisciplineCard({
  name,
  shortName,
  description,
  href,
  icon,
}: DisciplineCardProps) {
  return (
    <Link
      href={href}
      className="card p-6 group hover:border-wka-red transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Icon/Badge */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-wka-red/10 text-wka-red group-hover:bg-wka-red group-hover:text-white transition-colors duration-300">
          {icon || (
            <span className="text-lg font-bold">{shortName}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="heading-4 group-hover:text-wka-red transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>

        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-wka-red group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </Link>
  );
}
