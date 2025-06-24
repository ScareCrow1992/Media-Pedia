import DeleteButton from "src/components/common/DeleteButton";
import CommentButton from "src/components/common/Comment";
import EditButton from "src/components/common/EditButton";
import LikeToggleButton from "src/components/common/LikeToggleButton";

interface ReviewCardFooter {
  likeCnt: number;
  comments_count: number;
  isLiked: boolean;
  onLikeToggle: () => void;
  onCommentClick: () => void;
  className: string;
  onEditClick: () => void;
  onTryDelete: () => void;
}


export default function ReviewCardFooter({
  likeCnt,
  comments_count,
  isLiked,
  onLikeToggle,
  onCommentClick,
  className,
  onEditClick,
  onTryDelete
}: ReviewCardFooter) {
  return (
    <div className={className}>
      <div className="flex items-center h-10 px-4 text-xs gap-4 text-gray-600">
        <div>
          좋아요 <span className="ml-1">{likeCnt}</span>
        </div>
        <div>
          댓글 <span className="ml-1">{comments_count}</span>
        </div>
      </div>

      {/* 첨부 이미지 썸네일 */}
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="w-8 h-8">
          <LikeToggleButton isLiked={isLiked} onToggle={onLikeToggle} />
        </div>
        <div className="w-8 h-8">
          <CommentButton onClicked={onCommentClick} />
        </div>
        <EditButton onClick={onEditClick} className="w-8 h-8 rounded ml-auto" />
        <DeleteButton onClick={onTryDelete} className="w-8 h-8 rounded" />

      </div>
    </div>
  );
}