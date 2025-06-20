import { useState } from "react";
import LoginModal from "../Modal/modals/LoginMordal";

export default function LoginButton() {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>

            <button onClick={() => setIsLoginModalOpen(true)} className="hover:underline">로그인</button>
            {/* 로그인 모달 */}
            {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
        </>
    );

}