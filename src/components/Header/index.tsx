import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";

type HeaderPropsT = {
  title: string;
  hasBackBtn: boolean;
};

export const Header: React.FC<HeaderPropsT> = ({ title, hasBackBtn }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.root}>
      {hasBackBtn ? (
        <button onClick={() => navigate(-1)} className={styles.root_btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M14.6563 7.32136H4.04292L10.3954 1.89279C10.4969 1.80529 10.4353 1.64279 10.301 1.64279H8.6957C8.62495 1.64279 8.55784 1.66779 8.50523 1.71243L1.65033 7.56779C1.58755 7.62137 1.53719 7.6876 1.50269 7.76201C1.46818 7.83641 1.45032 7.91725 1.45032 7.99904C1.45032 8.08084 1.46818 8.16167 1.50269 8.23608C1.53719 8.31048 1.58755 8.37672 1.65033 8.43029L8.54514 14.3214C8.57235 14.3446 8.605 14.3571 8.63947 14.3571H10.2992C10.4335 14.3571 10.4951 14.1928 10.3936 14.1071L4.04292 8.67851H14.6563C14.7361 8.67851 14.8014 8.61422 14.8014 8.53565V7.46422C14.8014 7.38565 14.7361 7.32136 14.6563 7.32136Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
      <h1 className={styles.root_title}>{title}</h1>
    </header>
  );
};
