import { configureStore } from "@reduxjs/toolkit";
import recipes from "./slices/recipes/slice";
import filters from "./slices/filters/slice";
import recipe from "./slices/recipe/slice";

export const store = configureStore({
  reducer: { recipes, filters, recipe },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
