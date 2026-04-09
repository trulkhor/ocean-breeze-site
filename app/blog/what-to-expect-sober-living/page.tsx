import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "What to Expect in Sober Living: A Complete Guide",
  description:
    "New to sober living? Learn what to expect during your stay — rules, daily structure, community life, and how to make the most of your recovery journey.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/blog/what-to-expect-sober-living",
  },
};

export default function WhatToExpectPost() {
  return (
    <>
      <PageHero
        title="What to Expect in Sober Living: A Complete Guide"
        subtitle="Moving into sober living for the first time? Here's everything you need to know."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "What to Expect in Sober Living" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-8 text-gray-600 leading-relaxed">

          <p className="text-lg">
            Stepping into a sober living home for the first time can feel overwhelming — and
            that&apos;s completely normal. You&apos;re making one of the most important
            decisions of your life. Understanding what to expect can help you feel more
            prepared, more grounded, and more ready to make the most of this chapter in your
            recovery.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Day One: What Move-In Looks Like</h2>
            <p className="mb-4">
              On your first day, you&apos;ll typically meet the house manager, tour the property,
              review and sign the house rules agreement, and get settled into your room. At Ocean
              Breeze, manager Kevin Smith is on-site to welcome new residents personally.
            </p>
            <p className="mb-4">
              You&apos;ll bring your deposit and first week&apos;s rent, your ID, clothing,
              toiletries, and any prescription medications. Everything else is provided — your
              room is furnished, utilities are connected, and household supplies are stocked.
            </p>
            <p>
              The hardest part of day one is often the emotional weight of the transition. You
              may feel a mix of hope, anxiety, and uncertainty. That&apos;s okay. Most residents
              say that within a few days, they start to feel a sense of routine and belonging that
              makes sober living start to feel like home.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Structure in Sober Living</h2>
            <p className="mb-4">
              One of the defining features of quality sober living is structure. Unlike the chaos
              that often accompanies active addiction, sober living homes create predictable routines
              that help rewire the brain toward healthier patterns.
            </p>
            <p className="mb-4">
              A typical day in sober living might look like this:
            </p>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden my-6">
              <div className="grid grid-cols-[auto_1fr] text-sm">
                {[
                  { time: "Morning", activity: "Wake up, personal hygiene, breakfast — many residents use this time for meditation or prayer" },
                  { time: "Work / Job search", activity: "Employment is a requirement. Most residents commute to work or attend job interviews" },
                  { time: "Afternoon/Evening", activity: "Return home, dinner, household chores, recovery meetings, exercise" },
                  { time: "Evening", activity: "Connect with housemates, decompress, peer support conversations" },
                  { time: "Night", activity: "Personal time, sleep — curfews vary by house rules" },
                ].map((row, i) => (
                  <div key={i} className={`contents ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                    <div className={`p-4 font-medium text-gray-800 border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>{row.time}</div>
                    <div className={`p-4 text-gray-600 border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>{row.activity}</div>
                  </div>
                ))}
              </div>
            </div>
            <p>
              The key is that this structure isn&apos;t a prison — it&apos;s a scaffold. It gives
              you something to build on as you rebuild your life.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">House Rules: What to Expect</h2>
            <p className="mb-4">
              Every sober living home has house rules, and these exist for good reason. They protect
              all residents and maintain the integrity of the recovery environment. While rules
              vary by house, you can generally expect:
            </p>
            <ul className="space-y-2">
              {[
                "Zero tolerance for drugs and alcohol on the premises",
                "Weekly rent paid on time without exception",
                "Employment requirement — you must be working or actively job searching",
                "Respect for other residents' sleep schedules, belongings, and privacy",
                "Participation in chores and household maintenance",
                "Compliance with random drug and alcohol screening",
                "Curfews or check-in requirements (varies by house)",
                "No overnight guests without prior approval",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 shrink-0" style={{ color: "#0d9488" }}>•</span>
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              These rules might feel restrictive at first, especially if you&apos;re coming from a
              chaotic lifestyle. But most residents quickly come to appreciate the boundaries —
              because they create safety, predictability, and a fair environment for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Community Aspect</h2>
            <p className="mb-4">
              One of the most powerful — and often underestimated — parts of sober living is the
              community. Living alongside other men who are going through the same journey creates
              a peer support network unlike anything you can build alone.
            </p>
            <p className="mb-4">
              You&apos;ll share meals, share stories, and share the hard days. When someone
              is struggling, others rally around them. When someone hits a milestone, the house
              celebrates together. This kind of peer accountability and mutual encouragement is
              a cornerstone of why sober living works.
            </p>
            <p>
              At Ocean Breeze, this community dynamic is intentional. With only 8 beds, it&apos;s
              a small, tight-knit group — not a revolving door. You get to know your housemates
              and build real relationships.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Employment and Accountability</h2>
            <p className="mb-4">
              Work isn&apos;t just about paying rent. Research consistently shows that employment
              is one of the strongest predictors of long-term recovery success. When you have a
              job, you have structure, purpose, income, social connection, and self-worth — all
              things that support sobriety.
            </p>
            <p>
              Most sober living homes require employment or active job searching because the
              alternative — idle time with limited money — is a recipe for relapse. If you
              don&apos;t have a job when you move in, you&apos;re expected to be actively
              applying and interviewing until you do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Drug Testing</h2>
            <p className="mb-4">
              Expect random drug and alcohol testing. At Ocean Breeze, this is a non-negotiable
              part of living in the house. Testing is random — you won&apos;t know when it&apos;s
              coming — and the results affect your continued residency.
            </p>
            <p>
              For residents who are genuinely committed to sobriety, testing isn&apos;t something
              to fear — it&apos;s something to lean on. It takes away the internal debate and
              replaces it with external accountability. Many residents say they&apos;re actually
              grateful for the screening because it makes saying no to substances easier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your Recovery Support System</h2>
            <p className="mb-4">
              Sober living is most effective when paired with a broader recovery support system.
              Most residents engage with at least some of the following:
            </p>
            <ul className="space-y-2">
              {[
                "AA or NA meetings — free, widely available, and powerful for community and accountability",
                "Outpatient therapy or counseling — individual sessions to work through underlying issues",
                "Intensive Outpatient Programs (IOP) — structured group therapy several times a week",
                "Sponsorship and 12-step work — a one-on-one accountability relationship",
                "Faith communities — for those whose recovery includes a spiritual component",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 shrink-0" style={{ color: "#0d9488" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Manager Kevin Smith at Ocean Breeze has connections to local IOP programs and can
              help residents navigate the recovery landscape in West Palm Beach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Should You Stay?</h2>
            <p className="mb-4">
              There&apos;s no single right answer, but research suggests that longer stays in
              sober living correlate with better long-term outcomes. Most addiction counselors
              recommend staying in a structured living environment for at least <strong>6 to 12
              months</strong> after completing treatment — and many people benefit from staying
              even longer.
            </p>
            <p className="mb-4">
              The decision about when to leave should be based on honest self-assessment, not
              impatience. Ask yourself: Do I have stable employment? A support network? A solid
              recovery foundation? A plan for where I&apos;m going? If the answers are yes,
              you may be ready to transition to independent living.
            </p>
            <p>
              At Ocean Breeze, there is no fixed length of stay. Residents can remain as long as
              they&apos;re in compliance with house rules, maintaining sobriety, and current on
              rent.
            </p>
          </section>

          <div
            className="rounded-2xl p-8 border mt-10"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Learn More About Ocean Breeze?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Ocean Breeze Recovery Housing offers men&apos;s sober living in West Palm Beach for
              $275/week, all-inclusive. Live-in manager Kevin Smith is available 24/7 to support
              your recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white text-sm rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#0d9488" }}
              >
                Apply Now
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-full border-2 transition-all hover:bg-teal-50"
                style={{ borderColor: "#0d9488", color: "#0d9488" }}
              >
                Read the FAQ
              </Link>
            </div>
          </div>

        </div>
      </article>

      <ContactCTA
        title="Questions About Sober Living at Ocean Breeze?"
        subtitle="Kevin Smith is available 24/7. Call, text, or apply online today."
        showPhone={true}
      />
    </>
  );
}
