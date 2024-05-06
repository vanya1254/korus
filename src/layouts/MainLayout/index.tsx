import React from "react";

import styles from "./MainLayout.module.scss";

type MainLayoutPropsT = {
  children: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const MainLayout: React.FC<MainLayoutPropsT> = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
