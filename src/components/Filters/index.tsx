import React from "react";

import { CustomSelect } from "../CustomSelect";
import { selects } from "../../constants";

import styles from "./Filters.module.scss";

export const Filters: React.FC = () => {
  return (
    <form className={styles.root}>
      <p className={styles.root__select}>
        <label className={styles.root_label} htmlFor="cuisine">
          Кухня:
        </label>
        <CustomSelect
          className={styles.root_options}
          htmlId="cuisine"
          htmlName="cuisine"
          options={selects.cuisines}
        />
      </p>
      <p className={styles.root__select}>
        <label className={styles.root_label} htmlFor="cuisine">
          Тип блюда:
        </label>
        <CustomSelect
          className={styles.root_options}
          htmlId="mealType"
          htmlName="mealType"
          options={selects.mealTypes}
        />
      </p>
      <div className={styles.root__select}>
        <label className={styles.root_label} htmlFor="dificulty">
          Сложность приготовления:
        </label>
        <div className={styles.root_options}>
          <button>1</button>
          <button>b</button>
          <button>s</button>
          <button disabled>f</button>
        </div>
      </div>
      <button>Сбросить фильтры</button>
    </form>
  );
};
