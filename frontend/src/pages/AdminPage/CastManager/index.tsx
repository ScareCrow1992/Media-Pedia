import { fetchGetLatestMovies } from "src/apis/movie";
import { Link } from "react-router-dom";
import { MovieDetailDTO } from "src/apis/movie/types";
import { useState } from "react";
import MovieCard from "src/components/common/MovieCard";
import CastAndCrewCard from "src/components/movie/CastAndCrewSection/CastAndCrewCard";
import { fetchGetCasts } from "src/apis/cast";
import { CastDTO } from "src/apis/cast/types";

export default function CastManager() {

  const [castList, setCastList] = useState<CastDTO[]>([]);

  const handleRefresh = async () => {

    try {
      const casts_details: CastDTO[] = await fetchGetCasts("20");
      setCastList(casts_details)
    }
    catch (error: any) {
      setCastList([]);
      console.error("에러발생");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 gap-4">
        <h1 className="text-xl font-bold">🎬 영화 관리</h1>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white ml-auto px-4 py-2 rounded hover:bg-blue-700"
        >
          새로고침
        </button>
        <Link
          to="/admin/casts/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + 배우 추가
        </Link>
      </div>


      <div className="min-h-0 overflow-y-auto grow border border-gray-300 p-4 rounded">
        {castList.length === 0 ? (
          <p className="text-gray-500">영화 목록이 여기에 표시됩니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {castList.map((cast) => (
              <CastAndCrewCard key={cast.id} id={cast.id} cast={cast} linkUrl="/admin/casts/edit" />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}