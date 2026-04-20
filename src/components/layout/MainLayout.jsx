import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import PageContainer from "./PageContainer";
import SiteFooter from "./SiteFooter";
import MainNavbar from "./MainNavbar";

export default function MainLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isUserArea = location.pathname.startsWith("/user");
  const { isLoggedIn, currentUser } = useAuth();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 shadow-[0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
        <PageContainer className="flex flex-wrap items-center justify-between gap-6">
          <NavLink to="/home" className="group flex min-w-0 items-center gap-3 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] transition duration-200 group-hover:-translate-y-0.5">
              DS
            </div>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold tracking-[-0.02em] text-slate-950">
                DarkSec
              </p>
              <p className="truncate text-[11px] tracking-[0.22em] text-slate-500">
                南京信息工程大学校园社区
              </p>
            </div>
          </NavLink>

          <MainNavbar
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            hideNavigation={isUserArea || isAuthPage}
          />
        </PageContainer>
      </header>

      <main
        className={
          isAuthPage
            ? "flex min-h-[calc(100vh-76px)] items-center pb-12 pt-8 sm:pb-16 sm:pt-10"
            : "pb-14 pt-6 sm:pt-8"
        }
      >
        <Outlet />
      </main>

      {isAuthPage || isUserArea ? null : <SiteFooter />}
    </div>
  );
}
