export default function PageHero({ eyebrow, title, description, actions, aside }) {
  return (
    <div className="surface-strong overflow-hidden px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 headline-lg">{title}</h1>
          <p className="mt-4 body-md">{description}</p>
          {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </div>
  );
}
