import Link from "next/link";
import { cn } from "@/lib/utils";

interface AthleteCardProps {
  id: string;
  name: string;
  nickname?: string;
  gym?: string;
  location?: string;
  record: string;
  weightClass: string;
  discipline: string;
  imageUrl?: string;
  ranking?: number;
  isChampion?: boolean;
}

export function AthleteCard({
  id,
  name,
  nickname,
  gym,
  location,
  record,
  weightClass,
  discipline,
  imageUrl,
  ranking,
  isChampion = false,
}: AthleteCardProps) {
  return (
    <div className="card overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        {imageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-6xl font-bold text-gray-400">
              {name.charAt(0)}
            </span>
          </div>
        )}

        {/* Ranking badge */}
        {ranking && (
          <div className="absolute top-4 left-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wka-black text-white font-bold text-lg">
              #{ranking}
            </div>
          </div>
        )}

        {/* Champion badge */}
        {isChampion && (
          <div className="absolute top-4 right-4">
            <span className="badge bg-yellow-500 text-black font-semibold">
              Champion
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-gray-900 group-hover:text-wka-red transition-colors">
              {name}
            </h3>
            {nickname && (
              <p className="text-sm text-gray-500">&quot;{nickname}&quot;</p>
            )}
          </div>
          <div className="text-right">
            <div className="font-bold text-wka-red">{record}</div>
            <div className="text-xs text-gray-500">W-L-D</div>
          </div>
        </div>

        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Weight:</span>
            <span className="font-medium">{weightClass}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Discipline:</span>
            <span className="font-medium">{discipline}</span>
          </div>
          {gym && (
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Gym:</span>
              <span className="font-medium">{gym}</span>
            </div>
          )}
        </div>

        <Link
          href={`/athletes/${id}`}
          className="mt-4 block w-full btn-secondary text-center py-2 text-sm"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
