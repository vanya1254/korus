import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

import { CustomSelect, RadioBtns } from "..";

import { filtersSelector } from "../../redux/slices/filters/selectors";

import { FILTERS, FILTERS_LABELS, selects } from "../../constants";
import { OptionT, Status } from "../../redux/types";

import styles from "./Filters.module.scss";
import { FiltersT } from "../../redux/slices/filters/types";

type FiltersPropsT = {
  onChangeFilter: (option: OptionT, htmlName: string) => void;
};

export const Filters: React.FC<FiltersPropsT> = ({ onChangeFilter }) => {
  const { status, filters } = useAppSelector(filtersSelector);

  const getOptions = (filter: FiltersT) => {
    const options = filter.value.map((val) => {
      return { name: val, value: val };
    });
    options.unshift({
      //@ts-ignore
      name: FILTERS_LABELS[filter.name].option,
      value: "",
    });

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
                  onChange={onChangeFilter}
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
