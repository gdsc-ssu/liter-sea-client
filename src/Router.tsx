import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/signin" element={<div>signin</div>} />
        <Route path="/review" element={<div>review</div>} />
        <Route path="/signout" element={<div>signout</div>} />
        <Route path="/stage" element={<div>stage</div>} />
        <Route path="/summary" element={<div>summary</div>} />
        <Route path="/vocabulary" element={<div>vocabulary</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
