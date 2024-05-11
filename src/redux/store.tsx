import { configureStore } from "@reduxjs/toolkit";
import recipes from "./slices/recipes/slice";
import filters from "./slices/filters/slice";

export const store = configureStore({
  reducer: { recipes, filters },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
