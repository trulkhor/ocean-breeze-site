import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "How Much Does Sober Living Cost in West Palm Beach? [2026 Guide]",
  description:
    "Complete guide to sober living costs in West Palm Beach, FL. Average prices, what's included, and how Ocean Breeze compares at $275/week.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/blog/sober-living-cost-west-palm-beach",
  },
};

export default function SoberLivingCostPost() {
  return (
    <>
      <PageHero
        title="How Much Does Sober Living Cost in West Palm Beach? [2026 Guide]"
        subtitle="A practical, honest breakdown of sober living costs in the West Palm Beach area."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "Sober Living Costs in West Palm Beach" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="prose prose-gray max-w-none">

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            If you or someone you love is looking for sober living in West Palm Beach, Florida,
            one of the first questions is usually: <em>what does it cost?</em> This guide gives
            you a straightforward breakdown of what to expect — typical price ranges, what&apos;s
            usually included, factors that affect cost, and how Ocean Breeze Recovery Housing
            fits into the picture.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Average Sober Living Costs in West Palm Beach
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sober living costs in the West Palm Beach and greater Palm Beach County area
            generally range from <strong>$200 to $500 per week</strong>, depending on the type
            of facility, the level of amenities, and how much structure the program offers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&apos;s a rough breakdown of what you can expect at different price points:
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#f0fdfa" }}>
                  <th className="text-left p-4 font-semibold text-gray-900">Price Range</th>
                  <th className="text-left p-4 font-semibold text-gray-900">What to Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-medium text-gray-800">$150–$200/week</td>
                  <td className="p-4 text-gray-600">Basic accommodation, limited amenities, minimal structure. May be overcrowded.</td>
                </tr>
                <tr className="border-t border-gray-100" style={{ backgroundColor: "#f9fafb" }}>
                  <td className="p-4 font-medium text-gray-800">$200–$300/week</td>
                  <td className="p-4 text-gray-600">Furnished rooms, utilities included, basic amenities, some structure. Good value range.</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-medium text-gray-800">$300–$400/week</td>
                  <td className="p-4 text-gray-600">More amenities, more oversight, often more private rooms and additional programming.</td>
                </tr>
                <tr className="border-t border-gray-100" style={{ backgroundColor: "#f9fafb" }}>
                  <td className="p-4 font-medium text-gray-800">$400–$500+/week</td>
                  <td className="p-4 text-gray-600">Premium facilities, private rooms, intensive programming, clinical support on-site.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Affects the Cost of Sober Living?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Several factors drive the price of sober living in West Palm Beach:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              { title: "Location", desc: "Properties closer to the beach or in more affluent neighborhoods tend to cost more." },
              { title: "Amenities", desc: "Homes that include workout equipment, furnished rooms, internet, and household supplies can charge more than bare-bones options." },
              { title: "Level of structure", desc: "Homes with 24/7 on-site managers, accountability programs, and drug testing generally cost more than honor-system arrangements." },
              { title: "Room type", desc: "Private (single) rooms cost more than shared (double) rooms." },
              { title: "Certification", desc: "FARR-certified homes often charge a premium because they meet verified quality standards." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600"><strong className="text-gray-800">{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What&apos;s Typically Included in Sober Living Rent?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The best sober living homes in West Palm Beach will include most or all of the
            following in their weekly rent:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Furnished room (bed, dresser, basic furniture)",
              "Utilities — electricity, water, internet",
              "Common area access (kitchen, living room)",
              "On-site management or supervision",
              "Basic household supplies",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-600">
                <span style={{ color: "#0d9488" }}>✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8">
            Be cautious of homes that advertise low weekly rates but add hidden charges for
            utilities, supplies, or access to common areas. Always ask for a full breakdown
            of what&apos;s included before committing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Ocean Breeze Recovery Housing: $275/Week, All-In
          </h2>
          <div
            className="rounded-2xl p-8 my-6 border"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">What You Get at Ocean Breeze</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Fully furnished room",
                "All utilities included",
                "Internet / Wi-Fi",
                "Household supplies",
                "On-site workout equipment",
                "24/7 live-in manager (Kevin Smith)",
                "Structured recovery program",
                "Community of men in recovery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span style={{ color: "#0d9488" }}>✓</span> {item}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-teal-100 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold" style={{ color: "#0d9488" }}>$275/week</div>
                <div className="text-sm text-gray-500">+ $210 deposit at move-in</div>
              </div>
              <Link
                href="/admissions"
                className="px-5 py-2.5 font-semibold text-white text-sm rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#0d9488" }}
              >
                Apply Now
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Private Pay vs. Insurance for Sober Living
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most sober living homes in Florida, including Ocean Breeze, are <strong>private pay
            only</strong>. This means residents pay out of pocket — insurance does not typically
            cover sober living costs the way it might cover clinical treatment like detox or
            residential rehab.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Some people use their health insurance to cover clinical services (like outpatient
            therapy or IOP) while paying for sober living separately. If cost is a concern,
            check with any outpatient programs you&apos;re attending to see if they offer
            financial assistance or can connect you with subsidized housing resources.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to Afford Sober Living
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The employment requirement at homes like Ocean Breeze is actually designed to help
            residents afford their stay. When you&apos;re working, even part-time, you can
            typically cover $275/week. Here are a few other strategies:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Ask family members if they can help with the first month while you get established",
              "Look for entry-level jobs with flexible hours near your sober living location",
              "Check if your county has any transitional housing vouchers or assistance programs",
              "Some treatment alumni associations offer small grants for sober living costs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600">
                <span className="mt-1 shrink-0" style={{ color: "#0d9488" }}>→</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the cheapest sober living in West Palm Beach?",
                a: "Costs vary widely. The most affordable options typically run $200–$250/week but may offer fewer amenities and less structure. Be sure to evaluate what's included before choosing based on price alone. Ocean Breeze at $275/week includes all utilities and supplies, making it very competitive.",
              },
              {
                q: "Can I use my insurance to pay for sober living?",
                a: "No. Most sober living homes, including Ocean Breeze, are private pay only. Health insurance does not typically cover sober living room and board. However, insurance may cover clinical services you receive separately (therapy, IOP, etc.).",
              },
              {
                q: "Is there a deposit required?",
                a: "Yes. Ocean Breeze requires a $210 security deposit plus the first week's rent ($275) at move-in, totaling $485 due on your first day.",
              },
              {
                q: "Are utilities included in sober living?",
                a: "At Ocean Breeze, yes — electricity, water, and internet are all included in the $275/week rent. Always confirm what's included when evaluating any sober living home.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

        </div>
      </article>

      <ContactCTA
        title="Ready to Check Availability at Ocean Breeze?"
        subtitle="$275/week, all-inclusive. Call or apply online today."
        showPhone={true}
      />
    </>
  );
}
