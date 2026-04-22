export default function ArticleFilterBar({
  search,
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="surface p-5 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
        <label className="space-y-2">
          <span className="field-label">搜索文章</span>
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="搜索标题、作者或摘要"
            className="field"
          />
        </label>

        <div className="space-y-2">
          <span className="field-label">分类浏览</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const selected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${
                    selected
                      ? "bg-slate-950 text-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
                      : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
