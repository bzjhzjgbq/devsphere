import { useState } from "react";
import Card from "../components/ui/Card";
import UserPageLayout from "../components/user/UserPageLayout";
import { useAuth } from "../contexts/AuthContext";
import { currentUserProfile } from "../data/mockUsers";

const settingSections = [
  { key: "account", label: "账号" },
  { key: "security", label: "安全" },
  { key: "notice", label: "通知" },
  { key: "privacy", label: "隐私" },
];

export default function SettingsPage() {
  const { currentUser } = useAuth();
  const [activeKey, setActiveKey] = useState("account");

  const contentMap = {
    account: {
      title: "账号设置",
      blocks: [
        ["昵称", currentUser.nickname],
        ["邮箱", currentUser.email || "暂未绑定"],
        ["学号", currentUser.studentId || "暂未绑定"],
      ],
    },
    security: {
      title: "安全设置",
      blocks: [
        ["登录方式", "账号密码登录"],
        ["当前状态", "已接入真实 token 登录态"],
        ["切换账号", "请前往账号操作页完成切换"],
      ],
    },
    notice: {
      title: "通知设置",
      blocks: [
        ["评论通知", currentUserProfile.settings.notifyComments ? "已开启" : "已关闭"],
        ["组队邀请", currentUserProfile.settings.notifyInvites ? "已开启" : "已关闭"],
        ["说明", "当前演示阶段为只读结构，后续可继续接接口。"],
      ],
    },
    privacy: {
      title: "隐私设置",
      blocks: [
        ["主页可见性", currentUserProfile.settings.profileVisible ? "公开展示" : "仅自己可见"],
        ["资料说明", "当前页面采用 Windows 设置式左侧菜单布局。"],
        ["个性化", "已按要求移除主题、背景和个性化功能。"],
      ],
    },
  };

  const activeSection = contentMap[activeKey];

  return (
    <UserPageLayout
      title="设置"
      description="设置页按 Windows 风格重做：左侧为菜单列表，右侧是对应内容区，同时移除主题、背景和个性化功能。"
    >
      <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
        <Card className="p-4">
          <div className="space-y-2">
            {settingSections.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveKey(item.key)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                  activeKey === item.key
                    ? "bg-slate-950 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <span>{item.label}</span>
                <span>›</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="eyebrow">当前面板</p>
          <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.05em] text-slate-950">
            {activeSection.title}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {activeSection.blocks.map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </UserPageLayout>
  );
}
