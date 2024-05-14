import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecipesState } from "./types";
import { RecipeT, Status } from "../../types";
import { LIMIT } from "../../../constants";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=50&select=id,name,cookTimeMinutes,difficulty,cuisine,image,mealType`
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
  filteredRecipes: [],
  recipesLength: 0,
  curRecipes: [],
  curPage: 0,
  status: Status.Pending,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setFilteredRecipes: (state, action: PayloadAction<RecipeT[]>) => {
      state.filteredRecipes = action.payload;
      state.recipesLength = state.filteredRecipes.length;
    },
    setCurRecipes: (state) => {
      state.curRecipes = state.filteredRecipes.slice(
        state.curPage * LIMIT,
        state.curPage * LIMIT + LIMIT
      );
    },
    setCurPage: (state, action: PayloadAction<number>) => {
      state.curPage = action.payload;
    },
  },
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
          state.curRecipes = action.payload.slice(
            state.curPage * LIMIT,
            state.curPage * LIMIT + LIMIT
          );
          state.recipesLength = state.recipes.length;
        }
      )
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = Status.Rejected;
        state.recipes = [];
      });
  },
});

export const { setFilteredRecipes, setCurRecipes, setCurPage } =
  recipesSlice.actions;

export default recipesSlice.reducer;
