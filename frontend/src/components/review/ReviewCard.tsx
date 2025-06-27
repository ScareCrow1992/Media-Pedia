import { CreateReviewCommentDto, EditReviewDto, ReviewDTO } from "src/apis/services/review/types";
import { fetchDeleteReview, fetchEditReview, fetchPostComment } from "src/apis/services/review";
import CommentModalV2 from "../common/Modal/modals/CommentModalV2";
import ReviewCardHeader from "./ReviewCardHeader";
import ReviewCardDesc from "./ReviewCardDesc";
import ReviewCardFooter from "./ReviewCardFooter";
import { useReviewLike } from "src/hooks/useReviewLike";
import { useModal } from "src/hooks/useModal";
import ContentEditModal from "../common/Modal/modals/ContentEditModal";
import { useUserInfo } from "src/contexts/UserInfoContext";
import ConfirmModal from "../common/Modal/modals/ConfirmModal";
import ReviewLikedUsersModal from "../common/Modal/modals/ReviewLikedUsersModal";

interface Prop {
  review_card_url: string | null;
  review: ReviewDTO;
}

export default function ReviewCard({ review_card_url, review }: Prop) {

  const { user } = useUserInfo();

  const { isLiked, likeCnt, toggle } = useReviewLike(review.id, review.is_liked, review.likes_count);

  const {
    isOpen: comment_isOpen,
    toggle: comment_toggleModal,
    close: comment_closeModal } = useModal();

  const {
    isOpen: edit_isOpen,
    toggle: edit_toggleModal,
    close: edit_closeModal } = useModal();

  const {
    isOpen: delete_isOpen,
    toggle: delete_toggleModal,
    close: delete_closeModal } = useModal();

  const {
    isOpen: likes_isOpen,
    toggle: likes_toggleModal,
    close: likes_closeModal } = useModal();

  return (
    <div className="flex flex-col w-full h-full rounded-lg overflow-hidden bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)]">
      {/* 헤더 영역 */}
      <ReviewCardHeader nickname={review.nickname} rating={review.rating} />

      {/* 내용 */}
      <ReviewCardDesc url={review_card_url} content={review.content} className="px-4 py-3 text-sm leading-relaxed grow line-clamp-3 tracking-tight font-NatoSansKR" />

      {/* 하단 기능 바 */}
      <ReviewCardFooter
        likeCnt={likeCnt}
        comments_count={review.comments_count}
        isLiked={isLiked}
        onLikeToggle={toggle}
        onCommentClick={comment_toggleModal}
        onEditClick={edit_toggleModal}
        onTryDelete={delete_toggleModal}
        onLikesCntClick={likes_toggleModal}
        className="flex flex-col bg-gray-50 border-t"
      />

      {/* 코멘트 모달 */}
      {
        comment_isOpen && (
          <CommentModalV2
            review_id={review.id}
            isOpen={comment_isOpen}
            onClose={comment_closeModal}
            onSubmit={(text) => {

              const comment_data: CreateReviewCommentDto = {
                content: text,
              }

              fetchPostComment(review.id, comment_data);
              comment_closeModal();
            }}
          />
        )
      }

      {edit_isOpen && (
        <ContentEditModal
          isOpen={edit_isOpen}
          onClose={edit_closeModal}
          onSubmit={(text) => {
            // 수정 로직
            if (user) {
              const editReviewDto: EditReviewDto = {
                review_id: review.id,
                rating: review.rating,
                content: text
              };
              fetchEditReview(review.id, editReviewDto);
            }

            edit_closeModal();
          }}
        />
      )}

      {delete_isOpen && (
        <ConfirmModal
          message="리뷰를 삭제하시겠어요?"
          isOpen={delete_isOpen}
          onConfirm={()=>{
            //fetch
            fetchDeleteReview(review.id);
            delete_closeModal();
          }}
          onCancel={delete_closeModal}
        />
      )}

      {likes_isOpen && (
        <ReviewLikedUsersModal
          isOpen={likes_isOpen}
          onClose={likes_closeModal}
          review_id={review.id}
        />
      )}

    </div>
  );
}