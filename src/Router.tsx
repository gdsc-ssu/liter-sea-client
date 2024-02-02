import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import StageCheck from "./pages/StageCheck/StageCheck";

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
          <Route path="/stage" element={<StageCheck />} />
          <Route path="/summary" element={<div>summary</div>} />
          <Route path="/vocabulary" element={<div>vocabulary</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
