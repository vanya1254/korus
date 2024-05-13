import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FiltersFieldsT, FiltersState, FiltersT } from "./types";
import { Status } from "../../types";
import getFilters from "../../../utils/getFilters";

export const fetchFiltersFields = createAsyncThunk(
  "filters/fetchFiltersFields",
  async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=50&select=difficulty,cuisine,mealType`
      );
      const data = await response.json();
      const { recipes } = await data;

      return await recipes;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState: FiltersState = {
  filtersFields: [],
  filters: [],
  status: Status.Pending,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FiltersT[]>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiltersFields.pending, (state) => {
        state.status = Status.Pending;
        state.filtersFields = [];
      })
      .addCase(
        fetchFiltersFields.fulfilled,
        (state, action: PayloadAction<FiltersFieldsT[]>) => {
          state.status = Status.Fulfilled;
          state.filtersFields = action.payload;
          state.filters = getFilters(action.payload);
        }
      )
      .addCase(fetchFiltersFields.rejected, (state) => {
        state.status = Status.Rejected;
        state.filtersFields = [];
      });
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
