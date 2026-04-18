import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import ContactCTA from "@/components/ContactCTA";
import { blogPosts } from "@/app/lib/blog-posts";

export const metadata: Metadata = {
  title: "Recovery Resources Blog | Ocean Breeze Recovery Housing West Palm Beach",
  description:
    "Recovery resources, sober living guides, and information about men's recovery housing in West Palm Beach, FL. Articles from Ocean Breeze Recovery Housing.",
  alternates: {
    canonical: "https://www.oceanbreezerecoveryhousing.com/blog",
  },
  openGraph: {
    title: "Blog | Ocean Breeze Recovery Housing West Palm Beach",
    description:
      "Recovery resources, sober living guides, and what to expect from structured sober living in West Palm Beach, FL.",
    url: "https://www.oceanbreezerecoveryhousing.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recovery Resources Blog | Ocean Breeze Recovery Housing",
    description: "Recovery guides, sober living resources, and insights for men in West Palm Beach, FL.",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #0D9488 0%, #0f766e 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-teal-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Recovery Resources &amp; Blog</h1>
          <p className="text-teal-100 text-xl max-w-2xl">
            Guides, insights, and information to help you navigate recovery housing and make informed
            decisions about sober living in West Palm Beach, FL.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-20" style={{ backgroundColor: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Crisis &amp; Recovery Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "988 Suicide & Crisis Lifeline", desc: "Call or text 988", href: "https://988lifeline.org" },
              { name: "SAMHSA National Helpline", desc: "1-800-662-4357 (free, 24/7)", href: "https://www.samhsa.gov/find-help/national-helpline" },
              { name: "FARR — Florida Sober Homes", desc: "Certification & resources", href: "https://www.farrinc.org" },
              { name: "Alcoholics Anonymous", desc: "Find local meetings", href: "https://www.aa.org" },
              { name: "Narcotics Anonymous", desc: "Find local meetings", href: "https://www.na.org" },
              { name: "Palm Beach County Health", desc: "Local recovery services", href: "https://pbhealth.org" },
            ].map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all"
              >
                <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                <span className="text-gray-500 text-xs mt-1">{r.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Questions About Our Home?"
        subtitle="Our blog is here to educate, but nothing beats a real conversation. Call Kevin to discuss your situation."
      />
    </>
  );
}
