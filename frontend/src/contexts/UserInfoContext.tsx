import { UserCredential } from 'src/apis/user/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// react 컴포넌트 이외의 환경에서도 "로그아웃" 기능을 수행하기 위한 전역 함수
// ex) axios 인터셉터 함수
let externalSetUser: ((user: UserCredential | null) => void) | null = null;

function setExternalUserSetter(setter: typeof externalSetUser) {
  externalSetUser = setter;
}

export function getExternalUserSetter() {
  return externalSetUser;
}


// 로그아웃 : setUser(null) 만 호출해도 provider에서 자동으로 쿠키를 관리해줌
export interface UserInfoContextValue {
    user: UserCredential | null;
    setUser: (user: UserCredential | null) => void;
}

export const UserInfoContext = createContext<UserInfoContextValue | null>(null);

export const useUserInfo = () => {
    const ctx = useContext(UserInfoContext);
    if (!ctx) throw new Error('useUserInfo must be used inside UserInfoContext.Provider');
    return ctx;
};


// 쿠키 연동 수행
export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<UserCredential | null>(null);

  const setUser = (user: UserCredential | null) => {
    if (user) {
      Cookies.set('user', JSON.stringify(user), { expires: 1 });
    } else {
      Cookies.remove('user');
    }
    setUserState(user);
  };

  // 외부 참조 등록
  setExternalUserSetter(setUser);

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