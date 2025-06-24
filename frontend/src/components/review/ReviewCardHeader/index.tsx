interface ReviewCardHeaderProps {
  nickname: string;
  rating: number;
}

export default function ReviewCardHeader({nickname, rating} : ReviewCardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 h-16 bg-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <span className="text-sm font-medium">{nickname}</span>
      </div>
      <div className="flex items-center gap-1 text-sm">
        <span className="text-yellow-400">★</span>
        <span className="font-semibold">{rating / 2}</span>
      </div>
    </div>
  );
}