import { OptionT } from "../components/CustomSelect";
import { RecipeT } from "../redux/types";

const getFilteredRecipes = (recipes: RecipeT[], filter: OptionT): RecipeT[] => {
  const filtered = recipes.filter((recipe) => {
    const name = filter.name;
    const value = filter.value;

    // @ts-ignore
    if (recipe[name] === value) {
      return recipe;
    }
  });

  return filtered;
};

export default getFilteredRecipes;
