import Link from "next/link";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "WKA USA Announces 2025 Event Schedule",
    excerpt: "The World Kickboxing Association USA has released its official 2025 event calendar featuring regional tournaments and championship events across the nation.",
    date: "December 15, 2024",
    category: "Announcement",
  },
  {
    id: 2,
    title: "CSC Combat Sports Challenge Returns in January",
    excerpt: "The popular Combat Sports Challenge series returns to Richmond, VA in January 2025 with both amateur and professional bouts.",
    date: "December 10, 2024",
    category: "Events",
  },
  {
    id: 3,
    title: "New Fighter Rankings Released",
    excerpt: "Updated WKA USA fighter rankings are now available. Check out who's climbing the ranks in each weight division.",
    date: "December 5, 2024",
    category: "Rankings",
  },
];

export function NewsSection() {
  return (
    <section className="bg-gray-100 py-8">
      {/* Red banner header */}
      <div className="bg-wka-red py-3 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          News
        </h2>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <span className="inline-block bg-wka-red text-white text-xs font-semibold px-2 py-1 rounded mb-3">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/events"
            className="inline-block bg-wka-black text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-wka-red transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
