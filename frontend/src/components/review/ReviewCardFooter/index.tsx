import DeleteButton from "src/components/common/DeleteButton";
import CommentButton from "src/components/common/Comment";
import EditButton from "src/components/common/EditButton";
import LikeToggleButton from "src/components/common/LikeToggleButton";

interface ReviewCardFooterProps {
  likeCnt: number;
  comments_count: number;
  isLiked: boolean;
  onLikeToggle: () => void;
  onCommentClick: () => void;
  className: string;
  onEditClick: () => void;
  onTryDelete: () => void;
  onLikesCntClick: () => void;
}


export default function ReviewCardFooter({
  likeCnt,
  comments_count,
  isLiked,
  onLikeToggle,
  onCommentClick,
  className,
  onEditClick,
  onTryDelete,
  onLikesCntClick
}: ReviewCardFooterProps) {


  return (
    <div className={className}>
      <div className="flex items-center h-10 px-4 text-xs gap-4 text-gray-600 font-medium tracking-tight font-NatoSansKR">
        <div>
          <button onClick={onLikesCntClick}>좋아요  {likeCnt}</button>
        </div>
        <div>
          <span>댓글  {comments_count}</span>
        </div>
      </div>

      {/* 첨부 이미지 썸네일 */}
      <div className="flex items-center gap-2 px-4 pb-5 tracking-tight font-NatoSansKR">
        <div className="w-6 h-6">
          <LikeToggleButton isLiked={isLiked} onToggle={onLikeToggle} />
        </div>
        <div className="w-6 h-6">
          <CommentButton onClicked={onCommentClick} />
        </div>
        <EditButton onClick={onEditClick} className="w-6 h-6 ml-auto" />
        <DeleteButton onClick={onTryDelete} className="w-6 h-6" />

      </div>
    </div>
  );
}