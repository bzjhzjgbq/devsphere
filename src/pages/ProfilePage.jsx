import Card from "../components/ui/Card";
import UserPageLayout from "../components/user/UserPageLayout";
import UserProfileHero from "../components/user/UserProfileHero";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { currentUser } = useAuth();

  return (
    <UserPageLayout
      title="个人中心"
      description="这里是你的校园个人展示页，只保留个人主页主视觉与核心资料，不再重复其它模块。"
    >
      <div className="space-y-6">
        <UserProfileHero user={currentUser} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Card className="p-6">
            <p className="eyebrow">主页简介</p>
            <h2 className="mt-2 text-[26px] font-semibold tracking-[-0.04em] text-slate-950">
              校园个人主页
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              这个页面更像一张长期维护的校园名片，用来展示你的方向、身份、所在学院和成长轨迹。
              它不再混入收藏、好友或设置内容，而是专注于“我是谁”和“我正在做什么”。
            </p>
          </Card>

          <Card className="p-6">
            <p className="eyebrow">主页状态</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs text-slate-500">当前身份</p>
                <p className="mt-2 text-sm font-medium text-slate-900">{currentUser.role}</p>
              </div>
              <div className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs text-slate-500">联系邮箱</p>
                <p className="mt-2 text-sm font-medium text-slate-900">{currentUser.email || "暂未填写"}</p>
              </div>
              <div className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs text-slate-500">展示说明</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  当前页面优先展示真实用户资料接口，收藏与好友等模块仍单独拆分成独立页面。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </UserPageLayout>
  );
}
