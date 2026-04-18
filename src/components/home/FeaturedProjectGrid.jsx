import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

export default function FeaturedProjectGrid({ projects }) {
  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      {projects.slice(0, 1).map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="group surface overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(15,23,42,0.05),0_24px_56px_rgba(15,23,42,0.1)]"
        >
          <img src={project.cover} alt={project.name} className="h-72 w-full object-cover object-center" />
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Badge>{project.category}</Badge>
              <span>{project.publishedAt}</span>
              <span>·</span>
              <span>{project.status}</span>
            </div>
            <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-slate-950 transition duration-200 group-hover:text-slate-700">
              {project.name}
            </h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">{project.summary}</p>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <img
                  src={project.author.avatar}
                  alt={project.author.name}
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                />
                <div>
                  <p className="font-medium text-slate-700">{project.author.name}</p>
                  <p className="text-xs text-slate-500">项目作者</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>赞 {project.likes}</span>
                <span>藏 {project.favorites}</span>
                <span>览 {project.views}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <div className="grid gap-4">
        {projects.slice(1).map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(15,23,42,0.05),0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-start gap-4">
              <img
                src={project.cover}
                alt={project.name}
                className="h-24 w-28 rounded-2xl border border-slate-200 object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <Badge>{project.category}</Badge>
                  <span>{project.publishedAt}</span>
                </div>
                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.03em] text-slate-950 transition duration-200 group-hover:text-slate-700">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{project.author.name}</span>
                  <span>{project.likes} 赞</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
