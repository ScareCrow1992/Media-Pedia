import { CastDTO } from "src/apis/cast/types";
import CastAndCrewPortrait from "../CastAndCrewPortrait";

interface Prop {
    cast: CastDTO
}

export default function CastAndCrewDesc({ cast }: Prop) {
  return (
    <div className="flex flex-col justify-center px-4">
      <p className="text-sm font-medium text-gray-800">{cast.name}</p>
      <p className="text-xs text-gray-500">조연 | 톰</p>
    </div>
  );
}