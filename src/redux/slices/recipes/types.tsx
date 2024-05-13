import { RecipeT, Status } from "../../types";

export interface RecipesState {
  recipes: RecipeT[];
  curRecipes: RecipeT[];
  curPage: number;
  status: Status;
}
