import PageContainer from "../components/layout/PageContainer";
import PageReveal from "../components/motion/PageReveal";
import Reveal from "../components/motion/Reveal";
import PublishArticleForm from "../components/article/PublishArticleForm";

export default function PublishArticlePage() {
  return (
    <PageReveal>
      <PageContainer className="article-page-scene mx-auto max-w-[1240px]">
        <div className="relative z-[1]">
          <Reveal>
            <PublishArticleForm />
          </Reveal>
        </div>
      </PageContainer>
    </PageReveal>
  );
}
