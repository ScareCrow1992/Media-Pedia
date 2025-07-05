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
      <div className="flex flex-col min-h-screen text-black">
        <Navbar />
        {/* {
          <>
            {users && (<UserChanger users={users} onSelectUser={setUser} />)}
          </>
        } */}
        <main className= "flex-grow">
          <Outlet />
        </main>
        <footer className="bg-black text-white py-8 text-center">
          <p className="text-sm text-[#A0A0A0]">
            © 2025 MediaPedia. This project is open-source and non-commercial.<br />
            Built for learning and portfolio purposes only.
          </p>
        </footer>
      </div>
    </UserInfoProvider >
  );
}