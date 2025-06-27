import { useState } from "react";
import { ThumbsUp } from "lucide-react";

interface LikeToggleButtonProps {
  isLiked: boolean;
  onToggle: () => void;
}

export default function LikeToggleButton({ isLiked, onToggle }: LikeToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="gap-1 w-full h-full"
    >
      <ThumbsUp
        className={`
          w-full h-full transition-colors
          ${isLiked ? "fill-pink-500 text-pink-500" : "text-black"}
        `}
      />
    </button>
  );
}