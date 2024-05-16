import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../LanguageContext";
import "./locales.css";

const Locales = ({ additionalClassName }) => {
  const { changeLanguage } = useLanguage();
  const { i18n } = useTranslation("translation");

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`locales`}>
      <Link
        to="/"
        className="locales_btn"
        onClick={() => handleChangeLanguage("kz")}
      >
        KZ
      </Link>
      <Link
        to="/ru"
        className="locales_btn"
        onClick={() => handleChangeLanguage("ru")}
      >
        RU
      </Link>
    </div>
  );
};

export default Locales;
