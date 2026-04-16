import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "How to Choose a Sober Living Home in West Palm Beach",
  description:
    "What to look for — and avoid — when choosing sober living in West Palm Beach. Questions to ask, red flags to watch for, and why management quality matters.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/blog/how-to-choose-sober-living-west-palm-beach",
  },
  openGraph: {
    title: "How to Choose a Sober Living Home in West Palm Beach",
    description:
      "7 things to look for, red flags to avoid, and questions to ask before choosing a sober living home in West Palm Beach, FL.",
    url: "https://oceanbreezerecoveryhousing.com/blog/how-to-choose-sober-living-west-palm-beach",
    type: "article",
    publishedTime: "2026-03-10",
  },
};

const checkmarks = [
  { title: "Live-in management", desc: "A manager who lives on-site — not one who checks in occasionally — is one of the most important quality signals. Live-in management means there's always someone accountable and someone you can reach at 2 AM when you're struggling." },
  { title: "Random drug screening", desc: "Random testing — not predictable scheduled tests — is the standard. Without it, the zero-tolerance policy becomes an honor system. Honor systems break down." },
  { title: "Employment requirement", desc: "Homes that require employment signal a commitment to real rehabilitation. When residents are working, the entire community is more stable: people are purposeful, financially stable, and less idle." },
  { title: "Clear, consistently enforced rules", desc: "Ask to see the written house rules before you commit. Rules that are vague, unenforced, or applied selectively create an unstable community. Consistent enforcement protects everyone." },
  { title: "FARR certification or active pursuit", desc: "The Florida Association of Recovery Residences (FARR) certifies homes that meet independently verified quality standards. It signals that the home takes accountability seriously." },
  { title: "Genuine peer community", desc: "Visit the home and, if possible, talk to current residents. Does the atmosphere feel supportive and engaged — or transient and disconnected? The people matter as much as the place." },
  { title: "Transparent, all-inclusive pricing", desc: "Quality homes tell you exactly what you'll pay and exactly what's included — in writing. Beware of homes with low advertised rates that add fees for utilities, supplies, or programming separately." },
];

const redFlags = [
  "No drug testing, or testing only on a predictable schedule",
  "Manager doesn't live on-site — just \"checks in\" periodically",
  "No employment requirement for residents",
  "Overcrowded — too many residents for the available space",
  "Vague or selectively enforced house rules",
  "No certifications and no plan to pursue any",
  "Reluctance to let you visit, tour, or speak with current residents",
  "No clear process for what happens when someone relapses",
  "Promises that sound too good — no rules, no requirements, maximum freedom",
  "Separate charges for utilities, supplies, or amenities not mentioned upfront",
];

const questionsToAsk = [
  "Does the manager live on-site full time? How available are they?",
  "How often is drug testing conducted — and is it random or scheduled?",
  "What happens when a resident tests positive or relapses?",
  "Is employment required? What happens if I don't have a job yet?",
  "What is included in the weekly rent? Are utilities, supplies, and internet covered?",
  "Is the home FARR-certified, or actively pursuing certification?",
  "How many beds are in the house? How many residents are currently there?",
  "Can I tour the home and meet some current residents before deciding?",
  "What are the total upfront costs — deposit, first week, any fees?",
  "How are disputes between residents handled?",
];

const tourChecklist = [
  "Is the home clean and well-maintained?",
  "Does the atmosphere feel calm and purposeful — or chaotic and tense?",
  "Are residents at home during the day when they should be working?",
  "Does the manager seem knowledgeable, caring, and present?",
  "Does the home feel like a community — or a crash pad?",
  "Are common areas accessible and functional?",
  "Is there space to decompress, work out, and cook a meal?",
];

const oceanBreezeChecks = [
  { label: "Live-in manager (Kevin Smith, 24/7)", value: "Yes" },
  { label: "Random drug screening", value: "Yes" },
  { label: "Employment required", value: "Yes" },
  { label: "All-inclusive pricing", value: "$275/week" },
  { label: "FARR certification", value: "Pursuing" },
  { label: "Small, genuine community", value: "8 beds" },
  { label: "Furnished rooms, utilities included", value: "Yes" },
  { label: "Workout equipment on-site", value: "Yes" },
];

const faqs = [
  {
    q: "Is FARR certification required by law in Florida?",
    a: "No. FARR certification is voluntary. However, it signals a home's commitment to meeting independently verified quality standards. Many outpatient programs and referral networks prefer or recommend FARR-certified homes because it's a reliable proxy for quality.",
  },
  {
    q: "What if I can't find steady employment right away?",
    a: "Most homes with an employment requirement allow a short window — often two to four weeks — for new residents to secure work. During that time, active job searching is expected. Ask the specific home about their policy. At Ocean Breeze, manager Kevin Smith can help residents navigate local job opportunities.",
  },
  {
    q: "Can I visit Ocean Breeze before making a decision?",
    a: "Yes. Call Kevin Smith at (561) 646-7097 to schedule a tour. We're happy to show you the home and answer any questions without pressure.",
  },
  {
    q: "What's the total cost to move in at Ocean Breeze?",
    a: "The total upfront cost at Ocean Breeze is $485: a $210 security deposit plus the first week's rent of $275, due on your first day. After that, rent is $275/week, all-inclusive — utilities, furnished room, workout equipment, and household supplies.",
  },
];

