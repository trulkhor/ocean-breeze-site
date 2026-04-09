import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Cost of Sober Living in West Palm Beach: 2025 Complete Pricing Guide",
  description:
    "How much does sober living cost in West Palm Beach, FL? Weekly rates range from $175–$500+. Learn what affects pricing, what's included, and how to find quality affordable sober living.",
  openGraph: {
    title: "Cost of Sober Living in West Palm Beach (2025 Guide)",
    description:
      "Complete pricing breakdown for sober living homes in West Palm Beach, FL. Weekly rates, move-in fees, what's included, and tips for finding affordable structured housing.",
    url: "https://www.oceanbreezerecoveryhousing.com/blog/cost-of-sober-living-west-palm-beach",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The True Cost of Sober Living in West Palm Beach: A Complete Pricing Guide",
  description:
    "A comprehensive guide to sober living costs in West Palm Beach, FL, covering weekly rates, move-in fees, what affects pricing, and how to find quality affordable housing.",
  author: {
    "@type": "Organization",
    name: "Ocean Breeze Recovery Housing",
  },
  publisher: {
    "@type": "Organization",
    name: "Ocean Breeze Recovery Housing",
    url: "https://www.oceanbreezerecoveryhousing.com",
  },
  datePublished: "2025-03-15",
  url: "https://www.oceanbreezerecoveryhousing.com/blog/cost-of-sober-living-west-palm-beach",
};

