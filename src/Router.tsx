import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Multiple from "./pages/StageCheck/Multiple";
import Vocabulary from "./pages/StageCheck/Vocabulary";
import ResultLoading from "./pages/ResultLoading/ResultLoading";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<div>main</div>} />
          <Route path="/signin" element={<div>signin</div>} />
          <Route path="/review" element={<div>review</div>} />
          <Route path="/signout" element={<div>signout</div>} />
          <Route path="/stage/1" element={<Multiple />} />
          <Route path="/stage/2" element={<Vocabulary />} />
          <Route path="/summary" element={<div>summary</div>} />
          <Route path="/vocabulary" element={<div>vocabulary</div>} />
          <Route path="/loading" element={<ResultLoading />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
