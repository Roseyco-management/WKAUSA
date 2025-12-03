import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FileText, Download, ExternalLink } from "lucide-react";

const disciplines = [
  {
    id: "light-contact",
    name: "Light Contact (LC)",
    shortName: "LC",
    description: `Light Contact is a fusion of Full Contact and Semi-Contact Point-Fighting. In contrast to the score-break rhythm
of the semi-contact bouts, the sparring is continuous without interference for the referee as long as no foul play
takes place and penalties have to be awarded. Light Contact sparring demands high martial technique skill and a high
level of stamina. It differs from Full Contact in the severity of the blows allowed; all attacks are to be executed
with maximum control. In Light Contact, hard punches and kicks that could lead to knockout are not allowed.`,
    rules: [
      "Continuous sparring without breaks",
      "Controlled techniques - no knockout attempts",
      "Attacks executed with maximum control",
      "High emphasis on skill and stamina",
    ],
  },
  {
    id: "full-contact",
    name: "Full Contact (FC)",
    shortName: "FC",
    description: `Full Contact allows 100 knock-out techniques and any kicks executed in the scoring area above the waist of an
opponent. The contest takes place in a traditional boxing ring. All attacks can be delivered with full-power (hence
Full Contact). Knockouts in LC1 and technical KO will result in victory. A technical KO means a single knockdown.`,
    rules: [
      "Full power strikes allowed above the waist",
      "Traditional boxing ring",
      "Knockouts and TKOs determine victory",
      "No leg kicks below the waist",
    ],
  },
  {
    id: "kickboxing",
    name: "Kickboxing (KB)",
    shortName: "KB",
    description: `Kickboxing is oriental Full Contact Replacement. In addition to all techniques allowed in Full Contact, Kickboxing also
allows low kicks to the inner and outer part of the leg.`,
    rules: [
      "All Full Contact techniques permitted",
      "Low kicks to inner and outer leg allowed",
      "Full power strikes",
      "International style rules",
    ],
  },
  {
    id: "muay-thai",
    name: "Thaiboxing (TB) - Including Muay Thai and K-1",
    shortName: "MT/K1",
    description: `Thaiboxing or Muay Thai is Thailand's national sport. It is an ancient martial art with deep cultural traditions. During
the bouts, which take place in a boxing ring form, fighters can use kicks, knee kicks, but also elbows and strikes on
opponent's body and head. Before every fight, competitors perform a kind of dance, the Ram-Muay, or Waikru. With
this dance, the fighters demonstrate their respect for their trainer and honor and thank their trainee. and.`,
    rules: [
      "Clinching and clinch strikes allowed",
      "Elbow and knee strikes permitted",
      "Full Muay Thai rules including Ram-Muay",
      "K-1 variant: No elbows, limited clinch",
    ],
  },
  {
    id: "mma",
    name: "Mixed Martial Arts (MMA)",
    shortName: "MMA",
    description: `Made popular by the UFC, MMA is one of the fastest growing sports in America. The style is a composite of
striking and grappling styles. It utilizes may use a variety of techniques and strategies, including boxing techniques,
kicks, knees, elbows, ground control, and submissions holds. MMA is typically fought in a caged
area, but MMA bouts may also take place in a boxing ring. MMA fighters wear open fingered gloves that
encourage grappling ability while still allowing for striking techniques both standing and on the ground.`,
    rules: [
      "Combination of striking and grappling",
      "Ground fighting with submissions allowed",
      "Open-fingered MMA gloves",
      "Fought in cage or ring",
    ],
  },
  {
    id: "grappling",
    name: "Submission Grappling (SG)",
    shortName: "SG",
    description: `Submission Grappling includes a variety of martial arts styles including Brazilian Jiu Jitsu, Sambo, Judo, wrestling
and others. Combat submission grappling is a combination style that uses takedowns, throws, and leverage based
ground submissions. Submission matches take place on matted areas and can be won either by submission or if no submission occurs
by points.`,
    rules: [
      "No-gi grappling on mats",
      "Takedowns and throws allowed",
      "Various submission holds permitted",
      "Points or submission victory",
    ],
  },
];

const regulations = [
  {
    name: "WKA Amateur Rules and Regulations",
    description: "Complete rulebook for amateur competition across all disciplines",
    file: "/docs/amateur-rules.pdf",
  },
  {
    name: "WKA Professional Rules and Regulations",
    description: "Official rules for professional sanctioned events",
    file: "/docs/professional-rules.pdf",
  },
  {
    name: "WKA Mat Rule Book",
    description: "Specific rules for mat sports including grappling",
    file: "/docs/mat-rules.pdf",
  },
];

export default function SportsPage() {
  return (
    <>
      <PageBanner
        title="Sports"
        subtitle="WKA sanctions competition across six distinct combat sports disciplines, each with specific rules and regulations."
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="WKA Divisions and Styles"
          />

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-body-lg">
              The World Kickboxing Association sanctions amateur and professional competition in multiple
              combat sports disciplines. Each discipline has its own specific rules, scoring criteria, and
              equipment requirements.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="#regulations"
              className="btn-primary"
            >
              <FileText className="h-4 w-4 mr-2" />
              View Regulations
            </Link>
            <Link
              href="#regulations"
              className="btn-secondary"
            >
              Download Rule Books
            </Link>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="bg-gray-50">
        {disciplines.map((discipline, index) => (
          <div
            key={discipline.id}
            id={discipline.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <div className="grid gap-12 lg:grid-cols-2 items-start">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-wka-red text-white font-bold text-xl">
                      {discipline.shortName}
                    </div>
                    <h2 className="heading-3">{discipline.name}</h2>
                  </div>

                  <p className="text-body leading-relaxed whitespace-pre-line">
                    {discipline.description}
                  </p>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Rules Card */}
                  <div className="card p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Rules</h4>
                    <ul className="space-y-3">
                      {discipline.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wka-red/10 text-wka-red text-xs font-bold">
                            {ruleIndex + 1}
                          </div>
                          <span className="text-sm text-gray-600">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image placeholder */}
                  <div className="mt-4 aspect-video rounded-xl bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">{discipline.name} Action Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Regulations Section */}
      <section id="regulations" className="section-padding bg-wka-black text-white">
        <div className="container-custom">
          <SectionHeader
            title="Rules & Regulations"
            subtitle="Download official WKA rule books and regulations for all disciplines."
            light
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {regulations.map((doc) => (
                <div key={doc.name} className="card-dark bg-gray-900 p-6 rounded-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wka-red/10">
                        <FileText className="h-6 w-6 text-wka-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{doc.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">{doc.description}</p>
                      </div>
                    </div>
                    <a
                      href={doc.file}
                      className="btn-primary py-2 px-4 text-sm shrink-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                For questions about rules or regulations, please{" "}
                <Link href="/contact" className="text-wka-red hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2">Ready to Compete?</h2>
          <p className="mt-4 text-body-lg max-w-2xl mx-auto">
            Whether you&apos;re an experienced fighter or just starting out, WKA USA has events
            for all skill levels across all disciplines.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary">
              View Upcoming Events
            </Link>
            <Link href="/contact" className="btn-secondary">
              Register as Fighter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
