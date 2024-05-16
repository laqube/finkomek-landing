import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./mission.module.css";

const Mission = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.h1}>{t("main.title")}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.p}>{t("main.article")}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <img src="/assets/mission_icon1.png" alt="icon1" />
              </div>
              <div className={styles.card_number}>
                {t("main.elements.0.number")}
              </div>
              <div className={styles.card_word}>
                {t("main.elements.0.word")}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <img src="/assets/mission_icon2.png" alt="icon1" />
              </div>
              <div className={styles.card_number}>
                {t("main.elements.1.number")}
              </div>
              <div className={styles.card_word}>
                {t("main.elements.1.word")}
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <img src="/assets/mission_icon3.png" alt="icon1" />
              </div>
              <div className={styles.card_number}>
                {t("main.elements.2.number")}
              </div>
              <div className={styles.card_word}>
                {t("main.elements.2.word")}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image_container}>
          <img
            src="/assets/mission_banner.png"
            alt="banner"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
