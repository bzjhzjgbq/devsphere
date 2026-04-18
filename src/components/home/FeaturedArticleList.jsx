import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function FeaturedArticleList({ articles }) {
  return (
    <div className="grid gap-4">
      {articles.map((article, index) => (
        <Card
          key={article.id}
          className={`p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 ${
            index === 0 ? "bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfd_100%)]" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Badge>{article.tag}</Badge>
            <span>{article.readTime}</span>
            <span>{article.publishedAt}</span>
          </div>
          <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
            <span>
              作者：<span className="font-medium text-slate-700">{article.author}</span>
            </span>
            <span>{article.role}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
