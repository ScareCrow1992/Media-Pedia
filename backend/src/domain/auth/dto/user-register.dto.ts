import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class UserRegisterDto {
    @IsNotEmpty()
    nickname: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}