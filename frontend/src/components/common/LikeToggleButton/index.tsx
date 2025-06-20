import { useState } from "react";
import { ThumbsUp } from "lucide-react";

export default function LikeToggleButton() {
    const [liked, setLiked] = useState(false);

    return (
        <button
            onClick={() => setLiked(!liked)}
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