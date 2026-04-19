import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

function SidebarSection({ title, eyebrow, children }) {
  return (
    <section className="surface p-5">
      <div className="mb-4">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">{title}</h3>
      </div>
      {children}
    </section>
  );
}

export default function ProjectSidebarList({ projects, tags, authors }) {
  return (
    <div className="space-y-4">
      <SidebarSection title="热门项目" eyebrow="Trending">
        <div className="space-y-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.status}</span>
                </div>
                <p className="mt-1 line-clamp-1 text-sm font-medium text-slate-900">{project.name}</p>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{project.summary}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm font-semibold text-slate-900">{project.likes}</p>
                <p className="text-xs text-slate-500">点赞</p>
              </div>
            </Link>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="热门标签" eyebrow="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition duration-200 hover:border-slate-300 hover:bg-white"
            >
              <span className="font-medium">{tag.name}</span>
              <span className="ml-2 text-xs text-slate-500">{tag.count}</span>
            </div>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="活跃开发者" eyebrow="Developers">
        <div className="space-y-3">
          {authors.map((author) => (
            <div
              key={author.name}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-slate-200"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900">{author.name}</p>
                <p className="truncate text-xs text-slate-500">{author.role}</p>
              </div>
              <Badge>{author.score} 赞</Badge>
            </div>
          ))}
        </div>
      </SidebarSection>
    </div>
  );
}
