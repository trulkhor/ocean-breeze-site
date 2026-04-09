import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Sober Living vs Halfway House: What's the Difference?",
  description:
    "Confused about sober living vs halfway houses? We break down the key differences in cost, structure, requirements, and who each is best for.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/blog/sober-living-vs-halfway-house",
  },
};

export default function SoberLivingVsHalfwayHousePost() {
  return (
    <>
      <PageHero
        title="Sober Living vs Halfway House: What's the Difference?"
        subtitle="Understanding your housing options in recovery — and which one is right for you."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "Sober Living vs Halfway House" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-8 text-gray-600 leading-relaxed">

          <p className="text-lg">
            When people search for sober housing, they often encounter two terms: <em>sober living
            home</em> and <em>halfway house</em>. While these terms are sometimes used
            interchangeably, they refer to meaningfully different types of housing. Understanding
            the difference can help you — or someone you love — make the right choice for
            recovery.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Halfway House?</h2>
            <p className="mb-4">
              A halfway house is typically a government-funded or nonprofit transitional housing
              facility designed to help people reintegrate into society after incarceration or
              the completion of a residential treatment program. The term &quot;halfway&quot;
              reflects its role as a midpoint — between institutional living and full independence.
            </p>
            <p className="mb-4">
              Halfway houses are often mandated by the court system or parole boards, meaning
              residency may not be a voluntary choice. Funding typically comes from the government,
              which means the cost to residents is low or zero — but so are the amenities.
            </p>
            <p>
              Halfway houses tend to have more rigid rules, fewer amenities, and larger populations
              of residents with more complex legal or criminal justice backgrounds. Length of stay
              is often determined by the court or program administrators, not by the resident.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Sober Living Home?</h2>
            <p className="mb-4">
              A sober living home (also called a sober living house or recovery residence) is a
              privately operated, substance-free housing option for people in recovery from
              addiction. Unlike halfway houses, sober living is voluntary — residents choose to
              be there because they want a structured, supportive environment as they build their
              sober life.
            </p>
            <p className="mb-4">
              Sober living homes are funded by the residents themselves through weekly or monthly
              rent. This creates a different dynamic: residents have a financial stake in their
              recovery environment, and the home operates more like a community than an institution.
            </p>
            <p>
              Quality sober living homes set expectations around sobriety, employment, and house
              rules — but residents generally have more autonomy than in a halfway house or
              residential treatment setting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Differences: Sober Living vs Halfway House</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#f0fdfa" }}>
                    <th className="text-left p-4 font-semibold text-gray-900 w-1/3">Category</th>
                    <th className="text-left p-4 font-semibold" style={{ color: "#0d9488" }}>Sober Living Home</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Halfway House</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Funding", sl: "Private pay (residents)", hw: "Government / nonprofit" },
                    { cat: "Cost", sl: "$200–$500/week", hw: "Low cost or free" },
                    { cat: "Voluntary?", sl: "Yes — always voluntary", hw: "Often court-mandated" },
                    { cat: "Who it serves", sl: "Anyone in recovery", hw: "Often justice-involved individuals" },
                    { cat: "Amenities", sl: "Varies — often furnished", hw: "Often minimal" },
                    { cat: "Length of stay", sl: "Resident-determined", hw: "Often program/court-determined" },
                    { cat: "Employment req.", sl: "Often required", hw: "Varies" },
                    { cat: "Drug testing", sl: "Yes — random screening", hw: "Yes — typically strict" },
                    { cat: "Oversight", sl: "On-site manager or owner", hw: "Program staff or officers" },
                  ].map((row, i) => (
                    <tr key={row.cat} className={`border-t border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="p-4 font-medium text-gray-800">{row.cat}</td>
                      <td className="p-4 text-gray-700">{row.sl}</td>
                      <td className="p-4 text-gray-600">{row.hw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Each</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Sober Living Homes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
              >
                <p className="font-semibold text-gray-900 mb-2" style={{ color: "#0f766e" }}>Pros</p>
                <ul className="space-y-1 text-sm">
                  {[
                    "Voluntary — you're there by choice",
                    "More autonomy and independence",
                    "Often better amenities",
                    "Community of peers in recovery",
                    "Flexible length of stay",
                    "Employment helps you build financial stability",
                  ].map((p) => <li key={p} className="flex items-start gap-1"><span style={{ color: "#0d9488" }}>+</span> {p}</li>)}
                </ul>
              </div>
              <div className="rounded-xl p-5 bg-gray-50 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Cons</p>
                <ul className="space-y-1 text-sm">
                  {[
                    "Costs money (private pay)",
                    "Must meet eligibility requirements",
                    "No clinical services on-site",
                    "Quality varies widely",
                  ].map((p) => <li key={p} className="flex items-start gap-1"><span className="text-gray-400">−</span> {p}</li>)}
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Halfway Houses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
              >
                <p className="font-semibold mb-2" style={{ color: "#0f766e" }}>Pros</p>
                <ul className="space-y-1 text-sm">
                  {[
                    "Low cost or free",
                    "May be required by courts",
                    "Structured oversight",
                    "Accessible for justice-involved individuals",
                  ].map((p) => <li key={p} className="flex items-start gap-1"><span style={{ color: "#0d9488" }}>+</span> {p}</li>)}
                </ul>
              </div>
              <div className="rounded-xl p-5 bg-gray-50 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Cons</p>
                <ul className="space-y-1 text-sm">
                  {[
                    "Often mandatory — less autonomy",
                    "Fewer amenities",
                    "May mix populations with different needs",
                    "Limited resident choice",
                    "Stigma can be a barrier to openness",
                  ].map((p) => <li key={p} className="flex items-start gap-1"><span className="text-gray-400">−</span> {p}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is a Good Fit for Sober Living?</h2>
            <p className="mb-4">
              Sober living is ideal for men who:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Have completed inpatient or residential treatment and need a structured transition",
                "Are serious about sobriety and want to live among others with the same commitment",
                "Are employed or ready to work — and can afford weekly rent",
                "Want more autonomy than a treatment setting, but more structure than living alone",
                "Are not court-mandated and are choosing recovery voluntarily",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <svg className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Ocean Breeze Recovery Housing Fits In
            </h2>
            <p className="mb-4">
              Ocean Breeze Recovery Housing is a private, men&apos;s sober living home in West Palm
              Beach, FL. It is not a halfway house. Residents choose to live here voluntarily
              because they want a structured, supportive, substance-free environment to grow their
              recovery.
            </p>
            <p className="mb-4">
              At $275/week — with utilities, furnished rooms, workout equipment, house supplies,
              and 24/7 access to live-in manager Kevin Smith — Ocean Breeze offers genuine value
              in the West Palm Beach recovery housing market.
            </p>
            <p>
              If you&apos;re a man who is serious about his sobriety, has employment or is actively
              seeking it, and wants to live in a community of men with the same commitment, Ocean
              Breeze may be exactly what you&apos;re looking for.
            </p>
          </section>

          <div
            className="rounded-2xl p-8 border mt-6"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Questions?</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Not sure if sober living is right for you? Browse our FAQ or reach out to Kevin
              Smith directly. He&apos;s happy to talk through your options without any pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white text-sm rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#0d9488" }}
              >
                Read the FAQ
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-full border-2 transition-all hover:bg-teal-50"
                style={{ borderColor: "#0d9488", color: "#0d9488" }}
              >
                Apply to Ocean Breeze
              </Link>
            </div>
          </div>

        </div>
      </article>

      <ContactCTA
        title="Interested in Sober Living at Ocean Breeze?"
        subtitle="Men's sober living in West Palm Beach. $275/week, all-inclusive. Apply today."
        showPhone={true}
      />
    </>
  );
}
