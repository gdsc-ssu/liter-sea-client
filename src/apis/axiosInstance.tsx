import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
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
  saveWord: () => axiosInstance.post("api/v1/word"),
  loadWordbyWordId: (wordId: number) =>
    axiosInstance.get("api/v1/word", {
      params: { query: wordId },
    }),
  loadWordList: () => axiosInstance.get("api/v1/word/wordList"),
};

export const todayApi = {
  getResult: () => axiosInstance.post("api/v1/today/post", {}),
  loadPassages: () => axiosInstance.get("api/v1/today"),
};

export const userApi = {
  signIn: () => axiosInstance.get("api/v1/user/login"), //"api/v1/user/google-login"
};

export const reviewApi = {
  loadReviewBySolvedId: (solve_id: number) =>
    axiosInstance.get("api/v1/review", {
      params: { query: solve_id },
    }),
  loadReviewByCreateAt: (createAt: string) =>
    axiosInstance.get("api/v1/review", {
      params: { query: createAt },
    }),
  loadReview: () => axiosInstance.get("api/v1/review/test"),
  loadReviewDayList: () => axiosInstance.get("api/v1/review/test/dayList"),
};
