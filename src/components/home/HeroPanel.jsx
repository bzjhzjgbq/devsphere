import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function HeroPanel({ stats, pulseCards }) {
  return (
    <Card strong className="relative overflow-hidden px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute left-0 top-8 h-40 w-40 rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_380px] xl:items-start">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            社区持续活跃中
          </div>

          <h1 className="mt-5 max-w-4xl text-[42px] font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-[54px] lg:text-[64px]">
            连接项目、文章与开发者的现代社区首页
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-600 sm:text-[17px]">
            DevSphere 让项目展示、技术沉淀与创作者表达发生在同一个清晰、可信、易于持续浏览的产品环境里。
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects">
              <Button className="px-5 py-3 shadow-sm">浏览项目社区</Button>
            </Link>
            <Link to="/projects/new">
              <Button variant="secondary" className="px-5 py-3 shadow-sm">
                发布项目
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <p className="text-[30px] font-semibold tracking-[-0.05em] text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">{stat.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#111827_55%,#0f766e_140%)] p-6 text-white shadow-[0_28px_72px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Live Overview
                </p>
                <p className="mt-2 text-sm text-slate-400">社区内容热度概览</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                Real-time
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {pulseCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-200 hover:bg-white/[0.08]"
                >
                  <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${card.tone}`} />
                  <p className="mt-4 text-sm text-slate-300">{card.title}</p>
                  <p className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-white">
                    {card.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{card.meta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <Card className="p-5">
              <p className="eyebrow">Why DevSphere</p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                像产品一样组织内容，像社区一样连接人。
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                让每一条项目更新、每一篇文章和每一位作者都更容易被发现。
              </p>
            </Card>

            <Card className="p-5">
              <p className="text-sm text-slate-500">本周高关注标签</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["AI 工具", "设计系统", "开源组件", "协作工具"].map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
}
