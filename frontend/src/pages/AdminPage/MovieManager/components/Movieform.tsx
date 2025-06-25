import { useForm } from "react-hook-form";
import { Calendar } from "src/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "src/components/ui/popover";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import { CreateUpdateMovieDto  } from "src/apis/admin/type";
import { adminPostMovie } from "src/apis/admin";
import { MovieDetailDTO } from "@/apis/movie/types";
import { useEffect } from "react";

interface Props {
  movieDto ?: MovieDetailDTO
  onSubmitProp: (createMovieDTO : CreateUpdateMovieDto) => Promise<void>;
}

export default function MovieForm({movieDto, onSubmitProp} : Props) {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<CreateUpdateMovieDto >();

  useEffect(() => {
    if (movieDto) {
      reset(movieDto);
      // setValue("title", movieDto.title);
      // setValue("description", movieDto.description)
      // setValue("releaseDate", movieDto.releaseDate);
      // setValue("runningTime", movieDto.runningTime);
    }
  }, [movieDto, setValue])

  const releaseDate = watch("releaseDate");

  const onSubmit = (data: CreateUpdateMovieDto ) => {
    const finalData: CreateUpdateMovieDto  = {
      ...data,
      slug: data.title,
      releaseDate: data.releaseDate
    };


    try {
      if(onSubmitProp)
        onSubmitProp(finalData);
      // adminPostMovie(finalData);
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
    navigate("/admin/movies");
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">영화 정보</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* 제목 입력 */}
        <div>
          <label className="block mb-1 font-medium">제목</label>
          <input
            {...register("title", { required: "제목은 필수입니다" })}
            className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
            placeholder="영화 제목을 입력하세요"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* 설명 입력 */}
        <div>
          <label className="block mb-1 font-medium">설명</label>
          <textarea
            rows={5}
            {...register("description", { required: "설명은 필수입니다" })}
            className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
            placeholder="영화 설명을 입력하세요"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* 개봉일 선택 */}
        <div>
          <label className="block mb-1 font-medium">개봉일</label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-full text-left p-2 rounded bg-zinc-900 border border-zinc-700"
              >
                {releaseDate
                  ? format(releaseDate, "yyyy-MM-dd")
                  : "날짜 선택"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white text-black">
              <Calendar
                mode="single"
                selected={releaseDate}
                onSelect={(date) => setValue("releaseDate", date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* 상영 시간 */}
        <div>
          <label className="block mb-1 font-medium">상영 시간 (분)</label>
          <input
            {...register("runningTime", { required: "상영시간은 필수입니다" })}
            className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
            placeholder="상영시간을 입력하세요"
            type="number"
          />
          {errors.runningTime && (
            <p className="text-red-500 text-sm">{errors.runningTime.message}</p>
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
