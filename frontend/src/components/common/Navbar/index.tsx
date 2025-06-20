// src/components/Navbar.tsx
import { Link, matchPath, useLocation } from "react-router-dom";

export default function Navbar() {
    // const location = useLocation();

    // const isTransparentNav =
    //     matchPath("/movies/:id", location.pathname) ||
    //     matchPath("/drama/:id", location.pathname);
    const isTransparentNav = false;

    return (
        <nav className={
            `sticky top-0 z-30 flex items-center justify-between p-4
            ${isTransparentNav ? "" : "border-b border-zinc-400"}
            ${isTransparentNav ? "bg-transparent text-white" : "bg-white text-black"}
        `}>

            <Link to="/" className="text-xl font-bold text-pink-500">
                왓챠 클론
            </Link>
            <div className="flex space-x-4">
                <Link to="/login" className="hover:underline">로그인</Link>
                <Link to="/signup" className="hover:underline">회원가입</Link>
            </div>
        </nav>
    );
}
