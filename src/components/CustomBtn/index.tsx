import React from "react";

import styles from "./CustomBtn.module.scss";

interface CustomBtnPropsT {
  className?: string;
  isDisabled: boolean;
  children: JSX.Element | React.ReactNode | string;
  onClick?: () => void;
}

export const CustomBtn: React.FC<CustomBtnPropsT> = ({
  className,
  isDisabled,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.root} ${className ? className : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
