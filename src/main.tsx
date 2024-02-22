import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./styles/globalStyles.ts";
import Router from "./Router.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyle />
      <Router />
    </React.StrictMode>
  </RecoilRoot>
);
