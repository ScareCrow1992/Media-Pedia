import { IsInt, IsString } from "class-validator";


export class CreateMovie2DirectorDto{
    @IsInt()
    director_id: number;

    @IsInt()
    movie_id: number;
}