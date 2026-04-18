export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
      <div className="max-w-2xl space-y-0.5">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[32px]">
          {title}
        </h2>
        {description ? <p className="mt-3 body-md">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
