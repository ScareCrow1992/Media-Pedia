import { CastDTO } from "src/apis/cast/types";
import CastAndCrewPortrait from "../CastAndCrewPortrait";
import CastAndCrewDesc from "../CastAndCrewDesc";

interface Prop{
  cast: CastDTO
}


export default function CastAndCrewCard({ cast }: Prop) {
  return (
    <div className="w-full h-[6rem] p-1">
      <div className="flex h-full bg-white border rounded shadow-sm">
        <CastAndCrewPortrait cast={cast} />
        <CastAndCrewDesc cast={cast} />
      </div>
    </div>
  );
}