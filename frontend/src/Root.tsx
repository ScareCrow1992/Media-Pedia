import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Navbar from "src/components/common/Navbar";
import { UserDTO } from "./apis/user/types";
import { fetchTesterLogin } from "./apis/user";
import UserChanger from "./components/DBG/UserChanger";
import { useState } from "react";
import { UserInfoContext } from "./contexts/UserInfoContext";

export default function Root() {

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<UserDTO[]>({
    queryKey: ['tester-login'],
    queryFn: () => fetchTesterLogin(),
  });

  const [user, setUser] = useState<UserDTO | null>(null);
  // console.log(users);

  return (

    <UserInfoContext.Provider value={{ user }}>
      <div className="min-h-screen text-black">
        <Navbar />
        {
          <>
            {users && (<UserChanger users={users} onSelectUser={setUser} />)}
          </>
        }
        <main>
          <Outlet />
        </main>
      </div>
    </UserInfoContext.Provider >
  );
}