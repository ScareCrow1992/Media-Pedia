import { getLikedUsersByReviewId } from "src/apis/services/review";
import { useQuery } from "@tanstack/react-query";
import { UserDto } from "src/apis/services/user/types";
import UserListItem from "src/components/common/UserListItem";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  review_id: number
}

export default function ReviewLikedUsersModal(
  { isOpen, onClose, review_id }: Props
) {
  const {
    data: user_dtos,
    isLoading,
    isError,
  } = useQuery<UserDto[]>({
    queryKey: ['reviews/like', review_id],
    queryFn: () => getLikedUsersByReviewId(review_id.toString()),
    enabled: !!review_id,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[35rem] h-[75vh] rounded-2xl relative flex flex-col overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold">좋아요한 사람들</h2>
          <button onClick={onClose}>
            ✕
            {/* <X className="w-5 h-5 text-gray-500 hover:text-black" /> */}
          </button>
        </div>

        {/* List */}
        <div className="overflow-y-auto max-h-[70vh]">

          <ul className="divide-y">
            {isLoading ? (
              <div className="text-center text-gray-500 mt-10">불러오는 중...</div>
            ) : isError || !user_dtos ? (
              <div className="text-center text-red-500 mt-10">댓글을 불러올 수 없습니다.</div>
            ) : user_dtos.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">아직 좋아요한 사람이 없습니다.</div>
            ) : (
              user_dtos.map(user_dto => (
                <li className="h-[5.5rem]" key={user_dto.id}>
                  <UserListItem dto={user_dto} />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}