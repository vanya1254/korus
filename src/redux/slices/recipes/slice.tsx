import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecipesState } from "./types";
import { RecipeT, Status } from "../../types";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes?limit=6&select=id,name,cookTimeMinutes,difficulty,cuisine,image,mealType"
      );
      const data = await response.json();
      const { recipes } = await data;

      return await recipes;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState: RecipesState = {
  recipes: [],
  status: Status.Pending,
};

export const RecipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = Status.Pending;
        state.recipes = [];
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<RecipeT[]>) => {
          state.status = Status.Fulfilled;
          state.recipes = action.payload;
        }
      )
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = Status.Rejected;
        state.recipes = [];
      });
  },
});

export const {} = RecipesSlice.actions;

export default RecipesSlice.reducer;
