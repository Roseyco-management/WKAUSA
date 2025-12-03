import { PageBanner } from "@/components/sections/PageBanner";
import { Shield, AlertTriangle, Calendar, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample suspensions data
const suspensions = [
  {
    id: 1,
    name: "John Doe",
    duration: "30",
    reason: "Medical - Post Fight",
    endDate: "December 15, 2024",
    event: "CSC 43",
    eventDate: "November 16, 2024",
    type: "medical" as const,
  },
  {
    id: 2,
    name: "Jane Smith",
    duration: "60",
    reason: "Medical - Post Fight KO",
    endDate: "January 15, 2025",
    event: "CSC 43",
    eventDate: "November 16, 2024",
    type: "medical" as const,
  },
  {
    id: 3,
    name: "Mike Johnson",
    duration: "30",
    reason: "Medical - Post Fight",
    endDate: "December 20, 2024",
    event: "CSC 42",
    eventDate: "September 21, 2024",
    type: "medical" as const,
  },
  {
    id: 4,
    name: "Robert Williams",
    duration: "Indefinite",
    reason: "Conduct Violation",
    endDate: "TBD",
    event: "CSC 41",
    eventDate: "August 17, 2024",
    type: "conduct" as const,
  },
  {
    id: 5,
    name: "Sarah Davis",
    duration: "90",
    reason: "Medical - Injury",
    endDate: "February 1, 2025",
    event: "Regional Championships",
    eventDate: "November 2, 2024",
    type: "medical" as const,
  },
  {
    id: 6,
    name: "Chris Brown",
    duration: "30",
    reason: "Medical - Post Fight",
    endDate: "December 25, 2024",
    event: "Scrimmage League #11",
    eventDate: "November 25, 2024",
    type: "medical" as const,
  },
  {
    id: 7,
    name: "Alex Taylor",
    duration: "Indefinite",
    reason: "Administrative Hold",
    endDate: "TBD",
    event: "N/A",
    eventDate: "October 1, 2024",
    type: "administrative" as const,
  },
];

const durationBadgeStyles = {
  "30": "bg-yellow-100 text-yellow-800",
  "60": "bg-orange-100 text-orange-800",
  "90": "bg-red-100 text-red-800",
  "Indefinite": "bg-red-600 text-white",
};

export default function SuspensionsPage() {
  const medicalCount = suspensions.filter((s) => s.type === "medical").length;
  const conductCount = suspensions.filter((s) => s.type === "conduct").length;
  const adminCount = suspensions.filter((s) => s.type === "administrative").length;

  return (
    <>
      <PageBanner
        title="Current Suspension List"
        subtitle="Active suspensions for WKA USA registered athletes. All suspensions must be cleared before competition."
      />

      {/* Info Banner */}
      <section className="bg-yellow-50 border-b border-yellow-200">
        <div className="container-custom py-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <strong>Important:</strong> Athletes on the suspension list may not compete in any WKA USA sanctioned event
              until their suspension has been cleared. Medical clearance documentation must be submitted to the WKA USA
              home office prior to competition.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{suspensions.length}</div>
              <div className="text-sm text-gray-500">Total Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{medicalCount}</div>
              <div className="text-sm text-gray-500">Medical</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{conductCount}</div>
              <div className="text-sm text-gray-500">Conduct</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600">{adminCount}</div>
              <div className="text-sm text-gray-500">Administrative</div>
            </div>
          </div>
        </div>
      </section>

      {/* Suspensions Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Suspended Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Suspension Reason
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      End Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Event
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Event Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {suspensions.map((suspension) => (
                    <tr key={suspension.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {suspension.type === "conduct" || suspension.type === "administrative" ? (
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                          ) : (
                            <Shield className="h-5 w-5 text-yellow-500" />
                          )}
                          <span className="font-medium text-gray-900">{suspension.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={cn(
                            "badge",
                            durationBadgeStyles[suspension.duration as keyof typeof durationBadgeStyles] ||
                              "bg-gray-100 text-gray-800"
                          )}
                        >
                          {suspension.duration === "Indefinite" ? "Indefinite" : `${suspension.duration} Days`}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {suspension.reason}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {suspension.endDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {suspension.event}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {suspension.eventDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm">
            <div className="flex items-center gap-2">
              <span className="badge bg-yellow-100 text-yellow-800">30 Days</span>
              <span className="text-gray-500">Standard Medical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge bg-orange-100 text-orange-800">60 Days</span>
              <span className="text-gray-500">Extended Medical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge bg-red-100 text-red-800">90+ Days</span>
              <span className="text-gray-500">Long-term Medical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge bg-red-600 text-white">Indefinite</span>
              <span className="text-gray-500">Pending Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-3 text-center mb-8">Suspension Information</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-yellow-500" />
                  Medical Suspensions
                </h3>
                <p className="text-sm text-gray-600">
                  Medical suspensions are issued following competition as a precautionary measure. Standard medical
                  suspensions are 30 days. Extended suspensions (60-90 days) may be issued for knockouts or injuries.
                  Athletes must obtain medical clearance from a licensed physician before returning to competition.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Conduct Suspensions
                </h3>
                <p className="text-sm text-gray-600">
                  Conduct suspensions are issued for violations of WKA USA rules and regulations. These may include
                  unsportsmanlike behavior, rule violations, or other misconduct. Indefinite conduct suspensions require
                  review by the WKA USA disciplinary committee.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-wka-red" />
                  Clearing a Suspension
                </h3>
                <p className="text-sm text-gray-600">
                  To clear a suspension, athletes must submit required documentation to the WKA USA home office.
                  For medical suspensions, this includes a clearance form signed by a licensed physician.
                  Contact <a href="mailto:admin@wkausa.com" className="text-wka-red hover:underline">admin@wkausa.com</a> for
                  more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
