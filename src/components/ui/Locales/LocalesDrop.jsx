import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../LanguageContext";

const Locales = ({ additionalClassName }) => {
  const { changeLanguage } = useLanguage();
  const { i18n } = useTranslation("translation");

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
  };

  // useEffect(() => {
  //   const defaultLang = "ru";

  //   changeLanguage(defaultLang);
  //   i18n.changeLanguage(defaultLang);
  // }, [changeLanguage, i18n]);

  return (
    <div className={`locales locales--${additionalClassName}`}>
      <Link
        to="/"
        className="locales__btn"
        onClick={() => handleChangeLanguage("kz")}
      >
        KZ
      </Link>
      <Link
        to="/ru"
        className="locales__btn"
        onClick={() => handleChangeLanguage("ru")}
      >
        RU
      </Link>
    </div>
  );
};

export default Locales;
