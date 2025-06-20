export interface UserDTO{
    id: number;
  email: string;
//   password: string;
  nickname: string;
  profileImageUrl?: string;
  bio?: string;
  provider?: string;
  socialId?: string;
}