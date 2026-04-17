import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/app/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `https://oceanbreezerecoveryhousing.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let idx = 0;

  while (idx < lines.length) {
    const line = lines[idx];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={idx}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      const text = line.slice(2, -2);
      elements.push(
        <p key={idx} className="font-bold text-gray-900 mt-4 mb-2">
          {text}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (idx < lines.length && lines[idx].startsWith("- ")) {
        listItems.push(lines[idx].replace("- ", ""));
        idx++;
      }
      elements.push(
        <ul key={`ul-${idx}`} className="list-disc list-inside space-y-2 my-4 text-gray-700">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() !== "") {
      // Process inline **bold**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const renderedParts = parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
          {renderedParts}
        </p>
      );
    }

    idx++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `https://oceanbreezerecoveryhousing.com/blog/${post.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oceanbreezerecoveryhousing.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://oceanbreezerecoveryhousing.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://oceanbreezerecoveryhousing.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ocean Breeze Recovery Housing",
      url: "https://oceanbreezerecoveryhousing.com",
    },
    datePublished: post.date,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Article Header */}
      <header
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #0D9488 0%, #0f766e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-teal-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium truncate max-w-xs" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "#F97316" }}
            >
              {post.category}
            </span>
            <span className="text-teal-200 text-sm">{post.readTime} read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-teal-100 text-lg leading-relaxed mb-6 max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-teal-200">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2 prose-lg" aria-label={post.title}>
            <div className="text-gray-700">
              {post.content ? renderContent(post.content) : (
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              )}
            </div>

            {/* Article Footer CTA */}
            <div
              className="mt-12 rounded-2xl p-6 border"
              style={{ backgroundColor: "#F0FDF4", borderColor: "#86EFAC" }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ready to Learn More About Ocean Breeze?
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Ocean Breeze Recovery Housing is a men&apos;s sober living home in West Palm Beach,
                FL. $275/week, fully furnished, 24/7 live-in manager. Pursuing FARR certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "#F97316" }}
                >
                  Check Availability
                </Link>
                <a
                  href="tel:5616467097"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-sm border border-gray-200 text-gray-700 transition-all hover:bg-gray-50"
                >
                  Call (561) 646-7097
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0" aria-label="More articles">
            <div className="sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">More Articles</h2>
              <div className="space-y-4">
                {otherPosts.map((related) => (
                  <div
                    key={related.slug}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                  >
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white mb-2 inline-block"
                      style={{ backgroundColor: "#0D9488" }}
                    >
                      {related.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="hover:text-teal-600 transition-colors"
                      >
                        {related.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1 mt-2 text-xs font-semibold"
                      style={{ color: "#0D9488" }}
                    >
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #0D9488, #065f46)" }}
              >
                <h3 className="font-bold mb-2 text-sm">Questions?</h3>
                <p className="text-teal-100 text-xs mb-3">
                  Call Kevin Smith directly to ask about availability.
                </p>
                <a
                  href="tel:5616467097"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg font-semibold text-teal-800 bg-white text-sm transition-all hover:bg-teal-50"
                >
                  (561) 646-7097
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: "#0D9488" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Articles
        </Link>
      </div>

      <ContactCTA />
    </>
  );
}
