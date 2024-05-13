import React from "react";

import { CustomRadioBtn } from "..";
import { OptionT } from "../../redux/types";

import styles from "./RadioBtns.module.scss";

type RadioBtnsPropsT = {
  className?: string;
  htmlName: string;
  group: OptionT[];
};

export const RadioBtns: React.FC<RadioBtnsPropsT> = ({
  className,
  htmlName,
  group,
}) => {
  return (
    <div className={`${styles.root} ${className ? className : ""}`}>
      {group.map((item, i) => (
        <CustomRadioBtn
          key={i}
          className={styles.root_btn}
          htmlId={`${htmlName}${i}`}
          htmlName={htmlName}
          //   htmlChecked={i ? false : true}
          value={item.value}
          text={item.name}
        />
      ))}
    </div>
  );
};
