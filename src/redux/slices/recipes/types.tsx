import { RecipeT, Status } from "../../types";

export interface RecipesState {
  recipes: RecipeT[];
  status: Status;
}
