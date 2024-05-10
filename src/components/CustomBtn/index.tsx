import React from "react";

import styles from "./CustomBtn.module.scss";

type CustomBtnPropsT = {
  className?: string;
  isDisabled: boolean;
  text: string;
};

export const CustomBtn: React.FC<CustomBtnPropsT> = ({
  className,
  isDisabled,
  text,
}) => {
  return (
    <button
      className={`${styles.root} ${className ? className : ""}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
