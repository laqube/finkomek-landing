import React from "react";
import styles from "./mobile.module.css";
import { useTranslation } from "react-i18next";

const Mobile = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.heading}>{t("mobile.heading")}</div>
          <div className={styles.bubble}>
            <h2>{t("mobile.bubble.heading2")}</h2>
            <p>{t("mobile.bubble.paragraph")}</p>
          </div>
        </div>

        <div className={styles.mobile_image_wrapper}>
          <img
            className={styles.mobile_image}
            src="/assets/mobile_banner.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
