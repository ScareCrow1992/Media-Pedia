import { useUserInfo } from "src/contexts/UserInfoContext";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProfileDTO } from "src/apis/services/profile/types";
import { fetchGetProfile } from "src/apis/services/profile";

export default function UserProfilePage() {

  const { id } = useParams();
  const { user } = useUserInfo();

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery<ProfileDTO>({
    queryKey: ['profile', id],
    queryFn: () => fetchGetProfile(id!)
  });

  if (isLoading) {
    return <div className="text-white text-center mt-10">로딩 중...</div>;
  }
  if (isError || !profile) {
    return <div className="text-red-500 text-center mt-10">프로필 정보를 불러올 수 없습니다.</div>;
  }

  

  // user가 null이 아니면서, user.id와 id가 일치한다면, 프로필 수정 버튼을 활성화한다.
  const isSelfProfile: Boolean = user?.id === Number(id);

  const profile_id = profile.id;
  const profile_email = profile.email;
  const profile_nickname = profile.nickname;
  const profile_review_cnt = profile.review_cnt;
  

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow">
      {/* 상단 프로필 섹션 */}
      <div className="flex justify-between">
        {/* 왼쪽: 프로필 이미지 + 정보 */}
        <div className="flex gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            {/* 프로필 이미지 */}
            <svg
              viewBox="0 0 24 24"
              className="w-20 h-20 text-gray-400"
              fill="currentColor"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold">{profile_nickname}</h2>
            <p className="text-gray-500 text-sm">{profile_email}</p>

            <div className="text-sm text-gray-600 mt-1 space-x-2">
              <span>팔로워 <span className="font-bold">0</span></span>
              <span>|</span>
              <span>팔로잉 <span className="font-bold">1</span></span>
            </div>
          </div>
        </div>

        {/* 오른쪽 아이콘들 */}
        <div className="flex gap-3 items-start">
          <button className="text-2xl">👤➕</button>
          <button className="text-2xl">⚙️</button>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-4 mt-6">
        {isSelfProfile && (
          <button className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium">
            프로필 수정
          </button>
        )}

        <button className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium">
          프로필 공유
        </button>
      </div>

      {/* 하단 요약 영역 */}
      <div className="mt-6 border-t pt-6 grid grid-cols-3 text-center text-sm text-gray-700">
        <Link to={`reviews`}>
          <div className="text-xl font-bold">{profile_review_cnt}</div>
          <div className="mt-1">평가</div>
        </Link>
        <div>
          <div className="text-xl font-bold">0</div>
          <div className="mt-1">코멘트</div>
        </div>
        <div>
          <div className="text-xl font-bold">0</div>
          <div className="mt-1">컬렉션</div>
        </div>
      </div>
    </div>
  );
}