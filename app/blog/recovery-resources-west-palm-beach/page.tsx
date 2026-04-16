import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Recovery Resources in West Palm Beach, FL [2026]",
  description:
    "Guide to AA meetings, NA meetings, IOP programs, mental health services, and sober community resources in West Palm Beach and Palm Beach County.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/blog/recovery-resources-west-palm-beach",
  },
  openGraph: {
    title: "Recovery Resources in West Palm Beach, FL [2026]",
    description:
      "AA, NA, IOP, mental health services, and sober community resources in West Palm Beach and Palm Beach County.",
    url: "https://oceanbreezerecoveryhousing.com/blog/recovery-resources-west-palm-beach",
    type: "article",
    publishedTime: "2026-03-28",
  },
};

const meetingTypes = [
  {
    name: "Alcoholics Anonymous (AA)",
    desc: "Palm Beach County has a robust AA community with meetings available every day of the week throughout West Palm Beach and surrounding areas. The Palm Beach County Central Office of AA maintains an up-to-date meeting schedule. Many meetings in South Florida are specifically formatted for young adults, men only, newcomers, or specific professions — if one meeting doesn't feel like a fit, try another.",
    link: { label: "aa.org — find a meeting", href: "https://www.aa.org" },
  },
  {
    name: "Narcotics Anonymous (NA)",
    desc: "NA follows a similar model to AA and has a strong presence in Palm Beach County. The NA meeting finder at na.org lets you search by city, day, and time. There are also newcomer-specific meetings designed for people just starting their recovery journey who want a gentler introduction.",
    link: { label: "na.org — find a meeting", href: "https://www.na.org" },
  },
  {
    name: "Al-Anon & Alateen",
    desc: "For family members and loved ones of people struggling with addiction. Al-Anon and Alateen groups meet regularly throughout Palm Beach County and provide a space to process the impact of a loved one's addiction — separate from, but complementary to, the addicted person's own recovery work.",
    link: { label: "al-anon.org", href: "https://al-anon.org" },
  },
  {
    name: "SMART Recovery",
    desc: "SMART Recovery is a science-based, secular alternative to 12-step programs. It uses cognitive-behavioral techniques and is grounded in evidence-based addiction medicine rather than spirituality. A good option for those who want a different approach or who want to supplement 12-step work with a cognitive framework.",
    link: { label: "smartrecovery.org", href: "https://www.smartrecovery.org" },
  },
];

