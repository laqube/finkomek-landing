import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer_logo_wrapper}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
