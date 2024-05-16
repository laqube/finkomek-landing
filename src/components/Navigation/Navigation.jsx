import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";
import "./navigation.css";

const Navigation = () => {
  const { t } = useTranslation("translation");

  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navigation">
      <CSSTransition in={isActive} classNames="navigation__alert" timeout={200}>
        <ul
          className={
            isActive
              ? "navigation__list--open navigation__list"
              : "navigation__list--close navigation__list"
          }
        >
          <li className="navigation__item">
            <a
              className="navigation__link navigation__link--active"
              href="#home"
              onClick={() => setIsActive(false)}
            >
              {t("global.main")}
            </a>
          </li>
          <li className="navigation__item">
            <a
              className="navigation__link"
              href="#experts"
              onClick={() => setIsActive(false)}
            >
              {t("global.experts")}
            </a>
          </li>
          <li className="navigation__item">
            <a
              className="navigation__link"
              href="#courses"
              onClick={() => setIsActive(false)}
            >
              {t("global.courses")}
            </a>
          </li>
          <li className="navigation__item">
            <a
              className="navigation__link"
              href="#calcs"
              onClick={() => setIsActive(false)}
            >
              {t("global.calcs")}
            </a>
          </li>
          <li className="navigation__item">
            <a
              className="navigation__link"
              href="#mobile"
              onClick={() => setIsActive(false)}
            >
              {t("global.mobile")}
            </a>
          </li>
        </ul>
      </CSSTransition>
      <span
        className={
          isActive
            ? "navigation__menu navigation__menu--close"
            : "navigation__menu navigation__menu--open"
        }
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? (
          <CSSTransition
            in={isActive}
            classNames="navigation__alert"
            timeout={200}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M15.7578 12.5L20.644 7.61377C21.2437 7.01416 21.2437 6.04199 20.644 5.44189L19.5581 4.35596C18.9585 3.75635 17.9863 3.75635 17.3862 4.35596L12.5 9.24219L7.61377 4.35596C7.01416 3.75635 6.04199 3.75635 5.44189 4.35596L4.35596 5.44189C3.75635 6.0415 3.75635 7.01367 4.35596 7.61377L9.24219 12.5L4.35596 17.3862C3.75635 17.9858 3.75635 18.958 4.35596 19.5581L5.44189 20.644C6.0415 21.2437 7.01416 21.2437 7.61377 20.644L12.5 15.7578L17.3862 20.644C17.9858 21.2437 18.9585 21.2437 19.5581 20.644L20.644 19.5581C21.2437 18.9585 21.2437 17.9863 20.644 17.3862L15.7578 12.5Z"
                fill="white"
              />
            </svg>
          </CSSTransition>
        ) : (
          <CSSTransition
            in={isActive}
            classNames="navigation__alert"
            timeout={200}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M22.6562 20.3125H2.34375C2.13655 20.3125 1.93784 20.3948 1.79132 20.5413C1.64481 20.6878 1.5625 20.8865 1.5625 21.0938L1.5625 22.6562C1.5625 22.8635 1.64481 23.0622 1.79132 23.2087C1.93784 23.3552 2.13655 23.4375 2.34375 23.4375H22.6562C22.8635 23.4375 23.0622 23.3552 23.2087 23.2087C23.3552 23.0622 23.4375 22.8635 23.4375 22.6562V21.0938C23.4375 20.8865 23.3552 20.6878 23.2087 20.5413C23.0622 20.3948 22.8635 20.3125 22.6562 20.3125ZM22.6562 14.0625H2.34375C2.13655 14.0625 1.93784 14.1448 1.79132 14.2913C1.64481 14.4378 1.5625 14.6365 1.5625 14.8438L1.5625 16.4062C1.5625 16.6135 1.64481 16.8122 1.79132 16.9587C1.93784 17.1052 2.13655 17.1875 2.34375 17.1875H22.6562C22.8635 17.1875 23.0622 17.1052 23.2087 16.9587C23.3552 16.8122 23.4375 16.6135 23.4375 16.4062V14.8438C23.4375 14.6365 23.3552 14.4378 23.2087 14.2913C23.0622 14.1448 22.8635 14.0625 22.6562 14.0625ZM22.6562 7.8125H2.34375C2.13655 7.8125 1.93784 7.89481 1.79132 8.04132C1.64481 8.18784 1.5625 8.38655 1.5625 8.59375L1.5625 10.1562C1.5625 10.3635 1.64481 10.5622 1.79132 10.7087C1.93784 10.8552 2.13655 10.9375 2.34375 10.9375H22.6562C22.8635 10.9375 23.0622 10.8552 23.2087 10.7087C23.3552 10.5622 23.4375 10.3635 23.4375 10.1562V8.59375C23.4375 8.38655 23.3552 8.18784 23.2087 8.04132C23.0622 7.89481 22.8635 7.8125 22.6562 7.8125ZM22.6562 1.5625H2.34375C2.13655 1.5625 1.93784 1.64481 1.79132 1.79132C1.64481 1.93784 1.5625 2.13655 1.5625 2.34375L1.5625 3.90625C1.5625 4.11345 1.64481 4.31216 1.79132 4.45868C1.93784 4.60519 2.13655 4.6875 2.34375 4.6875H22.6562C22.8635 4.6875 23.0622 4.60519 23.2087 4.45868C23.3552 4.31216 23.4375 4.11345 23.4375 3.90625V2.34375C23.4375 2.13655 23.3552 1.93784 23.2087 1.79132C23.0622 1.64481 22.8635 1.5625 22.6562 1.5625Z"
                fill="white"
              />
            </svg>
          </CSSTransition>
        )}
      </span>
    </nav>
  );
};

export default Navigation;
