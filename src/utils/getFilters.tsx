import { FILTERS } from "../constants";
import { FiltersFieldsT, FiltersT } from "../redux/slices/filters/types";

const getFilters = (arr: FiltersFieldsT[]): FiltersT[] => {
  const filters = FILTERS.map((f) => ({ ...f }));

  filters.forEach((filter) => {
    arr.forEach((obj) => {
      // @ts-ignore
      if (Array.isArray(obj[filter.name])) {
        // @ts-ignore
        filter.value.push(...obj[filter.name]);
      } else {
        // @ts-ignore
        filter.value.push(obj[filter.name]);
      }
    });

    filter.value = Array.from(new Set(filter.value));
  });

  return filters;
};

export default getFilters;
