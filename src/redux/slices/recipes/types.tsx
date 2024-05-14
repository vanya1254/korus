import { RecipeT, Status } from "../../types";

export interface RecipesState {
  recipes: RecipeT[];
  filteredRecipes: RecipeT[];
  recipesLength: number;
  curRecipes: RecipeT[];
  curPage: number;
  status: Status;
}
