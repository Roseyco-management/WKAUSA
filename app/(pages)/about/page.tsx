import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Trophy, Users, Globe, Award, Calendar, Star } from "lucide-react";

const worldChampionships = [
  { year: "1994", location: "Slovakia", type: "Mat Sports" },
  { year: "1995", location: "Germany", type: "Mat Sports" },
  { year: "1996", location: "Czech Republic", type: "Mat Sports" },
  { year: "1997", location: "Ireland", type: "Mat Sports" },
  { year: "1998", location: "Canada", type: "Mat Sports" },
  { year: "1998", location: "Denmark", type: "Ring Sports" },
  { year: "1999", location: "Germany", type: "Mat Sports" },
  { year: "1999", location: "Lebanon", type: "Ring Sports" },
  { year: "2000", location: "USA", type: "Mat Sports" },
  { year: "2000", location: "Czech Republic", type: "Ring Sports" },
  { year: "2001", location: "Austria", type: "Mat & Ring Sports" },
  { year: "2002", location: "Italy", type: "Mat & Ring Sports" },
  { year: "2003", location: "Ireland", type: "Mat Sports" },
  { year: "2003", location: "Belgium", type: "Ring Sports" },
  { year: "2004", location: "Switzerland", type: "Mat & Ring Sports" },
  { year: "2005", location: "Canada", type: "Mat Ring Sports" },
  { year: "2005", location: "USA", type: "Ring Sports" },
  { year: "2006", location: "Spain", type: "Mat & Ring Sports" },
  { year: "2007", location: "Germany", type: "Mat & Ring Sports" },
  { year: "2008", location: "USA", type: "Mat Sports" },
  { year: "2008", location: "Germany", type: "Ring Sports" },
  { year: "2009", location: "Spain", type: "Mat & Ring Sports" },
];

