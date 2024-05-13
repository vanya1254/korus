export const difficultyConvert = {
  easy: [true, false, false],
  medium: [true, true, false],
  hard: [true, true, true],
};

export const selects = {
  cuisines: [
    { name: "Все страны и регионы", value: "" },
    { name: "Italian", value: "Italian" },
  ],
  mealTypes: [
    { name: "Все типы", value: "" },
    { name: "Dinner", value: "Dinner" },
    { name: "Breakfast", value: "Breakfast" },
    { name: "Lunch", value: "Lunch" },
  ],
  difficulties: [
    { name: "Любая", value: "" },
    { name: "Низкая", value: "Низкая" },
    { name: "Средняя", value: "Средняя" },
    { name: "Высокая", value: "Высокая" },
  ],
};

export const FILTERS_NAMES = ["difficulty", "cuisine", "mealType"];

export const FILTERS_LABELS = {
  cuisine: { label: "Кухня:", option: "Все страны и регионы" },
  mealType: { label: "Тип блюда:", option: "Все типы" },
  difficulty: {
    label: "Сложность приготовления:",
    option: "Любая",
  },
};

export const ACTIVE_FILTERS = [
  { name: "difficulty", value: "" },
  { name: "cuisine", value: "" },
  { name: "mealType", value: "" },
];

export const PARAMS = {
  page: "",
  cuisine: "",
  mealType: "",
  difficulty: "",
};

export const LIMIT = 6;

export const FILTERS = [
  { name: "cuisine", value: [""], activeValue: "" },
  { name: "mealType", value: [""], activeValue: "" },
  { name: "difficulty", value: [""], activeValue: "" },
];
