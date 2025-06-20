import HorizontalScroller from "src/components/common/HorizontalScrollerProps";
import MovieCard from "src/components/common/MovieCard";
import SnapScrollItem from "src/components/common/SnapScrollItem";
import SnapScrollList from "src/components/common/SnapScrollList";
import CastAndCrewCard from "./CastAndCrewCard";
import CastAndCrewScroll from "./CastAndCrewScroll";
import { CastDTO } from "src/apis/cast/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCastsByMovie } from "src/apis/cast";


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

