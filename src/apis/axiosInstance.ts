import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 2000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);

export const homeApi = {
  loadMain: () => axiosInstance.get("api/v1/home/main"),
  loadBoatInfo: () => axiosInstance.get("api/v1/home/boatinfo"),
  loadBadgeInfo: () => axiosInstance.get("api/v1/home/badgeinfo"),
};

export const wordApi = {
  loadWord: (wordId: number) =>
    axiosInstance.get("api/v1/word", {
      params: { query: wordId },
    }),
  saveWord: () => axiosInstance.post("api/v1/word"), //원리 물어보기
  loadWordList: () => axiosInstance.get("api/v1/word/wordList"),
};

export const todayApi = {
  getResult: () => axiosInstance.post("today/post", {}),
  loadPassages: () => axiosInstance.get("today/"),
};

export const userApi = {
  signIn: () => axiosInstance.get("v1/api/user/login"), //"v1/api/user/google-login"
};

export const reviewApi = {
  loadReview: () => axiosInstance.get("review/test"),
};
