import { Link, useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import ProjectDetailContent from "../components/project/ProjectDetailContent";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { projects } from "../data/mockProjects";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <PageContainer>
        <Card strong className="p-10 text-center">
          <h1 className="headline-lg">项目不存在</h1>
          <p className="mt-4 body-md">该项目可能已被删除，或你访问了无效链接。</p>
          <Link to="/projects" className="mt-6 inline-block">
            <Button>返回项目列表</Button>
          </Link>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/projects" className="transition hover:text-slate-900">
          项目
        </Link>
        <span>/</span>
        <span className="text-slate-900">{project.name}</span>
      </div>
      <ProjectDetailContent project={project} />
    </PageContainer>
  );
}
