import React from "react";

import styles from "./CustomRadioBtn.module.scss";

type CustomRadioBtnPropsT = {
  className?: string;
  htmlId: string;
  htmlName: string;
  // htmlChecked: boolean;
  value: string;
  text: string;
};

export const CustomRadioBtn: React.FC<CustomRadioBtnPropsT> = ({
  className,
  htmlId,
  htmlName,
  // htmlChecked,
  value,
  text,
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <input
        className={styles.root_radio}
        type="radio"
        id={htmlId}
        name={htmlName}
        value={value}
        // checked={htmlChecked}
      />
      <label className={styles.root_label} htmlFor={htmlId}>
        {text}
      </label>
    </div>
  );
};
