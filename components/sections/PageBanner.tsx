import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  className,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        "relative bg-wka-black py-20 md:py-28",
        className
      )}
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-wka-red/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-60 w-60 rounded-full bg-wka-red/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-wka-red via-wka-red to-transparent" />
    </section>
  );
}