const crisisResources = [
  { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988", href: "https://988lifeline.org" },
  { name: "SAMHSA National Helpline", detail: "1-800-662-4357 — free, confidential, 24/7", href: "https://www.samhsa.gov/find-help/national-helpline" },
  { name: "Crisis Text Line", detail: "Text HOME to 741741", href: "https://www.crisistextline.org" },
  { name: "FARR Florida Sober Homes", detail: "farrinc.org — find certified sober homes", href: "https://www.farrinc.org" },
  { name: "Treatment Locator (SAMHSA)", detail: "findtreatment.gov — find local programs", href: "https://findtreatment.gov" },
  { name: "Palm Beach County Behavioral Health", detail: "Local behavioral health resources", href: "https://pbhealth.org" },
];

const onlineResources = [
  { name: "In The Rooms", desc: "Free online AA, NA, and other 12-step meetings for any time zone or circumstance.", href: "https://www.intherooms.com" },
  { name: "SMART Recovery Online", desc: "Online meetings for those who prefer a secular, evidence-based recovery approach.", href: "https://www.smartrecovery.org/community/meetings" },
  { name: "Sober Grid", desc: "A social network and support community specifically for people in recovery.", href: "https://www.sobergrid.com" },
  { name: "WEconnect", desc: "A sobriety tracker and accountability app with peer community features.", href: "https://weconnectrecovery.com" },
];

const faqs = [
  {
    q: "Are AA and NA meetings free?",
    a: "Yes. All AA and NA meetings are free to attend. There is typically a voluntary collection — a dollar or two — to cover meeting costs like rent and literature, but it is never required. No one is turned away for lack of funds.",
  },
  {
    q: "What is the difference between IOP and PHP?",
    a: "An Intensive Outpatient Program (IOP) typically meets 3 to 5 days per week for 3 hours per session — you live at home (or in sober living) and attend during the day or evening. A Partial Hospitalization Program (PHP) is more intensive, often 5 to 6 hours per day, and is typically the step-down from residential treatment before IOP. Your level of care should be determined by a clinical assessment.",
  },
  {
    q: "Does insurance cover outpatient treatment in West Palm Beach?",
    a: "Most health insurance plans, including Medicaid and Medicare, cover at least some outpatient treatment services like IOP and PHP. Coverage varies significantly by plan. Call your insurance provider directly, or use SAMHSA's treatment locator (findtreatment.gov) to find programs that accept your insurance.",
  },
  {
    q: "Can I attend AA or NA meetings while living in sober living?",
    a: "Absolutely — and it's strongly encouraged. At Ocean Breeze Recovery Housing, residents are encouraged to build a recovery support network that includes regular meeting attendance. Manager Kevin Smith can help connect new residents with local meetings that are a good fit.",
  },
  {
    q: "What if I need mental health support in addition to addiction treatment?",
    a: "Co-occurring mental health and substance use disorders are extremely common — this is sometimes called dual diagnosis. Treatment that addresses both simultaneously leads to better outcomes than treating either in isolation. Seek out providers who specialize in dual diagnosis. SAMHSA's national helpline (1-800-662-4357) can help you find dual diagnosis treatment providers in Palm Beach County.",
  },
];

export default function RecoveryResourcesWPBPost() {
  return (
    <>
      <PageHero
        title="Recovery Resources in West Palm Beach, FL [2026]"
        subtitle="A practical guide to the support ecosystem available in Palm Beach County."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "Recovery Resources in West Palm Beach" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-10 text-gray-600 leading-relaxed">

          <p className="text-lg">
            Recovery is never a solo effort. Research consistently shows that people with stronger
            support networks have better long-term outcomes than those who try to go it alone.
            Fortunately, West Palm Beach and Palm Beach County offer a rich ecosystem of recovery
            support — 12-step meetings, outpatient programs, mental health services, sober living
            options, and community resources. This guide is a starting point for finding what
            you need.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12-Step Meetings in West Palm Beach</h2>
            <p className="mb-6">
              12-step programs are the most widely available form of ongoing recovery support in
              Palm Beach County. Meetings are free, widely available, and proven to support
              long-term sobriety when used consistently.
            </p>
            <div className="space-y-6">
              {meetingTypes.map((type) => (
                <div key={type.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-sm mb-3">{type.desc}</p>
                  <a
                    href={type.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium underline"
                    style={{ color: "#0D9488" }}
                  >
                    {type.link.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outpatient Treatment Programs</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">What Is an IOP?</h3>
            <p className="mb-4">
              An Intensive Outpatient Program (IOP) involves structured group therapy, individual
              counseling, and psychoeducation — typically 3 to 5 days per week, 3 hours per session.
              It&apos;s designed for people who need more support than weekly therapy but don&apos;t
              require around-the-clock residential care.
            </p>
            <p className="mb-6">
              IOPs and sober living work extremely well together. Many Ocean Breeze residents attend
              IOP during their stay — getting structured clinical support during the day while
              returning to a peer recovery community each evening. Manager Kevin Smith has connections
              to local outpatient programs and can help new residents find the right fit.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">What Is PHP?</h3>
            <p className="mb-6">
              A Partial Hospitalization Program (PHP) is more intensive than IOP — typically
              5 to 6 hours per day, 5 days per week. PHP is often the clinical step-down after
              residential treatment and before IOP. It provides near-daily structure and clinical
              support while allowing you to live in a community setting rather than a facility.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Finding Outpatient Treatment in West Palm Beach</h3>
            <p className="mb-4">
              SAMHSA&apos;s treatment locator at{" "}
              <a
                href="https://findtreatment.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline"
                style={{ color: "#0D9488" }}
              >
                findtreatment.gov
              </a>{" "}
              allows you to search for certified programs by location, type of service, payment
              accepted, and population served. Florida&apos;s statewide substance abuse helpline
              (1-800-662-4357) can also provide referrals to local programs.
            </p>
            <p>
              When evaluating outpatient programs, ask about their experience with the specific
              substances you&apos;ve been using, their approach to co-occurring mental health
              conditions, and what the typical length of treatment is.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mental Health and Counseling</h2>
            <p className="mb-4">
              Addiction and mental health are deeply connected. The majority of people with
              substance use disorders also have at least one co-occurring mental health condition
              — depression, anxiety, PTSD, ADHD, and bipolar disorder are among the most common.
              Treating both simultaneously — known as dual diagnosis or integrated treatment —
              leads to significantly better outcomes than addressing either in isolation.
            </p>
            <p className="mb-4">
              West Palm Beach and Palm Beach County have therapists, counselors, and psychiatrists
              who specialize in addiction and co-occurring disorders. The Palm Beach County
              Behavioral Health Coalition maintains a directory of local providers. SAMHSA&apos;s
              national helpline (1-800-662-4357) can also connect you with local mental health
              resources.
            </p>
            <p>
              For those without insurance or with limited ability to pay, community mental health
              centers often offer sliding-scale fees based on income. Don&apos;t assume that
              mental health support is out of reach financially — there are often more options
              than people realize.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sober Living as Part of the Recovery Ecosystem
            </h2>
            <p className="mb-4">
              Sober living is most effective when it&apos;s part of a broader recovery plan —
              not a standalone solution. The homes that produce the best outcomes are ones where
              residents are also doing the work: attending meetings, working with a sponsor,
              engaging in outpatient treatment, maintaining employment, and building genuine
              relationships with others in recovery.
            </p>

            <div
              className="rounded-2xl p-6 border my-6"
              style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
            >
              <h3 className="font-bold text-gray-900 mb-4">The Recovery Ecosystem in Practice</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  { element: "Sober living", role: "Stable, substance-free housing with peer accountability" },
                  { element: "AA / NA meetings", role: "Free, daily community support and sponsorship" },
                  { element: "IOP / PHP", role: "Structured clinical support and group therapy" },
                  { element: "Individual therapy", role: "Address underlying trauma, mental health, and patterns" },
                  { element: "Employment", role: "Structure, income, purpose, and social connection" },
                  { element: "Sponsor / 12-step work", role: "One-on-one accountability and guided recovery" },
                ].map((item) => (
                  <div key={item.element} className="flex items-start gap-2">
                    <svg
                      className="h-4 w-4 mt-0.5 shrink-0"
                      style={{ color: "#0D9488" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{item.element}:</span>{" "}
                      <span className="text-gray-600">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Ocean Breeze Recovery Housing is one piece of that ecosystem. Learn more about what
              life looks like in sober living in our{" "}
              <Link
                href="/blog/what-to-expect-sober-living"
                className="font-medium underline"
                style={{ color: "#0D9488" }}
              >
                complete guide to what to expect in sober living
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Faith-Based Recovery Resources</h2>
            <p className="mb-4">
              Faith communities play a meaningful role in recovery for many people. South Florida
              has numerous churches, synagogues, and religious organizations that actively support
              people in recovery. Among the most accessible options:
            </p>
            <ul className="space-y-3">
              {[
                { title: "Celebrate Recovery", desc: "A Christ-centered 12-step program offered in many area churches. Open to anyone struggling with any &ldquo;hurt, habit, or hang-up&rdquo; — not just substance use." },
                { title: "Jewish Family and Community Services of the Palm Beaches", desc: "Provides counseling, case management, and support services for individuals and families, regardless of religious affiliation." },
                { title: "Local church recovery ministries", desc: "Many West Palm Beach churches run dedicated addiction recovery ministries. A quick search for recovery ministries in your neighborhood will surface options close to you." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-sm">
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
                  <div>
                    <span className="font-semibold text-gray-800">{item.title}:</span>{" "}
                    <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Online and App-Based Support</h2>
            <p className="mb-4">
              In-person meetings and face-to-face community are irreplaceable — but online and
              app-based resources can supplement your recovery support, especially on travel days,
              late nights, or during gaps in your schedule:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {onlineResources.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all"
                >
                  <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                  <span className="text-gray-500 text-xs mt-1 leading-relaxed">{r.desc}</span>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Crisis Resources</h2>
            <p className="mb-4">
              If you or someone you know is in immediate crisis — whether from substances, mental
              health, or thoughts of self-harm — help is available right now:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {crisisResources.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all"
                >
                  <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                  <span className="text-gray-500 text-xs mt-1">{r.detail}</span>
                </a>
              ))}
            </div>
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
              Looking for Sober Living in West Palm Beach?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Ocean Breeze Recovery Housing is a men&apos;s sober living home in West Palm Beach,
              FL. $275/week, all-inclusive. Live-in manager Kevin Smith has deep connections to
              the local recovery community and can help you navigate resources in the area.
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
        title="Ready to Start Your Recovery in West Palm Beach?"
        subtitle="Ocean Breeze Recovery Housing. Men's sober living. $275/week, all-inclusive."
        showPhone={true}
      />
    </>
  );
}
