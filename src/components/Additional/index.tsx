import React from "react";

import { CustomBtn } from "..";

import styles from "./Additional.module.scss";

export const Additional: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.root_text}>А еще можно попробовать на вкус удачу</p>
      <CustomBtn isDisabled={false}>Мне повезёт!</CustomBtn>
    </div>
  );
};
