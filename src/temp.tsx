export const d = [];

// const setFilteredRecipes = () => {
//   const filters = searchParams
//     .toString()
//     .split("&")
//     .map((str) => {
//       const f = str.trim().split("=");
//       return { name: f[0], value: f[1] };
//     });

//   const params = {};

//   filters.forEach((filter) => {
//     if (filter.name === "difficulty" || filter.name === "cuisine") {
//       //@ts-ignore
//       params[filter.name] = filter.value;
//     }
//     if (filter.name === "page") {
//       setCurPage(Number(filter.value));
//     }
//   });

//   console.log(params);
//   console.log(searchParams.toString());

//   const filteredRecipes: RecipeT[] = recipes.filter(function (recipe) {
//     return Object.keys(params).every(function (a) {
//       //@ts-ignore
//       return Object.values(params).includes(recipe[a]);
//     });
//   });

//   console.log(filteredRecipes);
//   console.log(Object.keys(params), Object.values(params));

//   dispatch(setRecipes(filteredRecipes));
// };

// const setFilters = () => {
//     FILTERS_NAMES.forEach((name) => {
//       const value = searchParams.get(name);
//       if (value) {
//         dispatch(setActiveValue({ name, value }));
//       } else {
//         dispatch(setActiveValue({ name, value: "" }));
//       }
//     });
//   };

//   const setFiltered = () => {
//     const params = {};

//     filters.forEach((filter) => {
//       if (filter.activeValue) {
//         //@ts-ignore
//         params[filter.name] = filter.activeValue;
//       }
//     });

//     const filtered: RecipeT[] = recipes.filter(function (recipe) {
//       return Object.keys(params).every(function (a) {
//         //@ts-ignore
//         return Object.values(params).includes(recipe[a]);
//       });
//     });
//     // console.log(filtered);
//     dispatch(setFilteredRecipes(filtered));
//   };
