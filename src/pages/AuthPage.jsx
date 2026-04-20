import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import UserPageLayout from "../components/user/UserPageLayout";
import { useAuth } from "../contexts/AuthContext";

export default function AuthPage() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  function handleSwitchAccount() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <UserPageLayout
      title="账号操作"
      description="你可以在这里退出当前账号，或者切换到新的校园社区账号。"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="p-6">
          <p className="eyebrow">当前账号</p>
          <div className="mt-4 flex items-center gap-4 rounded-[28px] border border-slate-200 bg-slate-50/80 p-5">
            <img
              src={currentUser.avatar}
              alt={currentUser.nickname}
              className="h-20 w-20 rounded-[26px] object-cover ring-1 ring-slate-200"
            />
            <div>
              <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-slate-950">
                {currentUser.nickname}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {currentUser.email || currentUser.phone || currentUser.studentId}
              </p>
              <p className="mt-2 text-sm text-slate-500">{currentUser.role}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <h3 className="text-lg font-semibold text-slate-950">切换账号</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              返回登录页，使用另外一个学号、手机号或邮箱重新登录。
            </p>
            <Button className="mt-4 w-full" onClick={handleSwitchAccount}>
              切换账号
            </Button>
          </Card>

          <Card className="p-5">
            <h3 className="text-lg font-semibold text-slate-950">退出登录</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              清除本地 token 并退出当前会话，适合你演示不同账号登录流程。
            </p>
            <Button className="mt-4 w-full" variant="secondary" onClick={handleLogout}>
              退出登录
            </Button>
          </Card>
        </div>
      </div>
    </UserPageLayout>
  );
}
