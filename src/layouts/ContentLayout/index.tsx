import React from "react";

import styles from "./ContentLayout.module.scss";

type ContentLayoutPropsT = {
  title: string;
  count: number;
  children: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const ContentLayout: React.FC<ContentLayoutPropsT> = ({
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
      <div className={styles.root__content}>{children}</div>
    </section>
  );
};
