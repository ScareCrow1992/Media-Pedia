import { fetchGetReviewComments } from "src/apis/services/review";
import { ReviewCommentDto } from "src/apis/services/review/types";
import { useQuery } from "@tanstack/react-query";
import ReviewComment from "src/components/common/ReviewComment";

interface Props {
  review_id: number;
}


export default function ReviewDetailPage_CommentsSection({ review_id }: Props) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery<ReviewCommentDto[]>({
    queryKey: ['review_comment', review_id],
    queryFn: () => fetchGetReviewComments(review_id, 10)
  });



  return (
    <div>
      {isLoading ? (
        <div className="text-center text-gray-500 mt-10">불러오는 중...</div>
      ) : isError || !comments ? (
        <div className="text-center text-red-500 mt-10">댓글을 불러올 수 없습니다.</div>
      ) : comments.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">아직 댓글이 없습니다.</div>
      ) : (
        comments.map(comment => (
          <ReviewComment key={comment.comment_id} reviewCommentDto={comment} />
        ))
      )}
    </div>
  );
}