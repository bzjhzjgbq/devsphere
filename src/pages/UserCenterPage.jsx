import PageContainer from "../components/layout/PageContainer";
import UserArticleList from "../components/user/UserArticleList";
import UserFavoriteList from "../components/user/UserFavoriteList";
import UserProfileHero from "../components/user/UserProfileHero";
import UserProjectList from "../components/user/UserProjectList";
import UserStatsGrid from "../components/user/UserStatsGrid";
import SectionHeader from "../components/ui/SectionHeader";
import { articles } from "../data/mockArticles";
import { projects } from "../data/mockProjects";
import { currentUserProfile } from "../data/mockUsers";

export default function UserCenterPage() {
  const myArticles = articles.filter((article) => currentUserProfile.articleIds.includes(article.id));
  const myProjects = projects.filter((project) => currentUserProfile.projectIds.includes(project.id));
  const favoriteArticles = articles.filter((article) =>
    currentUserProfile.favoriteArticleIds.includes(article.id)
  );
  const favoriteProjects = projects.filter((project) =>
    currentUserProfile.favoriteProjectIds.includes(project.id)
  );

  return (
    <PageContainer className="space-y-6">
      <UserProfileHero user={currentUserProfile} />
      <UserStatsGrid stats={currentUserProfile.stats} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <section className="space-y-4">
            <SectionHeader
              eyebrow="My Articles"
              title="我的文章"
              description="展示这个开发者在社区中的持续输出与内容表达。"
            />
            <UserArticleList articles={myArticles} />
          </section>

          <section className="space-y-4">
            <SectionHeader
              eyebrow="My Projects"
              title="我的项目"
              description="项目是个人主页里最能体现能力和方向的内容。"
            />
            <UserProjectList projects={myProjects} title="已发布项目" />
          </section>
        </div>

        <div className="space-y-4 xl:sticky xl:top-24 xl:self-start">
          <UserProjectList projects={myProjects} title="项目速览" />
          <UserFavoriteList articles={favoriteArticles} projects={favoriteProjects} />
        </div>
      </div>
    </PageContainer>
  );
}
