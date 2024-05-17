import React from "react";
import styles from "./quotes.module.css";
import { useTranslation } from "react-i18next";

const Quotes = () => {
  const { t } = useTranslation("translation");
  return (
    <>
      <div className={styles.heading}>{t("quotes.heading")}</div>
      <div className={styles.container}>
        <div className={styles.card1}>
          <p>{t("quotes.elements.0.quote")}</p>
          <h5>{t("quotes.elements.0.author")}</h5>
        </div>
        <div className={styles.card2}>
          <p>{t("quotes.elements.1.quote")}</p>
          <h5>{t("quotes.elements.1.author")}</h5>
        </div>
      </div>
    </>
  );
};

export default Quotes;
