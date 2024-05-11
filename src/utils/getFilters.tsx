import { FiltersFieldsT, FiltersT } from "../redux/slices/filters/types";

const getFilters = (arr: FiltersFieldsT[]): FiltersT[] => {
  const filters = [
    { name: "difficulty", value: ["Easy"] },
    { name: "cuisine", value: ["Italian"] },
    { name: "mealType", value: ["Dinner"] },
  ];

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

const getFilterss = (arr: FiltersFieldsT[]): FiltersT[] => {
  const filters = {
    cuisine: [{ name: "Все страны и регионы", value: "" }],
    mealType: [{ name: "Все типы", value: "" }],
    difficulty: [{ name: "Любая", value: "" }],
  };

  arr.forEach((obj) => {
    for (const [key, val] of Object.entries(obj)) {
      if (key !== "id") {
        if (Array.isArray(val)) {
          // @ts-ignore
          filters[key].push(
            ...val.map((item) => ({ name: item, value: item }))
          );
        } else {
          // @ts-ignore
          filters[key].push({ name: val, value: val });
        }
      }
    }
  });

  console.log(filters);

  return [];
};

export default getFilters;
