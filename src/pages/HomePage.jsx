import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import ActiveUserList from "../components/home/ActiveUserList";
import FeaturedArticleList from "../components/home/FeaturedArticleList";
import FeaturedProjectGrid from "../components/home/FeaturedProjectGrid";
import HeroPanel from "../components/home/HeroPanel";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { featuredProjects } from "../data/mockProjects";

const homeStats = [
  { label: "社区项目", value: "1,280+", detail: "每周持续新增真实作品" },
  { label: "活跃开发者", value: "8,600+", detail: "覆盖前端、后端、AI 与产品工程" },
  { label: "本周新增", value: "126", detail: "新发布项目与技术讨论" },
];

const pulseCards = [
  {
    title: "今日热门方向",
    value: "AI 工作流",
    meta: "讨论热度 +24%",
    tone: "from-slate-900 via-slate-800 to-slate-700",
  },
  {
    title: "新发布项目",
    value: "18 个",
    meta: "过去 24 小时",
    tone: "from-blue-600 via-sky-500 to-cyan-400",
  },
  {
    title: "最新活跃讨论",
    value: "342 条",
    meta: "围绕项目、开源与工程实践",
    tone: "from-emerald-600 via-teal-500 to-cyan-400",
  },
];

const homeArticles = [
  {
    id: "home-article-1",
    title: "从组件库到社区设计系统，如何让界面长期可维护",
    excerpt:
      "拆解技术社区产品里最容易失控的视觉与交互层，并给出一套适合前端团队落地的设计系统方法。",
    author: "Aster Chen",
    role: "Frontend Engineer",
    readTime: "8 分钟",
    tag: "设计系统",
    publishedAt: "2026-04-12",
  },
  {
    id: "home-article-2",
    title: "独立开发者如何构建公开项目页，吸引第一批核心用户",
    excerpt:
      "项目首页不只是展示窗口，更是说服用户理解问题、理解作者和理解产品方向的关键节点。",
    author: "Lin Yue",
    role: "Full-stack Developer",
    readTime: "6 分钟",
    tag: "项目增长",
    publishedAt: "2026-04-10",
  },
  {
    id: "home-article-3",
    title: "技术论坛里的内容结构设计：为什么信息层级比视觉风格更重要",
    excerpt:
      "从 GitHub、Linear、Notion 的产品表达中提取规律，看看内容平台为什么需要克制和稳定。",
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
    summary: "持续分享协作工具与 AI 项目设计实践。",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    score: "98",
    tags: ["AI 产品", "协作工具", "全栈"],
  },
  {
    id: "aster-chen",
    name: "Aster Chen",
    role: "Frontend Engineer",
    summary: "专注组件系统、交互体验与设计工程化。",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    score: "94",
    tags: ["组件系统", "设计系统", "前端工程"],
  },
  {
    id: "serein",
    name: "Serein",
    role: "AI Product Builder",
    summary: "分享生成式应用与多模态工作流案例。",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    score: "91",
    tags: ["AI 工作流", "多模态", "产品原型"],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10 pb-2">
      <PageContainer>
        <HeroPanel stats={homeStats} pulseCards={pulseCards} />
      </PageContainer>

      <PageContainer className="space-y-10">
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Trending Projects"
            title="热门项目"
            description="把最值得点开的项目放在首页第一屏之后，让内容入口和社区热度自然接上。"
            action={
              <Link to="/projects">
                <Button variant="secondary">查看全部项目</Button>
              </Link>
            }
          />
          <FeaturedProjectGrid projects={featuredProjects.slice(0, 3)} />
        </section>

        <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Featured Articles"
              title="热门文章"
              description="除了项目展示，首页也要承接更适合沉淀的深度内容，形成真正的内容平台气质。"
              action={
                <Link to="/articles">
                  <Button variant="secondary">前往文章模块</Button>
                </Link>
              }
            />
            <FeaturedArticleList articles={homeArticles} />
          </div>

          <div className="space-y-6">
            <SectionHeader
              eyebrow="Active Users"
              title="活跃用户"
              description="把创作者放到首页，让平台更像真实社区，而不是单纯的内容陈列页。"
            />
            <ActiveUserList users={activeUsers} />
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
