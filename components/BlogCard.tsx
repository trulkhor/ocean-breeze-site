import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category?: string;
}

export default function BlogCard({ slug, title, excerpt, date, readTime, category = "Recovery" }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Category bar */}
      <div className="h-1.5" style={{ backgroundColor: "#0D9488" }} />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "#0D9488" }}
          >
            {category}
          </span>
          <span className="text-xs text-gray-400">{readTime} read</span>
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug hover:text-teal-600 transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-gray-400" dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <Link
            href={`/blog/${slug}`}
            className="text-sm font-semibold flex items-center gap-1 transition-colors"
            style={{ color: "#0D9488" }}
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
