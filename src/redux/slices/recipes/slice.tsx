import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecipesState } from "./types";
import { RecipeT, Status } from "../../types";
import { LIMIT } from "../../../constants";
import { stat } from "fs";

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
  hasFiltered: false,
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
    },
    setCurRecipes: (state) => {
      if (state.filteredRecipes.length) {
        state.curRecipes = state.filteredRecipes.slice(
          state.curPage * LIMIT,
          state.curPage * LIMIT + LIMIT
        );
      } else {
        state.curRecipes = state.recipes.slice(
          state.curPage * LIMIT,
          state.curPage * LIMIT + LIMIT
        );
      }
    },
    setCurPage: (state, action: PayloadAction<number>) => {
      state.curPage = action.payload;
    },
    setHasFiltered: (state, action: PayloadAction<boolean>) => {
      state.hasFiltered = action.payload;
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
        }
      )
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = Status.Rejected;
        state.recipes = [];
      });
  },
});

export const { setFilteredRecipes, setCurRecipes, setCurPage, setHasFiltered } =
  recipesSlice.actions;

export default recipesSlice.reducer;
