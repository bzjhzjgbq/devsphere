import { Link, useParams } from "react-router-dom";
import MarkdownRenderer from "../components/article/MarkdownRenderer";
import PageContainer from "../components/layout/PageContainer";
import PageReveal from "../components/motion/PageReveal";
import Reveal from "../components/motion/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import { articles } from "../data/mockArticles";

const articlesKey = "darksec-local-articles";

function Icon({ path, className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function IconBadge({ children, tone = "slate", className = "" }) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    teal: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
    sky: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
    slate: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  };

  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-xl ${tones[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

function readLocalArticles() {
  try {
    return JSON.parse(localStorage.getItem(articlesKey) || "[]");
  } catch {
    return [];
  }
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeadings(content) {
  return String(content || "")
    .split("\n")
    .map((line) => {
      const match = /^(#{1,3})\s+(.+)$/.exec(line.trim());
      if (!match) return null;
      return {
        level: match[1].length,
        title: match[2],
        id: slugify(match[2]),
      };
    })
    .filter(Boolean);
}

function Stat({ label, value, tone = "teal", iconPath }) {
  return (
    <div className="stat-pill inline-flex items-center gap-1.5">
      <Icon className={`h-3.5 w-3.5 ${tone === "sky" ? "text-sky-600" : tone === "amber" ? "text-amber-600" : "text-teal-700"}`} path={iconPath} />
      <span>{label}</span>
      <span className="text-slate-900">{value}</span>
    </div>
  );
}

export default function ArticleDetailPage() {
  const { articleId } = useParams();
  const allArticles = [...readLocalArticles(), ...articles];
  const article = allArticles.find((item) => item.id === articleId);

  if (!article) {
    return (
      <PageReveal>
        <PageContainer className="mx-auto max-w-[960px]">
          <Reveal>
            <EmptyState
              eyebrow="Article"
              title="文章不存在"
              description="这个文章地址暂时没有对应内容，可以先返回文章列表选择其他文章。"
            />
          </Reveal>
        </PageContainer>
      </PageReveal>
    );
  }

  const headings = getHeadings(article.content);
  const relatedArticles = allArticles
    .filter((item) => item.id !== article.id)
    .filter((item) => item.category === article.category || (item.tags || []).some((tag) => (article.tags || []).includes(tag)))
    .slice(0, 3);

  const authorInitials = article.author.slice(0, 2).toUpperCase();

  return (
    <PageReveal>
      <PageContainer className="article-page-scene mx-auto max-w-[1240px]">
        <div className="relative z-[1] space-y-5">
        <Reveal className="flex items-center gap-2 text-sm text-slate-500">
          <Link to="/articles" className="inline-flex items-center gap-1.5 transition hover:text-slate-900">
            <Icon className="h-4 w-4 text-slate-500" path="M15 18l-6-6 6-6" />
            <span>文章列表</span>
          </Link>
          <span>/</span>
          <span className="text-slate-900">{article.title}</span>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
          <Reveal className="space-y-5">
            <Card strong className="article-hero-surface px-6 py-7 sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{article.category}</Badge>
                {(article.tags || [article.tag]).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <h1 className="mt-5 text-[34px] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[42px]">
                {article.title}
              </h1>

              <p className="mt-4 body-md">{article.excerpt}</p>

              <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                    <Icon className="h-4 w-4 text-teal-700" path="M15 19a7 7 0 1 0-6 0M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
                    {article.author}
                  </p>
                  <p className="mt-1 inline-flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span>{article.role}</span>
                    <span>/</span>
                    <span className="inline-flex items-center gap-1">
                      <Icon className="h-3.5 w-3.5 text-sky-600" path="M8 2v3M16 2v3M3.5 9.5h17M5 5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                      {article.publishedAt}
                    </span>
                    <span>/</span>
                    <span className="inline-flex items-center gap-1">
                      <Icon className="h-3.5 w-3.5 text-amber-600" path="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      {article.readTime}
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Stat label="阅读" value={article.views.toLocaleString()} tone="sky" iconPath="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
                  <Stat label="评论" value={article.comments || 0} tone="teal" iconPath="M7 18.5h10a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 17 5.5H7A2.5 2.5 0 0 0 4.5 8v8A2.5 2.5 0 0 0 7 18.5Zm0 0L4.5 21v-2.5" />
                  <Stat label="点赞" value={article.likes} tone="amber" iconPath="m12 21-1.45-1.32C5.4 15.02 2 11.94 2 8.15 2 5.07 4.42 3 7.2 3c1.57 0 3.07.75 4 1.92A5.12 5.12 0 0 1 15.2 3C17.98 3 20.4 5.07 20.4 8.15c0 3.79-3.4 6.87-8.55 11.53L12 21Z" />
                </div>
              </div>

              <div className="mt-8">
                <MarkdownRenderer content={article.content || article.excerpt} />
              </div>
            </Card>

            <Card className="article-toolbar-surface p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Related</p>
                  <h2 className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    <Icon className="h-5 w-5 text-teal-700" path="M4 19.5h16M6.5 16V8.5M12 16V4.5M17.5 16v-6" />
                    <span>相关推荐</span>
                  </h2>
                </div>
                <Link to="/articles">
                  <Button variant="secondary" className="gap-2">
                    <Icon className="h-4 w-4 text-teal-700" path="M15 18l-6-6 6-6" />
                    <span>返回文章列表</span>
                  </Button>
                </Link>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    to={`/articles/${item.id}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition duration-200 hover:border-slate-300 hover:bg-white"
                  >
                    <p className="text-sm font-semibold leading-6 text-slate-950">{item.title}</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <Icon className="h-3.5 w-3.5 text-teal-600" path="M15 19a7 7 0 1 0-6 0M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
                      <span>{item.author}</span>
                      <span>/</span>
                      <span>{item.category}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal className="space-y-4 xl:sticky xl:top-24 xl:self-start" delay={0.08}>
            <aside className="surface article-side-surface p-5">
              <p className="eyebrow">Contents</p>
              <h2 className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                <Icon className="h-5 w-5 text-sky-700" path="M5 7.5h14M5 12h14M5 16.5h9" />
                <span>目录</span>
              </h2>
              <nav className="mt-4 space-y-2">
                {headings.length ? (
                  headings.map((heading) => (
                    <a
                      key={`${heading.id}-${heading.title}`}
                      href={`#${heading.id}`}
                      className={`block rounded-xl px-3 py-2 text-sm leading-5 text-slate-600 transition duration-200 hover:bg-slate-50 hover:text-slate-950 ${
                        heading.level === 3 ? "ml-3" : ""
                      }`}
                    >
                      {heading.title}
                    </a>
                  ))
                ) : (
                  <p className="body-sm">这篇文章暂无可提取目录。</p>
                )}
              </nav>
            </aside>

            <aside className="surface article-side-surface p-5">
              <p className="eyebrow">Author</p>
              <h2 className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                <Icon className="h-5 w-5 text-teal-700" path="M15 19a7 7 0 1 0-6 0M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
                <span>作者信息</span>
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <IconBadge tone="teal" className="h-12 w-12 rounded-2xl text-sm font-semibold">
                  {authorInitials}
                </IconBadge>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">{article.author}</p>
                  <p className="text-xs text-slate-500">{article.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="inline-flex items-center gap-2">
                  <IconBadge tone="slate" className="h-7 w-7 rounded-lg">
                    <Icon className="h-3.5 w-3.5" path="M4.5 6.5h15v11h-15zM8 4.5v4M16 4.5v4" />
                  </IconBadge>
                  <span>发布分类：{article.category}</span>
                </p>
                <p className="inline-flex items-center gap-2">
                  <IconBadge tone="sky" className="h-7 w-7 rounded-lg">
                    <Icon className="h-3.5 w-3.5" path="M8 2v3M16 2v3M3.5 9.5h17M5 5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                  </IconBadge>
                  <span>发布时间：{article.publishedAt}</span>
                </p>
                <p className="inline-flex items-center gap-2">
                  <IconBadge tone="amber" className="h-7 w-7 rounded-lg">
                    <Icon className="h-3.5 w-3.5" path="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </IconBadge>
                  <span>阅读时长：{article.readTime}</span>
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(article.tags || [article.tag]).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
        </div>
      </PageContainer>
    </PageReveal>
  );
}
