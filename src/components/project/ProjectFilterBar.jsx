export default function ProjectFilterBar({
  search,
  onSearchChange,
  categories,
  category,
  onCategoryChange,
  statuses,
  status,
  onStatusChange,
  sortBy,
  onSortChange,
  sortOptions,
}) {
  return (
    <div className="surface overflow-hidden">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Filters</p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">
              精准浏览项目目录
            </h3>
          </div>
          <div className="text-sm text-slate-500">支持关键词搜索、分类、状态和排序切换</div>
        </div>
      </div>

      <div className="grid gap-4 px-5 py-4 sm:px-6 lg:grid-cols-[1.45fr_0.78fr_0.78fr_0.78fr]">
        <label className="space-y-2">
          <span className="field-label">搜索项目</span>
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="搜索项目名称、作者、技术栈或简介"
            className="field"
          />
        </label>

        <label className="space-y-2">
          <span className="field-label">分类</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="field"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="field-label">状态</span>
          <select
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
            className="field"
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="field-label">排序</span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="field"
          >
            {sortOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
