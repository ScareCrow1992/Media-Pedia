import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCastDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
}