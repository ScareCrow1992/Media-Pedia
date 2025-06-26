import { CastDTO } from "src/apis/cast/types";

interface Prop {
  cast: CastDTO
}



export default function CastAndCrewPortrait({ cast }: Prop) {
  return (
    <div className="h-full aspect-square bg-gray-200 rounded overflow-hidden">
      {/* 추후 이미지 연동 시 */}
      <img src="/casts/cast_example.jpg" alt={cast.name} className="object-cover w-full h-full" />
      {/* <img src={cast.imageUrl} alt={cast.name} className="object-cover w-full h-full" /> */}
    </div>
  );
}