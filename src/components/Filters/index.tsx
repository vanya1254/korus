import React from "react";

import { CustomSelect } from "../CustomSelect";
import { selects } from "../../constants";

import styles from "./Filters.module.scss";
import { RadioBtns } from "../RadioBtns";

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
        <legend
          className={styles.root_label} //htmlFor="dificulty"
        >
          Сложность приготовления:
        </legend>
        <RadioBtns htmlName="dificulty" group={selects.dificulties} />
      </fieldset>
      <button>Сбросить фильтры</button>
    </form>
  );
};
