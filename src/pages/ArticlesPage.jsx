import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import PageReveal from "../components/motion/PageReveal";
import Reveal from "../components/motion/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import { articles } from "../data/mockArticles";

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

export default function ArticlesPage() {
  const categories = useMemo(() => ["全部", ...new Set(articles.map((article) => article.category))], []);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const keyword = search.trim().toLowerCase();
      const matchesKeyword =
        !keyword ||
        [article.title, article.excerpt, article.author, article.tag, article.category]
          .join(" ")
          .toLowerCase()
          .includes(keyword);
      const matchesCategory = activeCategory === "全部" || article.category === activeCategory;
      return matchesKeyword && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <PageReveal>
      <PageContainer className="article-page-scene mx-auto max-w-[1240px]">
        <div className="relative z-[1] space-y-6">
        <Reveal>
          <Card strong className="article-hero-surface px-6 py-8 sm:px-8">
            <p className="eyebrow">文章社区</p>
            <h1 className="mt-3 text-[38px] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[46px]">
              浏览校园文章与经验沉淀
            </h1>
            <p className="mt-4 max-w-3xl text-[16px] leading-8 text-slate-600">
              这里收集课程笔记、竞赛经验、项目复盘与社区分享，方便同学持续沉淀自己的内容。
            </p>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="article-toolbar-surface p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">
                <label className="relative block w-full max-w-xl">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <IconBadge tone="emerald" className="h-9 w-9 rounded-2xl">
                      <Icon className="h-4 w-4" path="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </IconBadge>
                  </span>
                  <input
                    className="field pl-14"
                    placeholder="搜索标题、作者、标签或分类"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setActiveCategory(item)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                        activeCategory === item
                          ? "bg-slate-950 text-white"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <Link to="/articles/new">
                  <Button className="gap-2">
                    <Icon className="h-4 w-4 text-emerald-100" path="M12 5v14m-7-7h14" />
                    <span>发表文章</span>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-4">
          {filteredArticles.length ? (
            filteredArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.03}>
                <Card className="article-list-card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{article.tag}</Badge>
                    <Badge>{article.category}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Icon className="h-3.5 w-3.5 text-sky-600" path="M8 2v3M16 2v3M3.5 9.5h17M5 5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                      {article.publishedAt}
                    </span>
                  </div>
                  <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.03em] text-slate-950">
                    <Link to={`/articles/${article.id}`} className="transition hover:text-emerald-700">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-teal-600" path="M15 19a7 7 0 1 0-6 0M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
                      作者：{article.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-sky-600" path="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      阅读：{article.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-amber-600" path="m12 21-1.45-1.32C5.4 15.02 2 11.94 2 8.15 2 5.07 4.42 3 7.2 3c1.57 0 3.07.75 4 1.92A5.12 5.12 0 0 1 15.2 3C17.98 3 20.4 5.07 20.4 8.15c0 3.79-3.4 6.87-8.55 11.53L12 21Z" />
                      点赞：{article.likes}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Link to={`/articles/${article.id}`}>
                      <Button variant="secondary" size="sm" className="gap-2">
                        <Icon className="h-4 w-4 text-teal-700" path="M5 12h14M13 6l6 6-6 6" />
                        <span>阅读全文</span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))
          ) : (
            <EmptyState
              eyebrow="没有结果"
              title="没有找到匹配的文章"
              description="可以尝试调整搜索词或切换分类。"
            />
          )}
        </div>
        </div>
      </PageContainer>
    </PageReveal>
  );
}
