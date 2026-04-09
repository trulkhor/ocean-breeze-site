import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Amenities & Pricing | Affordable Sober Living West Palm Beach",
  description:
    "Transparent pricing for men's sober living in West Palm Beach. $275/week includes furnished rooms, utilities, workout equipment, and 24/7 manager support.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/amenities",
  },
};

const amenities = [
  {
    category: "Housing & Comfort",
    items: [
      { name: "Fully Furnished Rooms", desc: "Bed, dresser, and basic furniture included. Move in with just your belongings." },
      { name: "Clean, Safe Environment", desc: "Well-maintained home with regular cleaning of common areas." },
      { name: "Private and Double Rooms", desc: "Choose a single or double room depending on availability and preference." },
      { name: "Secure Property", desc: "A safe and secure environment where residents can feel at home." },
    ],
  },
  {
    category: "Utilities & Supplies",
    items: [
      { name: "Electricity Included", desc: "No utility bills. Electric is covered in your weekly rent." },
      { name: "Water & Sewer", desc: "Water is fully included — no limits, no extra charges." },
      { name: "Internet Access", desc: "Wi-Fi is provided so you can job search, stay connected, and access online resources." },
      { name: "Household Supplies", desc: "Toilet paper, soap, cleaning supplies, and basic household necessities are provided." },
    ],
  },
  {
    category: "Support & Structure",
    items: [
      { name: "24/7 Live-In Manager", desc: "Kevin Smith lives on-site and is available any hour of the day or night." },
      { name: "Structured Program", desc: "Employment requirements and drug screening create accountability and routine." },
      { name: "Recovery Guidance", desc: "Kevin provides mentorship, support, and connection to local recovery resources." },
      { name: "IOP Connections", desc: "Informal connections to local Intensive Outpatient Programs and treatment facilities." },
    ],
  },
  {
    category: "Health & Wellness",
    items: [
      { name: "On-Site Workout Equipment", desc: "Exercise is a proven tool in recovery. Access workout equipment right at home." },
      { name: "Drug-Free Environment", desc: "Zero tolerance for substances creates a safe space for everyone in the house." },
      { name: "Peer Community", desc: "Live alongside other men committed to sobriety — peer support is powerful." },
      { name: "Positive Culture", desc: "A culture of encouragement, accountability, and mutual respect." },
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Amenities & Pricing"
        subtitle="Transparent, all-inclusive pricing with no hidden fees. Here's exactly what you get at Ocean Breeze."
        breadcrumb={[{ label: "Amenities & Pricing" }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-20">

        {/* Pricing Card */}
        <section>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Simple, Honest Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Does It Cost?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8 text-center shadow-md text-white md:col-span-1 flex flex-col justify-center"
              style={{ backgroundColor: "#0d9488" }}
            >
              <div className="text-5xl font-bold mb-2">$275</div>
              <div className="text-teal-100 font-medium">Per Week</div>
              <div className="mt-4 text-teal-200 text-sm">Everything included</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Move-In Cost Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Security Deposit</span>
                  <span className="font-bold text-gray-900">$210</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">First Week&apos;s Rent</span>
                  <span className="font-bold text-gray-900">$275</span>
                </div>
                <div className="flex justify-between items-center py-2 pt-1">
                  <span className="font-semibold text-gray-900">Total Due at Move-In</span>
                  <span className="font-bold text-xl" style={{ color: "#0d9488" }}>$485</span>
                </div>
              </div>
              <div
                className="mt-5 p-4 rounded-xl text-sm"
                style={{ backgroundColor: "#f0fdfa" }}
              >
                <strong style={{ color: "#0f766e" }}>Payment Note:</strong>{" "}
                <span className="text-gray-600">
                  Ocean Breeze is private pay only. We do not accept insurance, Medicaid, or
                  Medicare. Rent is due weekly, every week.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Available Rooms
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Room Options
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We have 5 rooms total — 2 singles and 3 doubles — for a total of 8 beds.
              All rooms are furnished and include all utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{ backgroundColor: "#ccfbf1" }}
                aria-hidden="true"
              >
                🛏️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Single Room</h3>
              <p className="text-sm font-medium mb-3" style={{ color: "#0d9488" }}>
                2 Available
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A private room for one resident. Ideal for those who prefer their own space
                or have reached a stage in recovery where additional privacy supports their
                progress. Fully furnished with a bed, storage, and essential furniture.
              </p>
              <div className="text-lg font-bold" style={{ color: "#0d9488" }}>$275/week</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{ backgroundColor: "#ccfbf1" }}
                aria-hidden="true"
              >
                🛏️🛏️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Double Room</h3>
              <p className="text-sm font-medium mb-3" style={{ color: "#0d9488" }}>
                3 Available (6 Beds)
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A shared room for two residents. Doubles foster peer accountability and
                community, two of the most powerful tools in recovery. Roommates support
                each other and share the journey. Fully furnished with individual beds and
                storage space for each resident.
              </p>
              <div className="text-lg font-bold" style={{ color: "#0d9488" }}>$275/week per person</div>
            </div>
          </div>
        </section>

        {/* Full Amenities Grid */}
        <section>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Full Amenities List
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Included in Your Weekly Rent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <svg className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Included vs Not Included */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What&apos;s Included vs. Not Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Included ($275/week)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Furnished room (bed & storage)",
                  "Electricity",
                  "Water & sewer",
                  "Internet / Wi-Fi",
                  "Household supplies",
                  "Workout equipment access",
                  "24/7 manager support",
                  "Community & peer accountability",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: "#0d9488" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-6 border border-gray-200 bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Included
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Food & personal groceries",
                  "Personal hygiene products",
                  "Transportation",
                  "Cell phone / personal devices",
                  "Clothing",
                  "Prescription medications",
                  "Clinical treatment services",
                  "Insurance coverage",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gray-400">×</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>

      <ContactCTA title="Ready to Reserve Your Spot?" subtitle="Beds are limited. Contact Kevin Smith today to check availability and discuss your move-in date." showPhone={true} />
    </>
  );
}
