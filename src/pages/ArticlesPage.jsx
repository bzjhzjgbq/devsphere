import { useMemo, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import PageReveal from "../components/motion/PageReveal";
import Reveal from "../components/motion/Reveal";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import { articles } from "../data/mockArticles";

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
      <PageContainer className="mx-auto max-w-[1240px] space-y-6">
        <Reveal>
          <Card strong className="px-6 py-8 sm:px-8">
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
          <Card className="p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <input
                className="field max-w-xl"
                placeholder="搜索标题、作者、标签或分类"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
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
          </Card>
        </Reveal>

        <div className="grid gap-4">
          {filteredArticles.length ? (
            filteredArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.03}>
                <Card className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{article.tag}</Badge>
                    <Badge>{article.category}</Badge>
                    <span className="text-xs text-slate-500">{article.publishedAt}</span>
                  </div>
                  <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.03em] text-slate-950">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span>作者：{article.author}</span>
                    <span>阅读：{article.readTime}</span>
                    <span>点赞：{article.likes}</span>
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
      </PageContainer>
    </PageReveal>
  );
}
