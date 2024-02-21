import { PostSummary } from "@/pages/TodaySummary/TodaySummary";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("accessToken");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
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
  loadBoatInfo: () => axiosInstance.get("api/v1/home/boatInfo"),
  loadBadgeInfo: () => axiosInstance.get("api/v1/home/badgeInfo"),
};

export const wordApi = {
  saveWord: (word: string) => axiosInstance.post(`api/v1/word/${word}`),
  loadWordbyWordId: (wordId: number) =>
    axiosInstance.get("api/v1/word", {
      params: { query: wordId },
    }),
  loadWordList: () => axiosInstance.get("api/v1/word/wordList"),
};

export const todayApi = {
  getResult: ({ articleId, summary }: PostSummary) =>
    // 수정 필요
    axiosInstance.post("api/v1/today/post", {
      userSummaryList: [
        {
          articleId: articleId,
          summary: summary,
        },
      ],
    }),
  loadPassages: () => axiosInstance.get("api/v1/today/"),
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
