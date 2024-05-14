import React, { useState } from "react";

import { CustomRadioBtn } from "..";
import { OptionT } from "../../redux/types";

import styles from "./RadioBtns.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { setActiveValue } from "../../redux/slices/filters/slice";

type RadioBtnsPropsT = {
  className?: string;
  htmlName: string;
  group: OptionT[];
  pushQS: (name: string, value: string) => void;
  deleteQS: (name: string) => void;
};

export const RadioBtns: React.FC<RadioBtnsPropsT> = ({
  className,
  htmlName,
  group,
  pushQS,
  deleteQS,
}) => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<OptionT>(group[0]);

  const onClickOption = (opt: OptionT) => {
    setSelected(opt);

    if (opt.value) {
      pushQS(htmlName, opt.value);
      dispatch(setActiveValue({ name: htmlName, value: opt.value }));
    } else {
      deleteQS(htmlName);
      dispatch(setActiveValue({ name: htmlName, value: "" }));
    }
    pushQS("page", "1");
  };

  return (
    <div className={`${styles.root} ${className ? className : ""}`}>
      {group.map((item, i) => (
        <CustomRadioBtn
          onClick={() => onClickOption(item)}
          key={i}
          className={styles.root_btn}
          htmlId={`${htmlName}${i}`}
          htmlName={htmlName}
          htmlChecked={selected.name === item.name ? true : false}
          value={item.value}
          text={item.name}
        />
      ))}
    </div>
  );
};
