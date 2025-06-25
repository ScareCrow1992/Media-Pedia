import { CastDTO } from "src/apis/cast/types";
import CastAndCrewPortrait from "../CastAndCrewPortrait";
import CastAndCrewDesc from "../CastAndCrewDesc";
import { Link } from "react-router-dom";

interface Prop {
  id: number;
  cast: CastDTO
  linkUrl: string;
}


export default function CastAndCrewCard({ id, cast, linkUrl }: Prop) {
  return (

    <Link to={`${linkUrl}/${id}`}>
      <div className="w-full h-[6rem] p-1">
        <div className="flex h-full bg-white border rounded shadow-sm">
          <CastAndCrewPortrait cast={cast} />
          <CastAndCrewDesc cast={cast} />
        </div>
      </div>
    </Link>
  );
}