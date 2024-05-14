import React from "react";

import styles from "./AsideLayout.module.scss";

type AsideLayoutPropsT = {
  children: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const AsideLayout: React.FC<AsideLayoutPropsT> = ({ children }) => {
  return (
    <aside className={styles.root}>
      <div className={styles.root__sticky}>{children}</div>
    </aside>
  );
};
