import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class LoginDto {

    @ApiProperty({
      type: String,
      description :"로그인에 사용할 메일주소",
      example: "example@hostname"
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
      type: String, 
      description :"로그인 인증용 비밀번호",
      example: "password123"
    })
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}