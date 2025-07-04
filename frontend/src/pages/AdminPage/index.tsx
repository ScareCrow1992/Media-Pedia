import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminPage() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="min-h-16 shrink-0"/>
        <div className="flex grow min-h-0">
          <div className="w-48 bg-zinc-900 text-white p-4 space-y-2">
            <Link to="/admin/movies" className={isActive("/admin/movies") ? "font-bold bg-zinc-800 p-2 block" : "p-2 block"}>
              🎬 영화
            </Link>
            <Link to="/admin/casts" className={isActive("/admin/casts") ? "font-bold bg-zinc-800 p-2 block" : "p-2 block"}>
              🧑‍🎤 배우
            </Link>
            <Link  to="/admin/reports" className={isActive("/admin/reports") ? "font-bold bg-zinc-800 p-2 block" : "p-2 block"}>
              🚨 신고
            </Link>
          </div>

          {/* <div className="absolute bottom-4 left-4 text-xs opacity-70">
        <p>🌐 한국어</p>
        <p>❓ 지원</p>
      </div> */}

          <div className="flex-1 bg-black text-white p-6 flex flex-col min-h-0 w-full">
            <Outlet />
          </div>
        </div>

      </div>
    </>

  );
}