import axios from 'axios';

export const apiClient = axios.create({
    // baseURL: 'http://localhost:3300/api', // 프록시로 대체하기 위해 절대경로 사용 금지
    baseURL: '/api',
    withCredentials: true, // 로그인 세션 쿠키 등 필요시
});