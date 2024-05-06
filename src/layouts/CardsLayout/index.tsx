import React from "react";

import styles from "./CardsLayout.module.scss";

type CardsLayoutPropsT = {
  title: string;
  count: number;
  children: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const CardsLayout: React.FC<CardsLayoutPropsT> = ({
  title,
  count,
  children,
}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>
        <h2 className={styles.root_title}>{title}</h2>
        <span className={styles.root_subtitle}>{count}</span>
      </div>
      <div className={styles.root__cards}>{children}</div>
    </section>
  );
};