export default function CostGuidePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #0D9488 0%, #0f766e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-teal-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Cost of Sober Living</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20">Cost &amp; Pricing</span>
            <span className="text-teal-200 text-sm">8 min read &bull; March 15, 2025</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The True Cost of Sober Living in West Palm Beach: A Complete Pricing Guide
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              If you or someone you love is looking at sober living options in West Palm Beach, one of the
              first questions is always: <em>how much does it cost?</em> The answer varies widely, and
              understanding why can help you find the right fit without overpaying or landing somewhere
              that doesn&apos;t actually support recovery.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This guide covers the full pricing landscape for sober living in West Palm Beach and Palm
              Beach County — typical weekly rates, move-in costs, what affects pricing, and what value
              looks like at different price points.
            </p>

            {/* Quick Summary Box */}
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ backgroundColor: "#F0FDF9", borderColor: "#0D9488" }}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Summary</h2>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Low end:</strong> $175–$225/week (minimal structure, often crowded)</li>
                <li><strong>Mid-range:</strong> $250–$350/week (structured, includes utilities — most common)</li>
                <li><strong>Higher end:</strong> $400–$600+/week (luxury amenities or clinical services)</li>
                <li><strong>Move-in fees:</strong> typically $150–$300 on top of first week&apos;s rent</li>
                <li><strong>What to look for:</strong> live-in manager, included utilities, employment requirements, drug screening</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">West Palm Beach Sober Living: The Pricing Landscape</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              West Palm Beach — and Palm Beach County broadly — is home to one of the most concentrated
              recovery communities in the United States. This is partly a function of geography (warm
              climate, beautiful environment) and partly a result of the area&apos;s long history with
              substance abuse treatment. That concentration of need has produced a wide variety of
              recovery housing options, at a wide range of price points.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The honest range for sober living in this area in 2025 is roughly <strong>$175 to $500+
              per week</strong>. Here&apos;s how to think about what you get at each level.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Tier: $175–$225/week</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At the lower end of the market, you&apos;ll typically find homes with minimal structure,
              little or no management oversight, and crowded conditions. These homes may lack consistent
              drug testing, have no employment requirement, and operate essentially as cheap rooming houses
              that happen to be labeled &quot;sober living.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Budget homes may not include utilities, meaning you could pay $200/week plus your share
              of electric, water, and internet. That can add $50–$100/month per person in Florida, where
              summer AC costs are real. Always ask whether utilities are included.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Risk factor:</strong> Research consistently shows that unstructured sober living
              environments have lower sobriety success rates. The cheapest option is often not the most
              cost-effective choice when you factor in the cost of relapse.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Mid-Range: $250–$350/week</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The mid-range is where most quality sober living homes operate. At this price point you
              should expect: a live-in or regularly present manager, included utilities, furnished rooms,
              consistent drug screening, and some form of community structure — whether that&apos;s house
              meetings, chores, or meeting attendance requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ocean Breeze Recovery Housing operates in this range at <strong>$275/week all-inclusive</strong>
              — utilities, supplies, workout equipment, and a live-in manager are all included. This
              tier represents the best value for most men in early recovery.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium &amp; Luxury: $400–$600+/week</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Higher-priced sober living homes in South Florida typically offer additional amenities:
              pool access, larger private rooms, dietary/meal preparation, on-site counseling or
              case management, transportation services, or closer proximity to the beach.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Some homes in this range also include clinical services or are attached to treatment
              programs. If you need clinical support (therapy, medication management, intensive
              outpatient), the premium cost may be justified. If you are stable in early recovery and
              primarily need structure and accountability, the mid-range offers everything you need.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Affects Sober Living Pricing?</h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  factor: "Management Quality",
                  detail:
                    "Homes with live-in managers or daily oversight cost more to operate and typically charge more. This is usually money well spent — management quality is one of the strongest predictors of outcomes.",
                },
                {
                  factor: "What&apos;s Included",
                  detail:
                    "All-inclusive pricing (utilities, supplies, internet, amenities) typically means a higher stated rate but often lower total cost than homes that charge separately. Always calculate your all-in cost.",
                },
                {
                  factor: "Room Type",
                  detail:
                    "Private single rooms typically cost more than shared doubles. Some homes charge the same rate regardless of room type — ask specifically.",
                },
                {
                  factor: "Location",
                  detail:
                    "Homes closer to the beach or in more affluent neighborhoods charge more. Proximity to downtown West Palm Beach, public transit, and employment corridors can actually be more valuable for most residents.",
                },
                {
                  factor: "Amenities",
                  detail:
                    "Pools, gyms, private bathrooms, and other amenities add cost. Basic fitness equipment at $275/week beats no fitness option at $350/week with a pool.",
                },
                {
                  factor: "Certification",
                  detail:
                    "FARR-certified homes have demonstrated compliance with standards. Certification isn&apos;t everything, but it provides a baseline assurance of quality.",
                },
              ].map((item) => (
                <div key={item.factor} className="flex gap-4 p-4 rounded-xl bg-gray-50">
                  <div
                    className="w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#0D9488" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h4
                      className="font-bold text-gray-900 mb-1"
                      dangerouslySetInnerHTML={{ __html: item.factor }}
                    />
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.detail }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Move-In Fees: What to Expect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Almost all sober living homes charge a move-in fee in addition to your first week&apos;s rent.
              In West Palm Beach, move-in fees typically range from <strong>$150 to $350</strong>. Some
              homes call this a &quot;move-in fee,&quot; &quot;community fee,&quot; &quot;application fee,&quot; or &quot;administrative fee.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Ocean Breeze, the move-in fee is <strong>$210</strong>, plus your first week&apos;s rent of
              $275, for a <strong>total of $485 to move in</strong>. After that, you pay $275 per week on
              the same day each week.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Be wary of homes that charge large move-in fees (&quot;security deposits&quot;) of $500 or more
              without clear policies on how and when those funds are returned.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Evaluate Value (Not Just Price)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When comparing sober living options, don&apos;t just compare weekly rates. Ask these questions:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                "Is there a live-in manager or is the property managed remotely?",
                "Are utilities included in the weekly rate?",
                "Is random drug screening conducted?",
                "Is employment required?",
                "What is the capacity? How many people share each bathroom?",
                "What happens if a resident relapses?",
                "Is the home pursuing or does it hold FARR certification?",
                "Can you tour the property before committing?",
                "What are the exact house rules? Are they written?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#0D9488" }} aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {q}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Assistance for Sober Living</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sober living is a private pay expense in most cases. However, there are ways to manage
              the cost:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4">
              <li>Family support is the most common funding source for early recovery housing</li>
              <li>Some employers offer Employee Assistance Programs (EAP) that cover recovery-related expenses</li>
              <li>Social Security benefits can sometimes be used for sober living costs</li>
              <li>Some treatment centers have relationships with sober living homes that include scholarship beds</li>
              <li>Work quickly — having income from employment within the first weeks dramatically stabilizes the financial picture</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quality sober living in West Palm Beach doesn&apos;t have to be expensive. A well-run home
              at $275–$325/week with all utilities included, a live-in manager, and clear accountability
              structures is a tremendous value compared to the cost of continued active addiction or
              re-treatment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>Ocean Breeze Recovery Housing</strong>, we offer exactly that — $275/week,
              all-inclusive, with a live-in manager, furnished rooms, workout equipment, and a structured
              environment built for men who are serious about their recovery.
            </p>

            {/* CTA box */}
            <div
              className="rounded-2xl p-8 text-white mt-10"
              style={{ background: "linear-gradient(135deg, #0D9488, #065f46)" }}
            >
              <h3 className="text-xl font-bold mb-2">Interested in Ocean Breeze?</h3>
              <p className="text-teal-100 mb-4">
                $275/week all-inclusive. $485 total to move in. Available in West Palm Beach, FL.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#F97316" }}
                >
                  Check Availability
                </Link>
                <a
                  href="tel:5616467097"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-teal-800 bg-white transition-all hover:bg-teal-50"
                >
                  Call (561) 646-7097
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/what-to-expect-sober-living"
                className="p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all"
              >
                <p className="font-semibold text-gray-900 text-sm">What to Expect in Your First Month at Sober Living &rarr;</p>
              </Link>
              <Link
                href="/blog/sober-living-vs-halfway-house"
                className="p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all"
              >
                <p className="font-semibold text-gray-900 text-sm">Sober Living vs. Halfway House: Key Differences &rarr;</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}
