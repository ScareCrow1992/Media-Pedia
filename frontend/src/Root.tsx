import { Outlet } from "react-router-dom";
import Navbar from "src/components/common/Navbar";
import { UserInfoProvider } from "./contexts/UserInfoContext";

export default function Root() {

  /*
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<UserCredential[]>({
    queryKey: ['tester-login'],
    queryFn: () => fetchTesterLogin(),
  });
  */

  // const [user, setUser] = useState<UserCredential | null>(null);
  // console.log(setUser)
  // console.log(user);
  // console.log(env);

  // const cdnBaseUrl = process.env.REACT_APP_CDN_PATH;


  return (

    <UserInfoProvider>
      <div className="min-h-screen text-black">
        <Navbar />
        {/* {
          <>
            {users && (<UserChanger users={users} onSelectUser={setUser} />)}
          </>
        } */}
        <main>
          <Outlet />
        </main>
      </div>
    </UserInfoProvider >
  );
}