import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import UserMenu from "./UserMenu";

const navItems = [
  { to: "/home", label: "首页" },
  { to: "/articles", label: "文章" },
  { to: "/projects", label: "项目" },
  { to: "/competitions", label: "竞赛" },
];

function NavigationLink({ item, mobile = false }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `${mobile ? "whitespace-nowrap " : ""}relative rounded-2xl px-4 py-2.5 text-sm font-medium transition duration-300 ${
          isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? (
            <motion.span
              layoutId={mobile ? "mobile-nav-pill" : "nav-pill"}
              className="absolute inset-0 rounded-2xl bg-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
              transition={{ type: "spring", stiffness: 360, damping: 30 }}
            />
          ) : null}
          <motion.span
            className="absolute inset-0 rounded-2xl bg-slate-100 opacity-0"
            whileHover={{ opacity: isActive ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <span className="relative z-10">{item.label}</span>
        </>
      )}
    </NavLink>
  );
}

export default function MainNavbar({ isLoggedIn, currentUser, hideNavigation = false }) {
  return (
    <>
      {!hideNavigation ? (
        <nav className="hidden items-center gap-1 rounded-[20px] border border-slate-200/80 bg-white/88 p-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_24px_rgba(15,23,42,0.04)] md:flex">
          {navItems.map((item) => (
            <NavigationLink key={item.to} item={item} />
          ))}
        </nav>
      ) : (
        <div className="hidden md:block" />
      )}

      <div className="flex items-center gap-2">
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className="hidden sm:block">
              <Button variant="secondary">登录</Button>
            </NavLink>
            <NavLink to="/register" className="hidden sm:block">
              <Button>注册</Button>
            </NavLink>
          </>
        ) : null}
        {isLoggedIn && currentUser ? <UserMenu user={currentUser} /> : null}
      </div>

      {!hideNavigation ? (
        <div className="w-full pb-3 md:hidden">
          <nav className="flex gap-2 overflow-x-auto rounded-[20px] border border-slate-200/80 bg-white/88 p-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_24px_rgba(15,23,42,0.04)]">
            {navItems.map((item) => (
              <NavigationLink key={item.to} item={item} mobile />
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
