import HorizontalScroller from "src/components/common/HorizontalScrollerProps";
import CastAndCrewCard from "../CastAndCrewCard";
import { CastDTO } from "src/apis/cast/types";

interface Props {
    casts: CastDTO[];
}

export default function CastAndCrewScroll({ casts }: Props) {
    const grouped = casts.reduce((acc: CastDTO[][], cast, idx) => {
        const groupIdx = Math.floor(idx / 3);
        if (!acc[groupIdx]) acc[groupIdx] = [];
        acc[groupIdx].push(cast);
        return acc;
    }, []);

    return (
        <HorizontalScroller>
            {grouped.map((group, index) => (
                <div key={index} className="flex flex-col shrink-0 w-1/4">
                    {group.map((cast) => (
                        <CastAndCrewCard key={cast.id} cast={cast} />
                    ))}
                </div>
            ))}
        </HorizontalScroller>
    );
}