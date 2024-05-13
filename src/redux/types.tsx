export type RecipeT = {
  id: number;
  name: string;
  ingredients?: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty?: Difficulty;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  mealType?: string[];
};

export enum Difficulty {
  Easy = "EASY",
  Medium = "MEDIUM",
  Hard = "HARD",
}

export enum Status {
  Pending = "PENDING",
  Fulfilled = "FULFILLED",
  Rejected = "REJECTED",
}

export type OptionT = {
  name: string;
  value: string;
};
