import axios from 'axios';

export const lolApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 환경변수로 지정한 BASE_URL을 사용
});
