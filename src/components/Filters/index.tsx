import React from "react";
import { useAppSelector } from "../../redux/hooks";

import { CustomSelect, RadioBtns } from "..";

import { filtersSelector } from "../../redux/slices/filters/selectors";

import { FILTERS_LABELS } from "../../constants";
import { Status } from "../../redux/types";
import { FiltersT } from "../../redux/slices/filters/types";

import styles from "./Filters.module.scss";

type FiltersPropsT = {
  pushQS: (name: string, value: string) => void;
  deleteQS: (name: string) => void;
};

export const Filters: React.FC<FiltersPropsT> = ({ pushQS, deleteQS }) => {
  const { status, filters } = useAppSelector(filtersSelector);

  const getOptions = (filter: FiltersT) => {
    const options = filter.value.map((val) => {
      return { name: val, value: val };
    });
    options[0] = {
      //@ts-ignore
      name: FILTERS_LABELS[filter.name].option,
      value: "",
    };

    return options;
  };

  return (
    <form className={styles.root}>
      {status === Status.Fulfilled
        ? filters.map((filter, i) =>
            filter.name === "difficulty" ? (
              <fieldset key={i} className={styles.root__select}>
                <label className={styles.root_label} htmlFor={filter.name}>
                  {
                    //@ts-ignore
                    FILTERS_LABELS[filter.name].label
                  }
                </label>
                <RadioBtns
                  className={styles.root_options}
                  htmlName={filter.name}
                  group={getOptions(filter)}
                  pushQS={pushQS}
                  deleteQS={deleteQS}
                />
              </fieldset>
            ) : (
              <div key={i} className={styles.root__select}>
                <label className={styles.root_label} htmlFor={filter.name}>
                  {
                    //@ts-ignore
                    FILTERS_LABELS[filter.name].label
                  }
                </label>
                <CustomSelect
                  className={styles.root_options}
                  htmlId={filter.name}
                  htmlName={filter.name}
                  options={getOptions(filter)}
                  pushQS={pushQS}
                  deleteQS={deleteQS}
                />
              </div>
            )
          )
        : "LOADING"}
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
