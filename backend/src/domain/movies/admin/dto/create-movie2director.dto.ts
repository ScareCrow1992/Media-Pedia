import { IsInt, IsString } from "class-validator";


export class CreateMovie2DirectorDto{
    @IsString()
    directorName: string;

    @IsInt()
    movie_id: number;
}