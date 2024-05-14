import { RecipeT, Status } from "../../types";

export interface RecipesState {
  recipes: RecipeT[];
  filteredRecipes: RecipeT[];
  curRecipes: RecipeT[];
  curPage: number;
  status: Status;
}
