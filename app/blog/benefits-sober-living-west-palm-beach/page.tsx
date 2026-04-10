import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "5 Benefits of Sober Living in West Palm Beach, FL [2026]",
  description:
    "Discover why West Palm Beach is one of the best places for sober living in Florida. Strong recovery community, year-round sunshine, affordable homes, and real job opportunities.",
  alternates: {
    canonical:
      "https://oceanbreezerecoveryhousing.com/blog/benefits-sober-living-west-palm-beach",
  },
  openGraph: {
    title: "5 Benefits of Sober Living in West Palm Beach, FL [2026]",
    description:
      "Why West Palm Beach is one of the top destinations for sober living in Florida — recovery community, active lifestyle, affordable housing, and more.",
    url: "https://oceanbreezerecoveryhousing.com/blog/benefits-sober-living-west-palm-beach",
    type: "article",
    publishedTime: "2026-04-10",
    authors: ["Ocean Breeze Recovery Housing"],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Benefits of Sober Living in West Palm Beach, FL",
    description:
      "Why West Palm Beach is one of the best places for men's sober living in Florida.",
  },
};

export default function BenefitsSoberLivingWestPalmBeachPost() {
  return (
    <>
      <PageHero
        title="5 Benefits of Sober Living in West Palm Beach, FL"
        subtitle="Why West Palm Beach has become one of the top recovery destinations in Florida — and what that means for your sobriety."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "Benefits of Sober Living in West Palm Beach" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <p className="text-lg">
            If you&apos;re exploring sober living homes in West Palm Beach, you&apos;ve already made
            a powerful decision. Choosing <em>where</em> to recover matters just as much as choosing{" "}
            <em>to</em> recover — and West Palm Beach, FL has become one of the most sought-after
            destinations for men in early sobriety. Here are five reasons why.
          </p>

          {/* Benefit 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. A Recovery Community That Actually Shows Up
            </h2>
            <p className="mb-4">
              West Palm Beach has one of the strongest recovery communities in the entire country.
              Palm Beach County is home to hundreds of AA and NA meetings every single week, along
              with SMART Recovery groups, faith-based programs, and alumni networks from nearby
              treatment centers.
            </p>
            <p className="mb-4">
              When you live in a sober living home here, you&apos;re never far from a meeting, a
              sponsor, or a fellow man in recovery. That accessibility matters — especially in the
              first 90 days when staying connected can make or break your sobriety.
            </p>
            <p>
              At Ocean Breeze Recovery Housing, our residents regularly attend local meetings and
              build relationships that extend well beyond their time in the house.
            </p>
          </section>

          {/* Benefit 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Year-Round Weather That Supports an Active Lifestyle
            </h2>
            <p className="mb-4">
              Recovery isn&apos;t just about avoiding substances — it&apos;s about building a life
              worth living. West Palm Beach averages 230 sunny days per year, which means outdoor
              activities are available year-round: morning walks, beach workouts, cycling, fishing,
              and pickup sports.
            </p>
            <p className="mb-4">
              Physical activity is one of the most effective tools in early recovery. It reduces
              anxiety, improves sleep, and provides healthy structure. Living in South Florida removes
              the seasonal barriers that make staying active difficult in northern states.
            </p>
            <div
              className="rounded-xl p-5 border my-6"
              style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
            >
              <p className="text-sm font-semibold text-gray-900 mb-1">At Ocean Breeze</p>
              <p className="text-sm text-gray-700">
                We provide on-site workout equipment so residents can stay active without a gym
                membership — one less barrier between you and a healthy routine.
              </p>
            </div>
          </section>

          {/* Benefit 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Affordable Sober Living Without Sacrificing Quality
            </h2>
            <p className="mb-4">
              Compared to sober living homes in Miami, Fort Lauderdale, or Delray Beach, West Palm
              Beach offers strong value. Weekly rates here typically range from $200 to $400, and
              many homes include utilities and furnishings.
            </p>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#f0fdfa" }}>
                    <th className="text-left p-4 font-semibold text-gray-900">What&apos;s Included</th>
                    <th className="text-left p-4 font-semibold" style={{ color: "#0d9488" }}>
                      Ocean Breeze ($275/wk)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Furnished room", included: true },
                    { item: "Electricity & water", included: true },
                    { item: "WiFi", included: true },
                    { item: "Household supplies", included: true },
                    { item: "Workout equipment", included: true },
                    { item: "24/7 live-in manager", included: true },
                    { item: "Random drug screening", included: true },
                  ].map((row, i) => (
                    <tr
                      key={row.item}
                      className={`border-t border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}
                    >
                      <td className="p-4 text-gray-700">{row.item}</td>
                      <td className="p-4">
                        <svg
                          className="h-5 w-5"
                          style={{ color: "#0d9488" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-label="Included"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              The move-in cost is just <strong>$485 total</strong> — a $210 deposit plus the first
              week&apos;s rent of $275. Affordability matters in early recovery because financial
              stress is a leading relapse trigger. When your housing costs are predictable and
              reasonable, you can focus on building your new life instead of worrying about bills.
            </p>
          </section>

          {/* Benefit 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Strong Employment Opportunities for Men in Recovery
            </h2>
            <p className="mb-4">
              West Palm Beach has a growing job market across construction, hospitality, healthcare,
              retail, and skilled trades. For men in early recovery who need to find work quickly,
              that economic activity translates to real opportunity.
            </p>
            <p className="mb-4">
              Employment is a requirement at Ocean Breeze — not as a punishment, but because working
              provides daily structure, financial independence, and a sense of purpose. Most of our
              residents find employment within their first two weeks.
            </p>
            <p>
              The West Palm Beach area also has recovery-friendly employers who understand the value
              of hiring men in early sobriety. Kevin Smith, our live-in manager, helps residents
              connect with local job resources and navigate the employment process.
            </p>
          </section>

          {/* Benefit 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Structure and Accountability in a Homelike Setting
            </h2>
            <p className="mb-4">
              The best sober living homes combine clear expectations with genuine comfort. In West
              Palm Beach, you&apos;ll find homes that feel like real houses — not institutions. That
              distinction matters for long-term recovery because it teaches you how to live a normal,
              sober life in a real-world environment.
            </p>
            <p className="mb-4">
              At Ocean Breeze, the house rules exist to protect the community: zero tolerance for
              drugs and alcohol, random drug screening, employment requirement, respect for
              housemates, and participation in household responsibilities. Within those boundaries,
              residents have the autonomy to build their own daily rhythms.
            </p>
            <div
              className="rounded-xl p-5 border my-6"
              style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
            >
              <p className="text-sm font-semibold text-gray-900 mb-1">Small by Design</p>
              <p className="text-sm text-gray-700">
                Our home at 700 38th St in West Palm Beach is an 8-bed residence with a live-in
                manager available 24/7. The small size is intentional — it creates real
                accountability and genuine relationships between housemates.
              </p>
            </div>
          </section>

          {/* Why Not Anywhere */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Not Just Move Anywhere?
            </h2>
            <p className="mb-4">
              Recovery outcomes improve when the environment actively supports sobriety. West Palm
              Beach offers a rare combination: a deep recovery network, an active outdoor lifestyle,
              affordable housing, real job opportunities, and a community of men who understand what
              you&apos;re going through.
            </p>
            <p>
              Not every city offers that. And not every sober living home delivers on its promises.
              When choosing where to recover, look for a home with a live-in manager, transparent
              pricing, clear house rules, and a commitment to accountability.
            </p>
          </section>

          {/* CTA Box */}
          <div
            className="rounded-2xl p-8 border mt-6"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Start Your Recovery in West Palm Beach?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Ocean Breeze Recovery Housing is accepting applications. $275/week all-inclusive, 24/7
              live-in manager, and a community of men committed to sobriety. Call Kevin Smith or
              apply online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white text-sm rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#F97316" }}
              >
                Check Availability
              </Link>
              <a
                href="tel:5616467097"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-full border-2 transition-all hover:bg-teal-50"
                style={{ borderColor: "#0d9488", color: "#0d9488" }}
              >
                Call (561) 646-7097
              </a>
            </div>
          </div>
        </div>
      </article>

      <ContactCTA
        title="Considering Sober Living in West Palm Beach?"
        subtitle="Men's sober living at $275/week, all-inclusive. 24/7 live-in manager. Apply today."
        showPhone={true}
      />
    </>
  );
}
