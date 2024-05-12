import React from "react";

import styles from "./CustomBtn.module.scss";

interface CustomBtnPropsT {
  className?: string;
  isDisabled: boolean;
  children: JSX.Element | React.ReactNode | string;
}

export const CustomBtn: React.FC<CustomBtnPropsT> = ({
  className,
  isDisabled,
  children,
}) => {
  return (
    <button
      className={`${styles.root} ${className ? className : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