const notableFighters = [
  "Benny \"The Jet\" Urquidez",
  "Don \"The Dragon\" Wilson",
  "Maurice Smith",
  "James Warring",
  "Stan Longinidis",
  "Peter Cunningham",
  "Marco Colajic",
  "Richard Sylla",
  "Fred Moyers",
  "David Johnston",
  "Yosui Tarata",
  "Steve Shepherd",
  "John Moncayo",
  "Andy Hug",
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Learn about the World Kickboxing Association and our mission to promote combat sports excellence."
      />

      {/* About WKA USA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeader
                title="About WKA USA"
                centered={false}
                className="mb-8"
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-3xl font-bold text-wka-red">WKA</span>
                </div>
                <div>
                  <div className="text-lg font-bold">World Kickboxing Association</div>
                  <div className="text-sm text-gray-500">Established 1976</div>
                </div>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-body-lg">
                  The World Kickboxing Association (WKA) is the oldest and largest organization of its kind,
                  with over 107 countries in its membership. The WKA operates across the US and worldwide
                  to provide fighters in numerous disciplines, including various forms of Kickboxing, Muay Thai,
                  MMA, and Submission Grappling, with the best opportunities to compete and to move up
                  through the ranks of other top-level competitors.
                </p>
                <p className="text-body mt-4">
                  The WKA USA seeks to provide an opportunity for fighters to develop from novice class
                  amateur fighters to open class amateurs, and then onto the professional level, through
                  safe and competitive events. We also provide avenues for qualifying competent officials,
                  beginning with training seminars and shadowing opportunities and developing officials
                  who are in demand by the most popular televised fight shows.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Fighter Image</span>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-gray-200 flex items-center justify-center mt-8">
                <span className="text-gray-400">Fighter Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WKA History Section */}
      <section id="history" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="WKA History"
            subtitle="Origins: The World Karate Association"
          />

          <div className="max-w-4xl mx-auto prose prose-gray">
            <p>
              The World Karate Association (also known as the World Karate and Kickboxing Association and the World Kickboxing
              Association) was one of the two original sanctioning bodies (the PKA, or Professional Karate Association being the other)
              for professional karate which evolved into kickboxing as we know it today. Organized on October of 1976 by Howard
              Hanson, a West Virginia black belt and student of Jhee Chool, and Arnold Urquidez, the World Karate Association (WKA) was
              a non-profit organization governing professional and amateur Full Contact Karate with major media prominence throughout
              the 1980s. Unlike the PKA, which banned leg kicks, the WKA sanctioned fighters using all leg techniques above the waist and
              below, creating a unified rule book for the sport.
            </p>
            <p>
              The WKA was the first to use the independent 10 point system for rating, which consisted of a 10 point base, two mandatory
              three round fights and up to a 5 point system. This format did later become their (WKA in the USA) standard but became key
              against the league based points fighter system. One of the WKA's major innovations was the allowance of roundhouse
              kicks to the inside of the thigh below the knee (the PKA's rules permitted no kicks below the belt). Further,
              after it had developed, the WKA was operating internationally with some fourteen member nations, the main ones being
              the United States, Canada, Mexico, Australia, Japan, Hong Kong, Italy, and the United Kingdom. American and
              European fighters were frequently matched with Muay Thai fighters from Southeast Asia. In 1982, the WKA sanctioned
              approximately 30% of all events worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Growth of WKA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Growth of the WKA"
          />

          <div className="max-w-4xl mx-auto prose prose-gray">
            <p>
              By the early 1980s The American Sports Magazine (Sports Today) opined that the martial arts were the third most
              practiced sport in the world, indicating that a general consensus estimated that there was in excess of 20 million people
              globally training in one form or other of martial art. Meanwhile other martial arts bodies, seeing the success of the WKA,
              began to form their own versions of multi-disciplined associations around the world. Some succeeded, many failed.
              Those that failed seemed to have forgotten the principle of &quot;Sport for All&quot; and did not base their ideals and rules on the
              democratic principle. The WKA, on the other hand, conducts annual meetings with representatives from each member
              country and uses a democratic procedure in policy-making.
            </p>
            <p>
              The impact of the WKA on world martial arts as a whole was revolutionary. It was the first organized body of martial arts on a global scale to sanction fights, create
              ranking systems, and institute a development program, whereby children of all ages under a strict code of ethics and safety could learn a martial arts discipline via
              satellite WKA clubs in every city, town, and village, thus ensuring for future years the growth of the sport.
            </p>
          </div>
        </div>
      </section>

      {/* WKA Today */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="The WKA Today"
          />

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray mb-8">
              <p>
                The WKA today enjoys great success at all levels on a global scale. It has representatives in more than 90 countries and
                regularly holds competitions, culminating once a year in the WKA World Championships, which involves all the amateur
                martial arts disciplines and styles under one set competition format. The success of the WKA can only be due to its
                organizational infrastructure and its democratic process, as well as its safety and fairplay guidelines.
              </p>
              <p>
                Each member country of the WKA has a president who is responsible for that country&apos;s implementation of the rules and regulations and for overseeing the growth
                and practice of the martial disciplines as a whole. The WKA has in place a rules committee, a health and safety committee, a refereeing structure, and an annual
                congress. The Congress discusses the many aspects of change within the sport, and it designates via the democratic principle of votes new rules and regulations,
                updates, and innovations within the sport as they come to light. No one person dictates what is to be done. Each member country votes upon all decisions. This is
                largely how the WKA has grown from the oldest existing kickboxing sanctioning body in the world into its current status and continuing success in this century.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <Globe className="h-8 w-8 mx-auto text-wka-red mb-3" />
                <div className="text-3xl font-bold text-gray-900">107+</div>
                <div className="text-sm text-gray-500">Member Countries</div>
              </div>
              <div className="card p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto text-wka-red mb-3" />
                <div className="text-3xl font-bold text-gray-900">47+</div>
                <div className="text-sm text-gray-500">Years Active</div>
              </div>
              <div className="card p-6 text-center">
                <Trophy className="h-8 w-8 mx-auto text-wka-red mb-3" />
                <div className="text-3xl font-bold text-gray-900">6</div>
                <div className="text-sm text-gray-500">Disciplines</div>
              </div>
              <div className="card p-6 text-center">
                <Users className="h-8 w-8 mx-auto text-wka-red mb-3" />
                <div className="text-3xl font-bold text-gray-900">1000s</div>
                <div className="text-sm text-gray-500">Athletes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Championships */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="WKA Amateur World Championships"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {worldChampionships.map((champ, index) => (
                <div key={index} className="card p-4 text-center">
                  <div className="text-lg font-bold text-wka-red">{champ.year}</div>
                  <div className="text-sm font-medium text-gray-900">{champ.location}</div>
                  <div className="text-xs text-gray-500">{champ.type}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card p-4 bg-wka-red text-white text-center">
                <div className="text-2xl font-bold">2005 CANADA</div>
                <div className="text-sm opacity-90">41 participating countries</div>
                <div className="text-sm opacity-90">1736 fighters</div>
              </div>
              <div className="card p-4 bg-wka-red text-white text-center">
                <div className="text-2xl font-bold">2006 SPAIN</div>
                <div className="text-sm opacity-90">42 participating countries</div>
                <div className="text-sm opacity-90">1641 fighters</div>
              </div>
              <div className="card p-4 bg-wka-red text-white text-center">
                <div className="text-2xl font-bold">2007 GERMANY</div>
                <div className="text-sm opacity-90">47 participating countries</div>
                <div className="text-sm opacity-90">1824 fighters</div>
              </div>
              <div className="card p-4 bg-wka-red text-white text-center">
                <div className="text-2xl font-bold">2008</div>
                <div className="text-sm opacity-90">49 countries</div>
                <div className="text-sm opacity-90">1,898 competitors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WKA USA Representative */}
      <section id="representative" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="WKA USA Representative: Brian Crenshaw"
          />

          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[3/4] rounded-xl bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Brian Crenshaw</span>
                  </div>
                </div>
                <div className="md:w-2/3 prose prose-gray">
                  <p>
                    Brian Crenshaw has been involved in formal martial arts classes since 1972. He received his first Black Belt in 1976 in
                    American Open Karate/Kickboxing system, his second in 1979 in Shotoken Karate and also a 1st Kyu (Brown Belt with
                    one stripe) in Kyokushin Karate in 1984. In 1983, Crenshaw&apos;s dream came true when he attended his first of many
                    seminars with Guru Dan Inosanto. Guru Dan opened Crenshaw&apos;s eyes to a whole new world of martial arts. He not only
                    introduced him to Kali, but also Muay Thai, Silat, Savate, Jun Fan, Shoot/Ground Fighting, and of course the concepts of Jeet
                    Kune Do. Under Arjan Surachai Sirisute, Crenshaw was tested and awarded his basic level instructor in 1993 and in 1995
                    was made a Kru (teacher of Muay Thai). A Bruce Lee fan all his life, Crenshaw was not able to study Wing Chun until
                    1987, where he began his lessons in the May Yat family system and achieved the rank of SiFu (instructor).
                  </p>
                  <p>
                    Since June 1993, Brian Crenshaw has continually pursued several more of his Muay Thai and Kickboxing goals by training Crenshaw
                    Muay Thai continually pursuing several avenues to improve his grappling skills with coach T.C. Roberts and a variety of
                    sparring partners. His gym, says Britt, is &quot;extraordinary&quot; and has a good mix of fighters, professional and amateur, of all
                    different weight classes. Thus, he has a wide variety of both Thai fighters and MMA fighters with whom to train. He
                    describes himself, before the advent of his MMA career, as &quot;an average working stiff&quot; who had a job working with sheet
                    rock. Britt is currently going to school to get his degree in multimedia. With school, training, and spending time with his
                    kids, he has little free time for himself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Champions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Some of the WKA's Most Notable Early Champions & Matches"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {notableFighters.map((fighter) => (
                <div key={fighter} className="card p-4 text-center hover:border-wka-red transition-colors">
                  <Star className="h-6 w-6 mx-auto text-wka-red mb-2" />
                  <div className="text-sm font-medium text-gray-900">{fighter}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-wka-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">Join the WKA Legacy</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Whether you&apos;re a fighter, official, promoter, or gym owner, become part of the world&apos;s
            oldest and most respected kickboxing organization.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Register Now
            </Link>
            <Link href="/events" className="btn-outline">
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
