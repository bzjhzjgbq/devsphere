import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../ui/Button";

export default function HeroSection() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 text-center sm:px-6 lg:px-8 md:pt-16">
      <p className="text-sm font-medium tracking-[0.24em] text-sky-300">
        南京信息工程大学校园社区平台
      </p>
      <h1 className="mt-6 text-[40px] font-semibold tracking-[-0.06em] text-white sm:text-[56px] lg:text-[68px]">
        连接学习交流、
        <br />
        项目实践与竞赛协作
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-xl tracking-tight text-slate-300">
        面向南京信息工程大学学生、社团、实验室和竞赛团队，集中展示文章沉淀、项目合作、竞赛组队和校园个人主页内容。
      </p>

      <div className="mt-10 flex justify-center">
        <Link to={isLoggedIn ? "/home" : "/login"}>
          <Button size="lg">进入社区</Button>
        </Link>
      </div>
    </section>
  );
}
