
import { apiOptionalAuthclient, apiStrictAuthclient } from "../client";
import { logout } from "src/contexts/logout";
import { getCookie } from "src/util/cookie";
import { isTokenExpired } from "src/util/jwt";
import axios from "axios";

// // 인가 필요 요청 인터셉터 추가
// apiOptionalAuthclient.interceptors.request.use(
//   (config) => {
//     const token = getCookie("user", "access_token"); // 쿠키에서 토큰 읽기


//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );



// // 인가 필수 요청 인터셉터 추가
// apiStrictAuthclient.interceptors.request.use(
//   (config) => {
//     const token = getCookie("user", "access_token"); // 쿠키에서 토큰 읽기
//     console.log(token);

//     if (!token || isTokenExpired(token)) {
//       handleExpiredToken();
//       throw new axios.Cancel("Access token expired");
//     }
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // 토큰 만료시 후속조치
// function handleExpiredToken() {
//   console.warn("Access Token 만료됨. 로그아웃 처리");
//   logout();
//   // document.cookie = "user=; Max-Age=0";
//   // window.location.href = "/login";
// }