import { CreateCastDto, CreateUpdateMovieDto } from "@/apis/admin/type";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CastForm from "../components/CastForm";
import { adminPostCast } from "src/apis/admin";



export default function CastCreatePage() {
  const onSubmit = async (dto: CreateCastDto) => {
    // console.log(dto);

    try{
      adminPostCast(dto);
    }
    catch(error:any){
      console.log("Error");
    }
    // const dto : CreateMovieDto = toCreateMovieDto(partial_dto);

    // adminPostMovie(dto);
  }


  return (
    <CastForm onSubmitProp={onSubmit} />
  );

}