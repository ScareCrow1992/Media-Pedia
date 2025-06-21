import { useUserInfo } from "src/contexts/UserInfoContext";

export default function LooutButton() {

  const {user, setUser} = useUserInfo();

    return (
        <>
            <button onClick={() => setUser(null)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">로그아웃</button>
        </>
    );

}