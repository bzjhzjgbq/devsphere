import { NavLink } from "react-router-dom";
import PageContainer from "../layout/PageContainer";
import PageReveal from "../motion/PageReveal";

const items = [
  { to: "/user/profile", label: "个人中心" },
  { to: "/user/favorites", label: "我的收藏" },
  { to: "/user/friends", label: "好友" },
  { to: "/user/settings", label: "设置" },
  { to: "/user/auth", label: "账号操作" },
];

export default function UserPageLayout({ title, description, children }) {
  return (
    <PageReveal>
      <PageContainer className="space-y-6">
        <section className="rounded-[30px] border border-slate-200 bg-white/90 px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_20px_48px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">用户中心</p>
              <h1 className="mt-2 text-[34px] font-semibold tracking-[-0.05em] text-slate-950">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-2.5 text-sm font-medium transition duration-200 ${
                      isActive
                        ? "bg-slate-950 text-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        {children}
      </PageContainer>
    </PageReveal>
  );
}
