import React from "react";

import styles from "./CustomSelect.module.scss";

type OptionT = {
  name: string;
  value: string;
};

type CustomSelectPropsT = {
  className?: string;
  htmlName: string;
  htmlId: string;
  options: OptionT[];
};

export const CustomSelect: React.FC<CustomSelectPropsT> = ({
  className,
  htmlName,
  htmlId,
  options,
}) => {
  return (
    <select
      className={`${styles.root} ${className ? className : ""}`}
      name={htmlName}
      id={htmlId}
    >
      {options.map((opt, i) => (
        <option className={styles.root_option} key={i} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};
