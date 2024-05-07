import React from "react";

import { AsideLayout, ContentLayout, MainLayout } from "../layouts";
import { Additional, Cards, Filters, Pagination } from "../components";
import { Dificulty } from "../components/Card";

export type RecipeT = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: Dificulty;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export const Home: React.FC = () => {
  const recipes: RecipeT[] = [
    {
      id: 1,
      name: "Наименование блюда",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: Dificulty.EASY,
      cuisine: "Европейская",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Завтрак", "Обед", "Ужин"],
    },
    {
      id: 2,
      name: "Наименование блюда",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: Dificulty.MEDIUM,
      cuisine: "Европейская",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Завтрак", "Обед", "Ужин"],
    },
    {
      id: 3,
      name: "Наименование блюда длинное",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: Dificulty.EASY,
      cuisine: "Европейская",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Завтрак", "Обед", "Ужин"],
    },
    {
      id: 4,
      name: "Наименование блюда",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: Dificulty.HARD,
      cuisine: "Европейская",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Завтрак", "Обед", "Ужин"],
    },
    {
      id: 5,
      name: "Наименование блюда длинное",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: Dificulty.EASY,
      cuisine: "Европейская",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Завтрак", "Обед", "Ужин"],
    },
    {
      id: 4,
      name: "Наименование блюда",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: Dificulty.EASY,
      cuisine: "Европейская",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 45,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 3,
      mealType: ["Завтрак", "Обед", "Ужин"],
    },
  ];

  return (
    <MainLayout>
      <AsideLayout>
        <div className="prologue">
          <div className="prologue__img">
            <img
              src="https://sanecotec.com/wp-content/uploads/2018/08/placeholder.png"
              alt="image"
            />
          </div>
          <div className="prologue__content">
            <p className="prologue__content__text">
              В нашей жизни, когда время становится все более ценным ресурсом,
              задача планирования приема пищи становится все более сложной.
            </p>
            <p className="prologue__content__text">
              Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед
              или ужин? Каким образом мы можем легко и быстро определиться с
              выбором блюда и не тратить много времени на принятие этого
              решения?
            </p>
            <p className="prologue__content__text">
              Наш сервис поможет: выбирайте параметры - и вперед!
            </p>
          </div>
        </div>
        <Filters />
        <Additional />
      </AsideLayout>
      <ContentLayout title={"Найденные рецепты"} count={0}>
        <Cards recipes={recipes} />
        <Pagination />
      </ContentLayout>
    </MainLayout>
  );
};
