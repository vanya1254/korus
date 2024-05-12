import React from "react";

import styles from "./MainLayout.module.scss";

type MainLayoutPropsT = {
  className?: string;
  children: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const MainLayout: React.FC<MainLayoutPropsT> = ({
  className,
  children,
}) => {
  return (
    <main className={`${styles.root} ${className ? className : ""}`}>
      {children}
    </main>
  );
};
