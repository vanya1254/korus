export const difficultyConvert = {
  easy: [true, false, false],
  medium: [true, true, false],
  hard: [true, true, true],
};

export const FILTERS_LABELS = {
  cuisine: { label: "Кухня:", option: "Все страны и регионы" },
  mealType: { label: "Тип блюда:", option: "Все типы" },
  difficulty: {
    label: "Сложность приготовления:",
    option: "Любая",
  },
};

export const LIMIT = 6;

export const FILTERS = [
  { name: "cuisine", value: [""], activeValue: "" },
  { name: "mealType", value: [""], activeValue: "" },
  { name: "difficulty", value: [""], activeValue: "" },
];
