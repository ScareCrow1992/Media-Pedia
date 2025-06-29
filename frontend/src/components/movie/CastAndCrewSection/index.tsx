import CastAndCrewScroll from "./CastAndCrewScroll";
import { CastDTO } from "src/apis/services/cast/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCastsByMovie } from "src/apis/services/cast";


export default function CastAndCrewSection() {

    const { id } = useParams();

    const {
        data: casts,
        isLoading,
        isError,
    } = useQuery<CastDTO[]>({
        queryKey: ['cast', id],
        queryFn: () => fetchCastsByMovie(id!)
    });

    if (isLoading) {
        return <div className="text-white text-center mt-10">로딩 중...</div>;
    }
    if (isError || !casts) {
        return <div className="text-red-500 text-center mt-10">출연진 정보를 불러올 수 없습니다.</div>;
    }



    return (
        <>
            <CastAndCrewScroll casts = {casts} />
        </>
    );
}

