import { RecipeT, Status } from "../../types";

export interface RecipesState {
  recipes: RecipeT[];
  filteredRecipes: RecipeT[];
  hasFiltered: boolean;
  curRecipes: RecipeT[];
  curPage: number;
  status: Status;
}
