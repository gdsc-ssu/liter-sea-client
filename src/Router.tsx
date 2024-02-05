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

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<div>main</div>} />
          <Route path="/signin" element={<div>signin</div>} />
          <Route path="/signout" element={<div>signout</div>} />

          {/** 단계별 확인 */}
          <Route path="/stage/1" element={<Multiple />} />
          <Route path="/stage/2" element={<Vocabulary />} />
          <Route path="/stage/result" element={<StageResult />} />

          {/** 오늘의 요약 */}
          <Route path="/summary/1" element={<TodaySummary />} />
          <Route path="/summary/result" element={<SummaryResult />} />

          {/* 복습 노트 */}
          <Route path="/review" element={<ReviewNote />} />

          <Route path="/vocabulary" element={<div>vocabulary</div>} />

          <Route path="/loading" element={<ResultLoading />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
