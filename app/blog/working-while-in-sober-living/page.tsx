import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Working While in Sober Living: Why Employment Is Required (and Why It Works)",
  description:
    "Can you work while living in a sober living home? At reputable homes, employment isn't just allowed — it's required. Here's why work is central to recovery, how to find a job quickly after treatment, and how to balance employment with recovery activities.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/blog/working-while-in-sober-living",
  },
};

export default function WorkingWhileInSoberLivingPost() {
  return (
    <>
      <PageHero
        title="Working While in Sober Living: Why Employment Is Required (and Why It Works)"
        subtitle="At quality sober living homes, the question isn't whether you can work — it's when you start."
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: "Working While in Sober Living" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="prose prose-gray max-w-none">

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            A common question from people considering sober living — and from their families —
            is whether it&apos;s okay to work while in a sober living home. The short answer:
            at any quality sober living home, not only is it okay — it&apos;s required.
            Employment is one of the core pillars of recovery-oriented housing, not an optional
            add-on. This guide explains why, how to find work quickly after treatment, and how
            to balance a job with your recovery commitments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Employment Is Required — Not Optional
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you walk away with one thing from this article, make it this: the employment
            requirement at sober living homes is not a financial policy. It&apos;s a recovery
            policy. The requirement exists because employment is directly correlated with
            better recovery outcomes — and because idle time in early sobriety is one of the
            most reliable predictors of relapse.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&apos;s why having a job matters so much in early recovery:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              { title: "Structure", desc: "Work imposes a schedule. You have to be somewhere at a specific time, which organizes the rest of your day. Structure is one of the most protective factors in early recovery — and employment provides it automatically." },
              { title: "Identity", desc: "Addiction often strips people of their identity outside of the substance. Having a role — even a basic one — is a building block for a new self-concept that isn't defined by addiction." },
              { title: "Financial stability", desc: "Paying your own rent builds self-worth and reduces dependence on family members who may be burned out from years of enabling. Financial stability also reduces stress, which is a major relapse trigger." },
              { title: "Accountability", desc: "When you have somewhere to be, you have a reason to stay sober. Calling in sick because you used isn't a distant abstraction — it has immediate, concrete consequences." },
              { title: "Reduction of idle time", desc: "The phrase in recovery circles is \"idle hands.\" Long stretches of unstructured time in early sobriety are a risk. Work fills those hours with something meaningful." },
              { title: "Social connection", desc: "Coworkers are often the first non-recovery relationships people rebuild. Even a simple working relationship with people who don't know your history is part of rebuilding a normal life." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-800">{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What &quot;Employed&quot; Means at a Sober Living Home
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Employment requirements vary slightly by home. At Ocean Breeze Recovery Housing,
            residents are required to be employed. This means actively working — not
            just job searching. For people arriving directly from residential treatment,
            there is typically a reasonable grace period (often 2–4 weeks) to find work.
            During that window, active and documented job searching is expected.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            &quot;Employed&quot; doesn&apos;t necessarily mean full-time. It doesn&apos;t
            mean a career job. What matters is consistent effort and income. Common situations
            that qualify:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Part-time or full-time hourly employment (restaurant, retail, warehouse, service work)",
              "Gig-economy work (DoorDash, Uber Eats, Instacart) — especially useful early on",
              "Temp agency work through a staffing firm",
              "Self-employment or freelance work with verifiable income",
              "Vocational training or paid apprenticeship programs",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-600">
                <span style={{ color: "#0d9488" }}>✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8">
            What doesn&apos;t qualify: not working and not actively searching, or being
            &quot;between jobs&quot; indefinitely without a clear plan. If something changes —
            you lose a job, a gig dries up — the expectation is that you communicate with your
            house manager immediately and have a plan within days, not weeks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to Find a Job Quickly After Treatment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            People often feel anxious about job searching after a gap in employment — especially
            when that gap involves treatment. Here&apos;s what actually works:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                num: "1",
                title: "Start with industries that hire fast",
                desc: "Food service, hospitality, warehousing, and retail are among the fastest-hiring sectors. They often pay daily or weekly, which is helpful in early recovery when cash flow matters. Don't overthink the first job — the goal is to get employed, build routine, and grow from there.",
              },
              {
                num: "2",
                title: "Use a staffing agency",
                desc: "Staffing firms like Labor Ready, Manpower, or local agencies can often place you within days. You show up, fill out paperwork, and get sent on assignments. This is an underused resource for people in early recovery.",
              },
              {
                num: "3",
                title: "Be honest — but strategic — about gaps",
                desc: "You don't have to disclose treatment. Most employers don't legally ask. If asked about gaps, \"I took time off for a medical matter that's resolved\" is both accurate and appropriate. The exception: some recovery-friendly employers actively recruit people in recovery. If you're applying to one of these, being upfront is an asset.",
              },
              {
                num: "4",
                title: "Leverage your recovery network",
                desc: "AA and NA meetings are full of people with jobs who hire from within the recovery community. Before you even start the formal job search, ask at your meeting: does anyone know of work? You'll be surprised.",
              },
              {
                num: "5",
                title: "Keep it simple at first",
                desc: "This is not the time to find your dream job. That comes later. The first job is about structure, income, and building a track record. Reliability at a basic job opens doors to better jobs. Stay humble about where you start.",
              },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5">
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: "#0d9488" }}
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Balancing Work With Recovery Activities
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A real concern: when you add work to the demands of early recovery — meetings,
            therapy, step work, house responsibilities — the schedule gets full. Here&apos;s
            how to think about it:
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Recovery meetings are widely available at almost every hour of the day in West Palm
            Beach and Palm Beach County. AA and NA meetings run at 6 a.m. and at midnight.
            If you work days, attend evening meetings. If you work nights, go to morning meetings.
            The meetings exist to fit around life — not the other way around.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A realistic weekly schedule for someone in early sober living:
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#f0fdfa" }}>
                  <th className="text-left p-4 font-semibold text-gray-900">Time</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Activity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6:00–7:00 am", "Wake up, breakfast, morning routine"],
                  ["7:00 am–3:00 pm", "Work (example: warehouse or service shift)"],
                  ["3:30–5:00 pm", "Decompress, gym or workout equipment"],
                  ["6:00–7:30 pm", "AA/NA meeting (3–4x per week)"],
                  ["7:30–9:00 pm", "Dinner, step work, call sponsor"],
                  ["9:00–10:30 pm", "House time, wind down"],
                ].map(([time, activity]) => (
                  <tr key={time} className="border-t border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800 whitespace-nowrap">{time}</td>
                    <td className="p-4 text-gray-600">{activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            This is one example — not a prescription. The point is that work and recovery
            activities can coexist. In fact, residents almost universally report that having
            more structure (not less) makes recovery easier, not harder.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Happens If You Lose Your Job?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jobs are lost. Shifts get cut. Temp assignments end. This is normal life,
            and quality sober living homes understand that. What matters is how you handle it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The right move, always, is to tell your house manager immediately and have a plan.
            &quot;I lost my job today. I&apos;m going to apply to three places tomorrow and
            check in with a staffing agency by Friday&quot; is a very different conversation
            than disappearing for two weeks and hoping no one notices the rent isn&apos;t
            coming.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Ocean Breeze, Kevin Smith is invested in residents&apos; success. A job loss
            isn&apos;t an automatic problem — it&apos;s a situation to work through together.
            The key is transparency and immediate action, not hiding and hoping.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Building a Career, Not Just a Job
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            One of the remarkable things that happens in sober living — when residents stay long
            enough — is that the job situation evolves. The man who arrived working warehouse
            shifts is, eight months later, in a supervisory role. The man who started washing
            dishes is running a kitchen.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Sobriety compounds. Reliability at work builds reputation. Reputation leads to
            opportunity. This is one of the most underrated aspects of what sober living provides:
            the time and stability to let a career actually begin to take shape, rather than
            constantly starting over.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How soon after moving in do I need to be working?",
                a: "At Ocean Breeze, residents are expected to be employed. If you're arriving from residential treatment without a job, there's a grace period to find work — typically a few weeks. During that time, active job searching is expected. Talk with Kevin on move-in day about your specific situation.",
              },
              {
                q: "What if my disability or condition prevents me from working?",
                a: "Homes handle this differently. If you have a documented disability, SSI/SSDI income, or another legitimate income source, talk to the house manager before moving in. The spirit of the employment requirement is financial stability and structured purpose — those can sometimes be met other ways.",
              },
              {
                q: "Can I work night shifts?",
                a: "Generally yes, as long as your schedule is stable and you're meeting your recovery commitments. Night shifts can make meetings harder (but not impossible — morning meetings exist for this reason). Communicate your schedule with your house manager so expectations are clear.",
              },
              {
                q: "What if my job requires travel overnight?",
                a: "Frequent overnight travel in the first 90 days is generally not a good idea — you lose the structure and accountability that sober living provides. After you've established a strong foundation, occasional overnight travel may be manageable. This is a conversation to have with your house manager.",
              },
              {
                q: "What about school — does that count as employment?",
                a: "Full-time school programs may be considered in lieu of employment at some homes, particularly if combined with part-time income. Check with the specific home — at Ocean Breeze, reach out to Kevin before assuming school satisfies the employment requirement.",
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
        title="Ask Us About Ocean Breeze"
        subtitle="Men&apos;s sober living in West Palm Beach. $275/week. Employment required — and supported."
        showPhone={true}
      />
    </>
  );
}
