export interface UserCredential {
  id: number;
  email: string;
  //   password: string;
  nickname: string;
  profileImageUrl?: string;
  bio?: string;
  provider?: string;
  socialId?: string;
  access_token: string;
}



export interface UserDto {
  id: number;

  email: string;

  nickname: string;

  profileImageUrl?: string;

  bio?: string;

  provider?: string;

  socialId?: string;
}