import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecipeState } from "./types";
import { RecipeT, Status } from "../../types";

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async (id: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipe/${id}?select=id,name,instructions,prepTimeMinutes,cookTimeMinutes,servings,cuisine,caloriesPerServing,tags,image`
      );
      const recipe = await response.json();

      return await recipe;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState: RecipeState = {
  recipe: {
    id: 0,
    name: "",
    instructions: ["", "", "", "", "", ""],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    cuisine: "",
    caloriesPerServing: 0,
    tags: ["", ""],
    image: "",
  },
  status: Status.Pending,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = Status.Pending;
      })
      .addCase(
        fetchRecipe.fulfilled,
        (state, action: PayloadAction<RecipeT>) => {
          state.status = Status.Fulfilled;
          state.recipe = action.payload;
        }
      )
      .addCase(fetchRecipe.rejected, (state) => {
        state.status = Status.Rejected;
      });
  },
});

export const {} = recipeSlice.actions;

export default recipeSlice.reducer;
