import React from "react";

import styles from "./Timeline.module.scss";

type TimelinePropsT = {
  lines: string[];
};

export const Timeline: React.FC<TimelinePropsT> = ({ lines }) => {
  return (
    <ul className={styles.root}>
      {lines.map((line, i) => (
        <li key={i} className={styles.root_line}>
          <p className={styles.root_text}>{line}</p>
        </li>
      ))}
    </ul>
  );
};
