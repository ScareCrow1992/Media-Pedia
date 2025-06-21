import { getExternalUserSetter } from './UserInfoContext';

export function logout() {
  const externalSetUser = getExternalUserSetter();

  if (externalSetUser) {
    externalSetUser(null);
  }

  // 보호적 쿠키 제거(옵션 무시)
  document.cookie = "user=; Max-Age=0";

  // 리디렉션 (새로고침 O)
  window.location.href = "/";
}