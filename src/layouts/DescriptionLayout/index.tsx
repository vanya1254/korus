import React from "react";

import styles from "./DescriptionLayout.module.scss";

type DescriptionLayoutPropsT = {
  title: string;
  children: JSX.Element[] | JSX.Element | React.ReactNode | React.ReactNode[];
};

export const DescriptionLayout: React.FC<DescriptionLayoutPropsT> = ({
  title,
  children,
}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__title}>
        <h3 className={styles.root_title}>{title}</h3>
      </div>
      <div className={styles.root__content}>{children}</div>
    </section>
  );
};
