import { PageBanner } from "@/components/sections/PageBanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ExternalLink, Globe, Building, Dumbbell, Tv, ShoppingBag } from "lucide-react";

const linkCategories = [
  {
    name: "WKA International",
    icon: Globe,
    links: [
      {
        name: "WKA World",
        url: "https://www.wka-world.com",
        description: "Official World Kickboxing Association headquarters",
      },
      {
        name: "WKA European Committee",
        url: "https://www.wkaeurope.com",
        description: "WKA European regional organization",
      },
      {
        name: "WKA Canada",
        url: "https://www.wkacanada.com",
        description: "WKA Canadian national organization",
      },
    ],
  },
  {
    name: "Regional Organizations",
    icon: Building,
    links: [
      {
        name: "Virginia Boxing & Wrestling",
        url: "https://www.dpor.virginia.gov",
        description: "Virginia Department of Professional Regulation",
      },
      {
        name: "North Carolina Boxing Authority",
        url: "https://www.ncboxing.com",
        description: "North Carolina state athletic commission",
      },
      {
        name: "Maryland Athletic Commission",
        url: "https://www.dllr.state.md.us",
        description: "Maryland state athletic commission",
      },
    ],
  },
  {
    name: "Affiliated Gyms",
    icon: Dumbbell,
    links: [
      {
        name: "HybRit Academy",
        url: "https://www.hybritacademy.com",
        description: "Virginia Beach, VA - MMA & Muay Thai",
      },
      {
        name: "Combat Sports Center",
        url: "https://www.combatsportscenter.com",
        description: "Richmond, VA - Multi-discipline training",
      },
      {
        name: "Crenshaw Martial Arts",
        url: "https://www.crenshawma.com",
        description: "Richmond, VA - Muay Thai & Kickboxing",
      },
      {
        name: "Elite Combat Academy",
        url: "https://www.elitecombatacademy.com",
        description: "Norfolk, VA - MMA & Grappling",
      },
    ],
  },
  {
    name: "Media & Streaming",
    icon: Tv,
    links: [
      {
        name: "StreamGlobal Live",
        url: "https://www.streamglobal.live",
        description: "Official WKA USA live streaming partner",
      },
      {
        name: "CSC Fight TV",
        url: "https://www.cscfighttv.com",
        description: "Combat Sports Challenge broadcast partner",
      },
    ],
  },
  {
    name: "Equipment & Sponsors",
    icon: ShoppingBag,
    links: [
      {
        name: "Athlon Rub",
        url: "https://www.athlonrub.com",
        description: "Athletic recovery and performance products",
      },
      {
        name: "Combat Corner",
        url: "https://www.combatcorner.com",
        description: "MMA and combat sports equipment",
      },
      {
        name: "Sucker Punch Entertainment",
        url: "https://www.suckerpunchent.com",
        description: "Combat sports entertainment and media",
      },
      {
        name: "Muay Thai Addict",
        url: "https://www.muaythaiaddict.com",
        description: "Muay Thai gear and apparel",
      },
      {
        name: "Upper Playground",
        url: "https://www.upperplayground.com",
        description: "Urban apparel and streetwear",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <PageBanner
        title="Links"
        subtitle="Partner organizations, affiliated gyms, sponsors, and resources."
      />

      {/* Links by Category */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {linkCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wka-red/10">
                      <Icon className="h-5 w-5 text-wka-red" />
                    </div>
                    <h2 className="heading-3">{category.name}</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {category.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card p-5 group hover:border-wka-red transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-wka-red transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {link.description}
                            </p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-wka-red transition-colors shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-3 mb-4">Become a Partner</h2>
            <p className="text-body mb-6">
              Interested in partnering with WKA USA? We&apos;re always looking for gyms, sponsors,
              and organizations that share our commitment to combat sports excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?type=sponsorship" className="btn-primary">
                Sponsorship Inquiries
              </a>
              <a href="/contact?type=gym" className="btn-secondary">
                Gym Affiliation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-100 py-8">
        <div className="container-custom">
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> External links are provided for informational purposes only.
            WKA USA is not responsible for the content of external websites. The inclusion of a link
            does not imply endorsement by WKA USA.
          </p>
        </div>
      </section>
    </>
  );
}
