import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function LoginPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-[520px]">
        <Card strong className="px-6 py-7 sm:px-8">
          <p className="eyebrow">Account</p>
          <h1 className="mt-3 headline-lg">登录 DevSphere</h1>
          <p className="mt-3 body-md">当前为界面占位版，后续可接入邮箱登录、第三方登录和验证码流程。</p>

          <div className="mt-6 space-y-4">
            <input className="field" placeholder="邮箱地址" />
            <input className="field" type="password" placeholder="密码" />
            <Button className="w-full">登录</Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
