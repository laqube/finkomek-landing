import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import Layout from "./components/Layout/Layout";
import { useLanguage } from "./LanguageContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { changeLanguage } = useLanguage();
  const { i18n } = useTranslation("translation");

  useEffect(() => {
    const parts = location.pathname.split("/");
    const language = parts[parts.length - 1];

    if (language === "kz") {
      changeLanguage(language);
      i18n.changeLanguage(language);
      navigate("/");
    } else if (language === "ru") {
      changeLanguage(language);
      i18n.changeLanguage(language);
      navigate("/ru");
    }
  }, [language, navigate, changeLanguage]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} /> /{">"}
        <Route path="/ru/*" element={<Layout />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default withTranslation()(App);
