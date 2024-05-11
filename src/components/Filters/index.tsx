import React from "react";

import { CustomSelect, RadioBtns } from "..";

import { selects } from "../../constants";

import styles from "./Filters.module.scss";

export const Filters: React.FC = () => {
  return (
    <form className={styles.root}>
      <div className={styles.root__select}>
        <label className={styles.root_label} htmlFor="cuisine">
          Кухня:
        </label>
        <CustomSelect
          className={styles.root_options}
          htmlId="cuisine"
          htmlName="cuisine"
          options={selects.cuisines}
        />
      </div>
      <div className={styles.root__select}>
        <label className={styles.root_label} htmlFor="cuisine">
          Тип блюда:
        </label>
        <CustomSelect
          className={styles.root_options}
          htmlId="mealType"
          htmlName="mealType"
          options={selects.mealTypes}
        />
      </div>
      <fieldset className={styles.root__select}>
        <label className={styles.root_label} htmlFor="difficulty">
          Сложность приготовления:
        </label>
        <RadioBtns
          className={styles.root_options}
          htmlName="difficulty"
          group={selects.difficulties}
        />
      </fieldset>
      <button
        className={styles.root_reset}
        onClick={(e) => e.preventDefault()}
        disabled
      >
        Сбросить фильтры
      </button>
    </form>
  );
};
