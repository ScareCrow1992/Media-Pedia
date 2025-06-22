import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { ToggleReviewLikeResponseDto } from "src/apis/review/types";

interface LikeToggleButtonProps {
  isLiked: boolean;
  onSubmit: () => void;
}



export default function LikeToggleButton({isLiked, onSubmit}: LikeToggleButtonProps) {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => {setLiked(!liked); onSubmit();}}
      className="gap-1 w-full h-full"
    >
      <ThumbsUp
        className={`
                    w-full h-full transition-colors
                    ${liked ? "fill-pink-500 text-pink-500" : "text-black"}
                    `}
      />
    </button>
  );
}