import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function RegisterPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-[520px]">
        <Card strong className="px-6 py-7 sm:px-8">
          <p className="eyebrow">Join DevSphere</p>
          <h1 className="mt-3 headline-lg">注册开发者账号</h1>
          <p className="mt-3 body-md">当前为界面占位版，后续可接入身份注册、兴趣标签和资料完善流程。</p>

          <div className="mt-6 space-y-4">
            <input className="field" placeholder="昵称" />
            <input className="field" placeholder="邮箱地址" />
            <input className="field" type="password" placeholder="设置密码" />
            <Button className="w-full">创建账号</Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
