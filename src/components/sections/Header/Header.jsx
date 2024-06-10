import React from "react";
import Locales from "../../ui/Locales/LocalesDrop";
import { useLanguage } from "../../../LanguageContext";
import styles from "./header.module.css";
import Navigation from "../../Navigation/Navigation";

const Header = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <a
          href={language === "kz" ? `/` : `/${language}`}
          className={styles.header__logo}
        >
          <img src="assets/logo.png" alt="logo" />
        </a>
        <Navigation />
        <Locales />
        <a href="https://finkomek-web.vercel.app/">
          <img src="assets/profile.svg" alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
