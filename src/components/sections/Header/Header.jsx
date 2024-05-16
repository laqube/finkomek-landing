import React from "react";
import Locales from "../../ui/Locales/LocalesDrop";
import { useLanguage } from "../../../LanguageContext";
import "./header.css";
import Navigation from "../../Navigation/Navigation";

const Header = () => {
  const { language } = useLanguage();
  return (
    <div className="header">
      <div className="nav">
        <a
          href={language === "kz" ? `/` : `/${language}`}
          className="header__logo"
        >
          <img src="src\assets\logo.png" alt="logo" />
        </a>
        <Navigation />
        <Locales />
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="src\assets\profile.svg" alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
