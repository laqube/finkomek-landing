import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";

import Header from "../sections/Header/Header";
import Mission from "../sections/Mission/Mission";
import Experts from "../sections/Experts/Experts";
import Quotes from "../sections/Quotes/Quotes";
import Courses from "../sections/Courses/Courses";
import Stories from "../sections/Stories/Stories";
import Calculators from "../sections/Calcualtors/Calculators";
import Mobile from "../sections/Mobile/Mobile";
import Footer from "../sections/Footer/Footer";

const Layout = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation("translation");
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    if (pathname === "/") {
      changeLanguage(language);
    }
  }, [pathname, language, changeLanguage]);
  return (
    <div classname="layout">
      <Header />

      <Mission />

      <Experts />

      <Quotes />

      <Courses />

      <Stories />

      <Calculators />

      <Mobile />

      <Footer />
    </div>
  );
};

export default Layout;
