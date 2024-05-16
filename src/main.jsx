import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { LanguageContextProvider } from "./LanguageContext.jsx";
import "./LanguageProvider.jsx";
import LanguageProvider from "./LanguageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </LanguageProvider>
  </BrowserRouter>
);
