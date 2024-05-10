import React from "react";

import styles from "./CustomRadioBtn.module.scss";

type CustomRadioBtnPropsT = {
  htmlId: string;
  htmlName: string;
  htmlChecked: boolean;
  value: string;
  text: string;
};

export const CustomRadioBtn: React.FC<CustomRadioBtnPropsT> = ({
  htmlId,
  htmlName,
  htmlChecked,
  value,
  text,
}) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.root_radio}
        type="radio"
        id={htmlId}
        name={htmlName}
        value={value}
        checked={htmlChecked}
      />
      <label className={styles.root_label} htmlFor={htmlId}>
        {text}
      </label>
    </div>
  );
};
