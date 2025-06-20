import { UserDTO } from 'src/apis/user/types';
import { createContext, useContext } from 'react';

export interface UserInfoContextValue {
    user: UserDTO | null;
    // setUser: (user: UserDTO | null) => void;
}

export const UserInfoContext = createContext<UserInfoContextValue | null>(null);

export const useUserInfo = () => {
    const ctx = useContext(UserInfoContext);
    if (!ctx) throw new Error('useUserInfo must be used inside UserInfoContext.Provider');
    return ctx;
};