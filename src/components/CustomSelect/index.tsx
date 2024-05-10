import React, { useState } from "react";

import styles from "./CustomSelect.module.scss";

export type OptionT = {
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
  const [selected, setSelected] = useState<OptionT>(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const STYLES = {
    open: { visibility: "visible", opacity: "1" },
    closed: { visibility: "hidden", opacity: "0" },
  };

  const onClickSelect = (e: React.MouseEvent) => {
    setIsOpen((prev) => !prev);
  };

  const onClickOption = (opt: OptionT) => {
    setSelected(opt);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.root} ${className ? className : ""}`}>
      <div className={styles.root__select} onClick={onClickSelect}>
        <p className={styles.root__select_title}>{selected.name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
        >
          <path
            d="M9.15203 3.51797H8.31498C8.25806 3.51797 8.20449 3.54588 8.171 3.59164L5.00025 7.96217L1.82949 3.59164C1.796 3.54588 1.74243 3.51797 1.68551 3.51797H0.84846C0.775916 3.51797 0.733505 3.60056 0.775916 3.65972L4.71118 9.08494C4.85404 9.28137 5.14645 9.28137 5.28819 9.08494L9.22346 3.65972C9.26699 3.60056 9.22458 3.51797 9.15203 3.51797Z"
            fill="black"
            fillOpacity="0.85"
          />
        </svg>
      </div>
      {isOpen ? (
        <div
          className={styles.root__options}
          style={
            isOpen
              ? (STYLES.open as React.CSSProperties)
              : (STYLES.closed as React.CSSProperties)
          }
        >
          {options.map((opt, i) => (
            <div
              key={i}
              className={`${styles.root__option} ${
                selected.value === opt.value ? styles.root_active : ""
              }`}
              onClick={() => onClickOption(opt)}
            >
              <input
                id={`${htmlId}${i}`}
                className={styles.root__option_input}
                type="radio"
                name={htmlName}
                value={opt.value}
              />
              <label
                htmlFor={`${htmlId}${i}`}
                className={styles.root__option_label}
              >
                {opt.name}
              </label>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
    // <div className={`${styles.root} ${className ? className : ""}`}>
    //   <select className={styles.root_select} name={htmlName} id={htmlId}>
    //     {options.map((opt, i) => (
    //       <option className={styles.root_option} key={i} value={opt.value}>
    //         {opt.name}
    //       </option>
    //     ))}
    //   </select>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="10"
    //     height="12"
    //     viewBox="0 0 10 12"
    //     fill="none"
    //   >
    //     <path
    //       d="M9.15203 3.51797H8.31498C8.25806 3.51797 8.20449 3.54588 8.171 3.59164L5.00025 7.96217L1.82949 3.59164C1.796 3.54588 1.74243 3.51797 1.68551 3.51797H0.84846C0.775916 3.51797 0.733505 3.60056 0.775916 3.65972L4.71118 9.08494C4.85404 9.28137 5.14645 9.28137 5.28819 9.08494L9.22346 3.65972C9.26699 3.60056 9.22458 3.51797 9.15203 3.51797Z"
    //       fill="black"
    //       fillOpacity="0.85"
    //     />
    //   </svg>
    // </div>
  );
};
