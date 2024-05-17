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
      <div className="containerFluid">
        <Header />
      </div>

      <div className="containerFluid">
        <Mission />
      </div>

      <div className="containerFluid">
        <Experts />
      </div>

      <div className="container">
        <Quotes />
      </div>

      {/* <div className="container">
        <Courses />
      </div> */}

      {/* <div className="container">
        <Stories />
      </div> */}

      {/* <div className="container">
        <Calculators />
      </div> */}
      <div className="container">
        <Mobile />
      </div>

      <div className="containerFluid">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
