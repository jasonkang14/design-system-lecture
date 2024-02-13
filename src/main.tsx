import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/noto-sans-kr/400.css"; // Specify weight
import "@fontsource/noto-sans-kr/700.css"; // Specify weight
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
