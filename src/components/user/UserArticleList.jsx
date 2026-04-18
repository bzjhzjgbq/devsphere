import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";

export default function UserArticleList({ articles }) {
  if (!articles.length) {
    return (
      <EmptyState
        eyebrow="Articles"
        title="还没有发布文章"
        description="当前用户的文章列表会在这里展示，包括技术沉淀、实践总结和社区思考。"
      />
    );
  }

  return (
    <div className="grid gap-4">
      {articles.map((article) => (
        <article key={article.id} className="surface interactive-surface p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Badge>{article.tag}</Badge>
            <span>{article.publishedAt}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
            {article.title}
          </h3>
          <p className="mt-3 body-sm">{article.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
