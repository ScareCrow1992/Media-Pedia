import { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import SignupModal from "../Modal/modals/SignupModal";
import ModalBase from "../Modal/ModalBase";
import LoginModal from "../Modal/modals/LoginMordal";
import { useUserInfo } from "src/contexts/UserInfoContext";
import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";
import LooutButton from "./LogoutButton";
import WatchaPediaLogo from "src/apis/svg/WatchaPediaLogo/WatchaPediaLogo";

export default function Navbar() {
  const { user } = useUserInfo();
  const location = useLocation();

  // === 스크롤 위치 및 색상 상태 관리 ===
  const [isScrolled, setIsScrolled] = useState(false);

  // === 해당 경로에서만 투명 적용 ===
  const isTransparentPage =
    matchPath("/movies/:id", location.pathname) ||
    matchPath("/drama/:id", location.pathname);

  useEffect(() => {
    if (!isTransparentPage) {
      setIsScrolled(false);
      return; // 투명 적용이 안되는 페이지면 리스너 X
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentPage]);

  // === 최종 클래스 구성 ===
  const backgroundClass = isTransparentPage && !isScrolled
    ? "bg-transparent text-white border-0"
    : "bg-white text-black shadow border-b";

  return (
    <>
      <nav
        className={`
          z-30 p-4 transition-colors duration-500
          fixed w-full top-0
          ${backgroundClass}
        `}
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-pink-500">
            <WatchaPediaLogo />
          </Link>

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
