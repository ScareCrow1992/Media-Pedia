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
      <nav className={
        `z-30 flex items-center justify-between p-4
            ${is_relative ? "relative" : "fixed w-full top-0"}

            ${isTransparentNav ? "" : "border-b border-zinc-400"}
            ${isTransparentNav ? "bg-transparent text-white" : "bg-white text-black"}
        `}>

        <Link to="/" className="text-xl font-bold text-pink-500">
          왓챠 클론
        </Link>

        <div className="flex space-x-4 items-center">
          {
            user ?
              (
                <>
                  <span className="text-sm text-gray-700">{user.nickname}</span>
                  <Link to={`/user/${user.id}`} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                    프로필
                  </Link>
                  <LooutButton/>
                </>
              ) :
              (
                <>
                  <LoginButton />
                  <SignupButton />
                </>
              )
          }
        </div>
      </nav>
    </>
  );
}
