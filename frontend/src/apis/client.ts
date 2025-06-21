import { isTokenExpired } from 'src/util/jwt';
import { getCookie } from 'src/util/coocie';
import axios from 'axios';
import { logout } from 'src/contexts/logout';


// 인가 불필요 요청
export const apiPublicClient = axios.create({
  // baseURL: 'http://localhost:3300/api', // 프록시로 대체하기 위해 절대경로 사용 금지
  baseURL: '/api',
  withCredentials: true, // 로그인 세션 쿠키 등 필요시
});


// 인가 필요 요청
export const apiAuthclient = axios.create({
  // baseURL: 'http://localhost:3300/api', // 프록시로 대체하기 위해 절대경로 사용 금지
  baseURL: '/api',
  withCredentials: true, // 로그인 세션 쿠키 등 필요시
})


// 인가 필요 요청 인터셉터 추가
apiAuthclient.interceptors.request.use(
  (config) => {
    const token = getCookie("user", "access_token"); // 쿠키에서 토큰 읽기

    if(!token || isTokenExpired(token)){
      handleExpiredToken();
      throw new axios.Cancel("Access token expired");
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰 만료시 후속조치
function handleExpiredToken() {
  console.warn("Access Token 만료됨. 로그아웃 처리");
  logout();
  // document.cookie = "user=; Max-Age=0";
  // window.location.href = "/login";
}