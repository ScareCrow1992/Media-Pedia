import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDirectorDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
}