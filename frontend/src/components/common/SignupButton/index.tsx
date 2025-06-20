import { useState } from "react";
import SignupModal from "../Modal/modals/SignupModal";

export default function SignupButton() {

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsSignupModalOpen(true)} className="hover:underline">회원가입</button>

            {/* 로그인 모달 */}
            {isSignupModalOpen && <SignupModal onClose={() => setIsSignupModalOpen(false)} />}
        </>
    );
}