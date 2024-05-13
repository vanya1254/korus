import { RootState } from "../../store";

export const recipesSelector = (state: RootState) => state.recipes;

export const curPageSelector = (state: RootState) => state.recipes.curPage;
