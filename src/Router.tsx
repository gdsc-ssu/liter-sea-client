import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Multiple from "./pages/Stage/StageCheck/Multiple";
import Vocabulary from "./pages/Stage/StageCheck/Vocabulary";
import ResultLoading from "./pages/ResultLoading/ResultLoading";
import StageResult from "./pages/Stage/Result/StageResult";
import TodaySummary from "./pages/TodaySummary/TodaySummary";
import SummaryResult from "./pages/TodaySummary/SummaryResult";
import ReviewNote from "./pages/ReviewNote/ReviewNote";
import Summary from "./pages/ReviewNote/Summary";
import Vocabook from "./pages/Vocabulary/Vocabulary";
import VocabookContents from "./pages/Vocabulary/VocabularyContents";
import VocabookStudy from "./pages/Vocabulary/VocabularyStudy";
import Main from "./pages/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import ProtectedRoute from "./Routes/ProtectedRoute";
import NotFound from "./pages/404/NotFound";
import SigningIn from "./pages/SignIn/SigningIn";
import SignOut from "./pages/SignOut/SignOut";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="signingin" element={<SigningIn />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Main />} />

            {/** 단계별 확인 */}
            <Route path="/stage/1" element={<Multiple />} />
            <Route path="/stage/2" element={<Vocabulary />} />
            <Route path="/stage/result" element={<StageResult />} />

            {/** 오늘의 요약 */}
            <Route path="/summary/1" element={<TodaySummary stage={1} />} />
            <Route path="/summary/2" element={<TodaySummary stage={2} />} />
            <Route path="/summary/3" element={<TodaySummary stage={3} />} />
            <Route path="/summary/4" element={<TodaySummary stage={4} />} />
            <Route path="/summary/5" element={<TodaySummary stage={5} />} />
            <Route path="/summary/result" element={<SummaryResult />} />

            {/* 복습 노트 */}
            <Route path="/review" element={<ReviewNote />} />
            <Route path="/review/1" element={<Summary />} />

            {/* 단어장 */}
            <Route path="/vocabulary" element={<Vocabook />} />
            <Route path="/vocabulary/id" element={<VocabookContents />} />
            <Route path="/vocabulary/id/study" element={<VocabookStudy />} />

            <Route path="/loading" element={<ResultLoading />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
