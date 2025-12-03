import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { AboutSection } from "@/components/sections/AboutSection";
import { ScrimmageLeague } from "@/components/sections/ScrimmageLeague";
import { StylesOfFighting } from "@/components/sections/StylesOfFighting";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { NewsSection } from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Banner - AT THE TOP */}
      <HeroBanner />

      {/* 2. Upcoming Events */}
      <UpcomingEvents />

      {/* 3. About Us */}
      <AboutSection />

      {/* 4. WKA Scrimmage League */}
      <ScrimmageLeague />

      {/* 5. Styles of Fighting */}
      <StylesOfFighting />

      {/* 6. Featured Event, Fighter & Gym */}
      <FeaturedSection />

      {/* 7. Videos */}
      <VideosSection />

      {/* 8. News */}
      <NewsSection />
    </main>
  );
}