export default function HowToChooseSoberLivingPost() {
  return (
    <>
      <PageHero
        title="How to Choose a Sober Living Home in West Palm Beach"
        subtitle="The quality of your recovery environment matters. Here's how to evaluate it."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "How to Choose a Sober Living Home" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-10 text-gray-600 leading-relaxed">

          <p className="text-lg">
            Not all sober living homes are equal. In a recovery market as large and varied as
            South Florida&apos;s, the difference between a home that supports your recovery and one
            that sets you back can be enormous. This guide walks you through exactly what to look
            for — and what to avoid — when choosing sober living in West Palm Beach.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Your Choice of Sober Living Matters</h2>
            <p className="mb-4">
              Your choice of sober living isn&apos;t just about finding a place to sleep. Research
              on recovery housing consistently shows that environment quality has a significant impact
              on long-term sobriety outcomes. A well-run home with strong accountability structures,
              genuine peer community, and live-in management dramatically improves the odds of
              sustained recovery.
            </p>
            <p>
              A poorly run home — one with no enforcement, no accountability, and residents who
              are actively using — can do real damage. Many people in early recovery relapse not
              because of personal failure, but because their environment set them up to fail.
              Choosing wisely is one of the most important things you can do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7 Things to Look For in a Sober Living Home</h2>
            <div className="space-y-6">
              {checkmarks.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: "#0D9488" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h2>
            <p className="mb-4">
              Some warning signs are obvious; others are easy to miss when you&apos;re in a hurry
              to find housing. Watch out for any of the following:
            </p>
            <ul className="space-y-2">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-2 text-sm">
                  <svg
                    className="h-5 w-5 mt-0.5 shrink-0 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {flag}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions to Ask Before You Commit</h2>
            <p className="mb-4">
              A quality sober living home will welcome your questions and answer them directly.
              Evasiveness or defensiveness is itself a red flag. Here are the questions worth asking:
            </p>
            <ol className="space-y-3">
              {questionsToAsk.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#0D9488" }}
                  >
                    {i + 1}.
                  </span>
                  {q}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Look for on a Tour</h2>
            <p className="mb-4">
              Always visit a home before committing, if at all possible. What you observe in
              person tells you things that no website or phone call can. During a tour, check for:
            </p>
            <ul className="space-y-2">
              {tourChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <svg
                    className="h-5 w-5 mt-0.5 shrink-0"
                    style={{ color: "#0D9488" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              Trust your gut. If something feels off during a tour — tense atmosphere, evasive
              staff, residents who seem disconnected — that&apos;s information worth taking seriously.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding FARR Certification</h2>
            <p className="mb-4">
              The Florida Association of Recovery Residences (FARR) is Florida&apos;s state affiliate
              of the National Alliance for Recovery Residences (NARR). FARR sets quality standards
              for recovery housing and certifies homes that meet those standards through a formal
              inspection and review process.
            </p>
            <p className="mb-4">
              FARR certification is voluntary — it&apos;s not legally required to operate a sober
              living home in Florida. But its value is precisely because it&apos;s voluntary: a
              home that pursues and maintains certification is signaling a commitment to
              accountability and quality that goes beyond the minimum.
            </p>
            <p>
              When comparing homes, give meaningful weight to FARR certification or to homes
              actively working toward it. It means someone external to the home has evaluated
              its practices and found them to meet a defined quality standard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of Community Size</h2>
            <p className="mb-4">
              Larger sober living homes — 20, 30, or more residents — can feel impersonal and
              institutional. It&apos;s easier to hide in a large house, and the peer support dynamic
              that makes sober living powerful can get diluted.
            </p>
            <p>
              Smaller homes foster genuine relationships. When there are 8 people in a house,
              everyone knows everyone. You can&apos;t disappear when you&apos;re struggling —
              someone will notice. That&apos;s the kind of accountability that actually moves the
              needle in recovery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Ocean Breeze Recovery Housing Measures Up</h2>
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "#99f6e4" }}
            >
              <div className="p-4" style={{ backgroundColor: "#f0fdfa" }}>
                <h3 className="font-bold text-gray-900">Ocean Breeze Recovery Housing — Quick Evaluation</h3>
                <p className="text-sm text-gray-600 mt-1">Men&apos;s sober living in West Palm Beach, FL</p>
              </div>
              <div className="divide-y divide-gray-100">
                {oceanBreezeChecks.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-4 py-3 bg-white">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#0D9488" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm">
              Ocean Breeze is a men&apos;s-only home, which means the community is focused. There
              are no mixed-gender dynamics to navigate in early recovery. Residents are working,
              accountable, and genuinely invested in each other&apos;s success.
            </p>
            <p className="mt-3 text-sm">
              Read more about what to expect day-to-day in our{" "}
              <Link
                href="/blog/what-to-expect-sober-living"
                className="font-medium underline"
                style={{ color: "#0D9488" }}
              >
                complete guide to life in sober living
              </Link>
              , or see how our pricing compares in our{" "}
              <Link
                href="/blog/sober-living-cost-west-palm-beach"
                className="font-medium underline"
                style={{ color: "#0D9488" }}
              >
                2026 cost breakdown
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((item) => (
                <div key={item.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div
            className="rounded-2xl p-8 border mt-4"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Tour Ocean Breeze?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Ocean Breeze Recovery Housing is a men&apos;s sober living home in West Palm Beach,
              FL — $275/week, all-inclusive, with live-in manager Kevin Smith available 24/7.
              We welcome tours and questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white text-sm rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#0d9488" }}
              >
                Apply Now
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
        title="Questions About Sober Living at Ocean Breeze?"
        subtitle="Kevin Smith is available 24/7. No pressure — just a real conversation."
        showPhone={true}
      />
    </>
  );
}
