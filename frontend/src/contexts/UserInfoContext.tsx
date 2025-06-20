import { UserDTO } from 'src/apis/user/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';


// 로그아웃 : setUser(null) 만 호출해도 provider에서 자동으로 쿠키를 관리해줌
export interface UserInfoContextValue {
    user: UserDTO | null;
    setUser: (user: UserDTO | null) => void;
}

export const UserInfoContext = createContext<UserInfoContextValue | null>(null);

export const useUserInfo = () => {
    const ctx = useContext(UserInfoContext);
    if (!ctx) throw new Error('useUserInfo must be used inside UserInfoContext.Provider');
    return ctx;
};


// 쿠키 연동 수행
export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<UserDTO | null>(null);

  const setUser = (user: UserDTO | null) => {
    if (user) {
      Cookies.set('user', JSON.stringify(user), { expires: 1 });
    } else {
      Cookies.remove('user');
    }
    setUserState(user);
  };

  useEffect(() => {
    const saved = Cookies.get('user');
    if (saved) {
      try {
        setUserState(JSON.parse(saved));
      } catch {
        Cookies.remove('user');
      }
    }
  }, []);

  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {children}
    </UserInfoContext.Provider>
  );
};