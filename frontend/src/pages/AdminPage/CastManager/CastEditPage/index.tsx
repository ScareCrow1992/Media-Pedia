import { CreateCastDto, CreateUpdateMovieDto } from "src/apis/services/admin/type";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CastForm from "../components/CastForm";
import { adminUpdateCast } from "src/apis/services/admin";
import { CastDTO } from "src/apis/services/cast/types";
import { useQuery } from "@tanstack/react-query";
import { fetchGetCast } from "src/apis/services/cast";



export default function CastEditPage() {

  const { cast_id } = useParams();


  const {
    data: cast,
    isLoading,
    isError,
  } = useQuery<CastDTO>({
    queryKey: ['cast', cast_id],
    queryFn: () => fetchGetCast(cast_id!),
    enabled: !!cast_id,
  });


  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !cast) {
    return <div className="text-red-500 text-center mt-10">배우 정보를 불러올 수 없습니다.</div>;
  }

  if (!cast_id) {
    return <div>잘못된 배우 id 입니다.</div>
  }


  // console.log(cast);



  const onSubmit = async (dto: CreateCastDto) => {

    try {
      adminUpdateCast(cast_id, dto);
    }
    catch (error: any) {
      console.log("Error");
    }
    // const dto : CreateMovieDto = toCreateMovieDto(partial_dto);

    // adminPostMovie(dto);
  }



  return (
    <CastForm castDto={cast} onSubmitProp={onSubmit} />
  );

}