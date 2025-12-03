import Link from "next/link";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
  id: string;
  name: string;
  date: string;
  time?: string;
  venue: string;
  location: string;
  type: "sanctioned" | "csc" | "scrimmage";
  imageUrl?: string;
  ticketUrl?: string;
  featured?: boolean;
}

const typeLabels = {
  sanctioned: "WKA Sanctioned",
  csc: "CSC Event",
  scrimmage: "Scrimmage League",
};

const typeColors = {
  sanctioned: "bg-wka-red text-white",
  csc: "bg-blue-600 text-white",
  scrimmage: "bg-green-600 text-white",
};

export function EventCard({
  id,
  name,
  date,
  time,
  venue,
  location,
  type,
  imageUrl,
  ticketUrl,
  featured = false,
}: EventCardProps) {
  return (
    <div
      className={cn(
        "card overflow-hidden group",
        featured && "ring-2 ring-wka-red"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
        {imageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-wka-black to-gray-800 flex items-center justify-center">
            <span className="text-4xl font-bold text-wka-red opacity-50">WKA</span>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className={cn("badge", typeColors[type])}>
            {typeLabels[type]}
          </span>
        </div>

        {featured && (
          <div className="absolute top-4 right-4">
            <span className="badge bg-yellow-500 text-black">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="heading-4 line-clamp-2 group-hover:text-wka-red transition-colors">
          {name}
        </h3>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-wka-red" />
            <span>{date}</span>
            {time && (
              <>
                <Clock className="h-4 w-4 text-wka-red ml-2" />
                <span>{time}</span>
              </>
            )}
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-wka-red shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">{venue}</div>
              <div>{location}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <Link
            href={`/events/${id}`}
            className="btn-secondary flex-1 text-center py-2"
          >
            Details
          </Link>
          {ticketUrl && (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 py-2"
            >
              <Ticket className="h-4 w-4" />
              Tickets
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
