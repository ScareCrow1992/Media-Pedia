import { IsEmail, IsNumber, IsString } from "class-validator";


export class ProfileDTO {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  nickname: string;

  @IsString()
  review_cnt: number;

  static fromRaw(id: number, email: string, nickname: string, review_cnt: number): ProfileDTO {
    return{
      id: id,
      email : email,
      nickname: nickname,
      review_cnt: review_cnt
    };
  }
}