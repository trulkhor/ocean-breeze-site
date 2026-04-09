import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "linear-gradient(135deg, #0D9488 0%, #0f766e 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="text-teal-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            {breadcrumb.map((item, i) => (
              <span key={i}>
                <span className="mx-2">/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-white">{item.label}</Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-teal-100 text-xl max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
