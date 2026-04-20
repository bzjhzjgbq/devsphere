import { useMemo, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import PageReveal from "../components/motion/PageReveal";
import Reveal from "../components/motion/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { competitionCategories, competitions } from "../data/mockCompetitions";

export default function CompetitionsPage() {
  const [category, setCategory] = useState("全部");

  const filteredCompetitions = useMemo(() => {
    if (category === "全部") return competitions;
    return competitions.filter((item) => item.category === category);
  }, [category]);

  return (
    <PageReveal>
      <PageContainer className="space-y-6">
        <Reveal>
          <Card strong className="px-6 py-8 sm:px-8">
            <p className="eyebrow">竞赛专区</p>
            <h1 className="mt-3 text-[38px] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[46px]">
              校园竞赛专区
            </h1>
            <p className="mt-4 max-w-3xl text-[16px] leading-8 text-slate-600">
              聚合南京信息工程大学同学常见的学科竞赛、编程竞赛、创新创业与网络安全活动，方便查看时间、状态和组队方向。
            </p>
          </Card>
        </Reveal>

        <Reveal>
          <div className="surface flex flex-wrap gap-2 p-4">
            {competitionCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                  category === item
                    ? "bg-slate-950 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {filteredCompetitions.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.03}>
              <Card className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{item.category}</Badge>
                      <Badge>{item.status}</Badge>
                    </div>
                    <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </h2>
                  </div>
                  <div className="text-sm text-slate-500">{item.time}</div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-5">
                  <Button variant="secondary">查看详情</Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </PageReveal>
  );
}
