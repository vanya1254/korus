import { configureStore } from "@reduxjs/toolkit";
import recipes from "./slices/recipes/slice";

export const store = configureStore({
  reducer: { recipes },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
