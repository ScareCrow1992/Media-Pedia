// src/components/Navbar.tsx
import { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import SignupModal from "../Modal/modals/SignupModal";
import ModalBase from "../Modal/ModalBase";
import LoginModal from "../Modal/modals/LoginMordal";
import { useUserInfo } from "src/contexts/UserInfoContext";
import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";
import LooutButton from "./LogoutButton";

export default function Navbar() {
  const { user } = useUserInfo();

  const location = useLocation();

  // const is_relative = matchPath("/admin", location.pathname);
  const is_relative = false;

  // console.log(is_relative);

  const isTransparentNav =
    matchPath("/movies/:id", location.pathname) ||
    matchPath("/drama/:id", location.pathname);
  // const isTransparentNav = false;
  // console.log(isTransparentNav);
  return (
    <>
      <nav
        className={`
          z-30 border-b p-4
          ${is_relative ? "relative" : "fixed w-full top-0"}
          ${isTransparentNav ? "bg-transparent text-white" : "bg-white text-black"}
  `}
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
          {/* 왼쪽 로고 */}
          <Link to="/" className="text-xl font-bold text-pink-500">
            왓챠 클론
          </Link>

          {/* 가운데 메뉴 */}
          {/* <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><Link to="/movies">영화</Link></li>
            <li><Link to="/series">시리즈</Link></li>
            <li><Link to="/books">책</Link></li>
            <li><Link to="/webtoon">웹툰</Link></li>
          </ul> */}

          {/* 오른쪽 유저 영역 */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-gray-700">{user.nickname}</span>
                <Link
                  to={`/user/${user.id}`}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  프로필
                </Link>
                <LooutButton />
              </>
            ) : (
              <>
                <LoginButton />
                <SignupButton />
              </>
            )}
          </div>
        </div>
      </nav>

    </>
  );
}
