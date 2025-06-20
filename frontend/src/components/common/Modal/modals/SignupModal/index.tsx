import { fetchUserRegister } from "src/apis/auth";
import { UserRegisterDTO } from "src/apis/auth/types";
import { useState } from "react";
import ModalPortal from "../../ModalPortal";

export default function SignupModal({ onClose }: { onClose: () => void }) {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // submit에 의한 화면 새로고침 방지
    e.preventDefault();

    try {
      let userRegisterDTO = {
        nickname: form.nickname,
        email: form.email,
        password: form.password
      } satisfies UserRegisterDTO;

      setEmailError(null);

      const ret = await fetchUserRegister(userRegisterDTO);
      console.log(ret);
    }
    catch (error: any) {
      if (error.response) {
        // 서버에서 에러 메시지를 보낸 경우
        console.error(error.response.data.message || "회원가입 실패");
        setEmailError(error.response.data.message);
        // toast.error(error.response.data.message || "회원가입 실패");
      } else {
        // 네트워크 또는 기타 axios 외부 에러
        console.error("서버와 연결할 수 없습니다.");
        // toast.error("서버와 연결할 수 없습니다.");
      }

    }


  };

  return (

    <ModalPortal>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 relative">

          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h1 className="text-pink-600 text-3xl font-bold text-center mb-2">WATCHA PEDIA</h1>
              <h2 className="text-xl font-semibold text-center mb-6">회원가입</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="nickname"
                  placeholder="이름"
                  value={form.nickname}
                  onChange={handleChange}
                  className="w-full border rounded-md p-3 bg-gray-100"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  value={form.email}
                  onChange={(e) => {
                    handleChange(e);
                    setEmailError(null);    // 새로 입력시 에러 초기화
                  }}
                  className={`w-full border rounded-md p-3 bg-gray-100
                            ${emailError ? "border-red-500 bg-red-50" : ""}`
                  }
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{emailError}</p>
                )}
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border rounded-md p-3 bg-gray-100"
                  required
                />


                <button type="submit" className="w-full bg-pink-500 text-white font-bold py-3 rounded-md mt-2 hover:bg-pink-600">
                  회원가입
                </button>
              </form>

              <p className="text-sm text-center text-gray-600 mt-4">
                이미 가입하셨나요?{" "}
                <button className="text-pink-500 hover:underline">로그인</button>
              </p>

              <div className="mt-6">
                <div className="text-center text-gray-400 text-sm mb-3">OR</div>
                <div className="flex gap-2 justify-around">
                  {["bg-yellow-500", "bg-red-500", "bg-blue-500", "bg-gray-500", "bg-green-500"].map((color_tailwind, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 ${color_tailwind} rounded-full cursor-pointer`}
                    >
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </ModalPortal>


  );
}
