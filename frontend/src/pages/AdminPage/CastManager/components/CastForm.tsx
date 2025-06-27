import { CreateCastDto } from "src/apis/services/admin/type";
import { CastDTO } from "src/apis/services/cast/types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


interface Props {
  castDto ?: CastDTO
  onSubmitProp: (createCastDTO: CreateCastDto) => Promise<void>;
}



export default function CastForm({ castDto, onSubmitProp }: Props) {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<CreateCastDto>();


  useEffect(()=>{
    if(castDto){
      // reset(castDto)
      setValue("name", castDto.name)
    }
  }, [castDto, setValue])
  

  const onSubmit = (data: CreateCastDto) => {

    // console.log(data);

    try {
      if (onSubmitProp)
        onSubmitProp(data);
    }
    catch (error: any) {
      if (error.response) {
        console.error(error.response.data.message || "포스팅 실패")
      }
      else {
        console.error("서버와 연결할 수 없습니다.")
      }

    }

    reset();
    navigate("/admin/casts");
  }


  return (

    <div className="w-full max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">배우 정보</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* 이름 입력 */}
        <div>
          <label className="block mb-1 font-medium">이름</label>
          <input
            {...register("name", { required: "이름은 필수입니다" })}
            className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
            placeholder="배우의 이름을 입력하세요"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>


        {/* 제출 버튼 */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          등록하기
        </button>
      </form>
    </div>

  );
}