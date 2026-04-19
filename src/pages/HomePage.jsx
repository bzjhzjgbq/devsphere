import { Link } from "react-router-dom";
import ActiveUserList from "../components/home/ActiveUserList";
import FeaturedArticleList from "../components/home/FeaturedArticleList";
import FeaturedProjectGrid from "../components/home/FeaturedProjectGrid";
import HeroPanel from "../components/home/HeroPanel";
import PageContainer from "../components/layout/PageContainer";
import PageReveal from "../components/motion/PageReveal";
import Reveal from "../components/motion/Reveal";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { featuredProjects } from "../data/mockProjects";

const homeStats = [
  { label: "社区项目", value: "1,280+", detail: "每周持续更新真实项目" },
  { label: "活跃开发者", value: "8,600+", detail: "覆盖前端、后端、AI 与产品方向" },
  { label: "本周新增", value: "126", detail: "新项目与深度讨论持续出现" },
];

const pulseCards = [
  {
    title: "今日趋势",
    value: "AI 工作流",
    meta: "讨论热度 +24%",
    tone: "from-slate-900 via-slate-800 to-slate-700",
  },
  {
    title: "最新发布",
    value: "18",
    meta: "过去 24 小时",
    tone: "from-blue-600 via-sky-500 to-cyan-400",
  },
  {
    title: "新增话题",
    value: "342",
    meta: "围绕项目、开源与工程实践",
    tone: "from-emerald-600 via-teal-500 to-cyan-400",
  },
];

const homeArticles = [
  {
    id: "home-article-1",
    title: "设计系统如何在开发者社区增长过程中保持可维护",
    excerpt:
      "从视觉和交互层最容易失控的部分切入，给出一条团队真正能持续执行的演进路径。",
    author: "Aster Chen",
    role: "Frontend Engineer",
    readTime: "8 分钟",
    tag: "设计系统",
    publishedAt: "2026-04-12",
  },
  {
    id: "home-article-2",
    title: "独立开发者如何打造能吸引早期用户的公开项目页",
    excerpt:
      "项目页不只是展示窗口，更是帮助用户理解问题、理解作者和理解产品方向的关键界面。",
    author: "Lin Yue",
    role: "Full-stack Developer",
    readTime: "6 分钟",
    tag: "项目增长",
    publishedAt: "2026-04-10",
  },
  {
    id: "home-article-3",
    title: "为什么在开发者社区里，信息层级比视觉炫技更重要",
    excerpt:
      "从 GitHub、Linear 和 Notion 的表达方式里提取规律，理解内容平台为什么更需要克制与秩序。",
    author: "Serein",
    role: "AI Product Builder",
    readTime: "10 分钟",
    tag: "内容设计",
    publishedAt: "2026-04-08",
  },
];

const activeUsers = [
  {
    id: "lin-yue",
    name: "Lin Yue",
    role: "Full-stack Developer",
    summary: "持续分享协作工具与 AI 产品设计的实践经验。",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    score: "98",
    tags: ["AI 产品", "协作工具", "全栈"],
  },
  {
    id: "aster-chen",
    name: "Aster Chen",
    role: "Frontend Engineer",
    summary: "长期关注组件系统、界面质量与设计工程化。",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    score: "94",
    tags: ["组件系统", "设计系统", "前端工程"],
  },
  {
    id: "serein",
    name: "Serein",
    role: "AI Product Builder",
    summary: "探索生成式应用与多模态工作流原型。",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    score: "91",
    tags: ["AI 工作流", "多模态", "产品原型"],
  },
];

export default function HomePage() {
  return (
    <PageReveal className="space-y-10 pb-2">
      <PageContainer>
        <HeroPanel stats={homeStats} pulseCards={pulseCards} />
      </PageContainer>

      <PageContainer className="space-y-10">
        <Reveal as="section" className="space-y-6">
          <SectionHeader
            eyebrow="Trending Projects"
            title="热门项目"
            description="把最值得浏览的项目放在首页核心位置，让内容发现和社区热度自然连接起来。"
            action={
              <Link to="/projects">
                <Button variant="secondary">查看全部项目</Button>
              </Link>
            }
          />
          <FeaturedProjectGrid projects={featuredProjects.slice(0, 3)} />
        </Reveal>

        <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal className="space-y-6">
            <SectionHeader
              eyebrow="Featured Articles"
              title="精选文章"
              description="首页不只展示项目，也承载更深入的阅读内容，让平台更像真实运转中的开发者社区。"
              action={
                <Link to="/articles">
                  <Button variant="secondary">进入文章中心</Button>
                </Link>
              }
            />
            <FeaturedArticleList articles={homeArticles} />
          </Reveal>

          <Reveal className="space-y-6" delay={0.08}>
            <SectionHeader
              eyebrow="Active Developers"
              title="活跃开发者"
              description="把持续输出的开发者放到首页，能让平台更有温度，也更像真实发生交流的社区。"
            />
            <ActiveUserList users={activeUsers} />
          </Reveal>
        </section>
      </PageContainer>
    </PageReveal>
  );
}
