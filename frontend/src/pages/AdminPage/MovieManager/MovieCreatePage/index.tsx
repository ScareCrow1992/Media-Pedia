
import { adminPostMovie } from "src/apis/services/admin";
import MovieForm from "../components/Movieform";
import { CreateMovieDto, CreateUpdateMovieDto, toCreateMovieDto } from "src/apis/services/admin/type";




export default function MovieCreatePage() {
    const onSubmit = async (partial_dto: CreateUpdateMovieDto) => {
      const dto : CreateMovieDto = toCreateMovieDto(partial_dto);
  
      adminPostMovie(dto);
    }
  

  return (
    <MovieForm onSubmitProp={onSubmit}/>
  )
}
