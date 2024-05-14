import React from "react";

import styles from "./CustomRadioBtn.module.scss";

type CustomRadioBtnPropsT = {
  className?: string;
  htmlId: string;
  htmlName: string;
  htmlChecked: boolean;
  value: string;
  text: string;
  onClick?: () => void;
};

export const CustomRadioBtn: React.FC<CustomRadioBtnPropsT> = ({
  className,
  htmlId,
  htmlName,
  htmlChecked,
  value,
  text,
  onClick,
}) => {
  return (
    <div
      className={`${styles.root} ${className} ${
        htmlChecked ? styles.root_active : ""
      }`}
    >
      <input
        className={styles.root_radio}
        type="radio"
        id={htmlId}
        name={htmlName}
        value={value}
        onClick={onClick}
      />
      <label className={styles.root_label} htmlFor={htmlId}>
        {text}
      </label>
    </div>
  );
};
