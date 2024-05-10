import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RecipesState } from "./types";

const initialState: RecipesState = {
  value: 0,
};

export const RecipesSlice = createSlice({
  name: "recipes",

  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = RecipesSlice.actions;

export default RecipesSlice.reducer;
