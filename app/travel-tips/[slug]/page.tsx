import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import { ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="pt-20">
        <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-ink/20" />
        </div>

        <div className="container-site -mt-24 relative pb-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg shadow-ink/10 sm:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                  {article.category}
                </span>
                <span className="text-xs uppercase tracking-widest text-ink/40">
                  {article.readTime}
                </span>
              </div>
              <h1 className="heading-lg mt-5">{article.title}</h1>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/70">
                {article.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 border-t border-ink/10 pt-8">
                <Link
                  href="/travel-tips"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-brand transition-colors hover:text-brand-dark"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M11 6l-6 6 6 6" />
                  </svg>
                  Back to Travel Tips
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="font-heading text-2xl">Keep Reading</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/travel-tips/${a.slug}`}
                    className="group rounded-xl bg-white p-5 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand">
                      {a.category}
                    </p>
                    <p className="mt-2 font-heading text-base leading-snug transition-colors group-hover:text-brand">
                      {a.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
