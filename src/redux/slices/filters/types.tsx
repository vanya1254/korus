import { Difficulty, Status } from "../../types";

export interface FiltersState {
  filtersFields: FiltersFieldsT[];
  filters: FiltersT[];
  status: Status;
}

export type FiltersFieldsT = {
  id: number;
  difficulty: Difficulty;
  cuisine: string;
  mealType: string[];
};

export type FiltersT = Record<string, string>;
