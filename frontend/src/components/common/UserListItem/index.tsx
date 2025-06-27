// import { ProfileDTO } from "src/apis/services/profile/types"
import { UserDto } from "src/apis/services/user/types"

interface Prop {
  dto: UserDto
}



export default function UserListItem({ dto }: Prop) {

  return (
    <div className="flex items-center justify-between px-4 py-3 h-full">
      {/* 왼쪽: 프로필 이미지 + 닉네임 + 서브 텍스트 */}
      <div className="flex items-center gap-3 h-full">
        <img
          src="/casts/cast_example.jpg"
          alt="프로필 이미지"
          className="h-full aspect-sqp rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="font-semibold text-sm text-gray-900">{dto.nickname}</span>
          <span className="text-sm text-gray-500">{dto.email}</span>
        </div>
      </div>

      {/* 오른쪽: 팔로우 버튼 */}
      <button className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold hover:bg-pink-200">
        팔로우
      </button>
    </div>
  )
}