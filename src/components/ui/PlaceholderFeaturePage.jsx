import Card from "./Card";
import EmptyState from "./EmptyState";
import SectionHeader from "./SectionHeader";

export default function PlaceholderFeaturePage({
  eyebrow,
  title,
  description,
  highlights,
  sidebarTitle,
  sidebarItems,
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-6">
        <Card strong className="px-6 py-7 sm:px-8">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </Card>

        {highlights.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <Card key={item.title} className="interactive-surface p-5">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 body-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            eyebrow="Preview"
            title="页面骨架已经就位"
            description="当前页面保留为高质量占位版本，后续可以在不打断整体风格的前提下继续补充真实内容。"
          />
        )}
      </div>

      <Card className="h-fit p-5 xl:sticky xl:top-24">
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">{sidebarTitle}</h3>
        <div className="mt-4 space-y-3">
          {sidebarItems.map((item) => (
            <div key={item} className="surface-soft px-4 py-3 text-sm text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
