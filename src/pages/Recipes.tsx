import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { recipeSelector } from "../redux/slices/recipe/selectors";
import { fetchRecipe } from "../redux/slices/recipe/slice";

import { Header, Slider, Timeline } from "../components";
import { DescriptionLayout, MainLayout } from "../layouts";

import { Status } from "../redux/types";

const Recipes: React.FC = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { status, recipe } = useAppSelector(recipeSelector);

  useEffect(() => {
    dispatch(fetchRecipe(location.pathname.replace("korus/recipes/", "")));
  }, []);

  return (
    <>
      <Header
        title={`${status === Status.Fulfilled ? recipe.name : ""}`}
        hasBackBtn={true}
      />
      <MainLayout className="pr-0 recipe-grid">
        {status === Status.Fulfilled ? (
          <>
            <div className="description">
              <DescriptionLayout title="Кухня">
                <p className="text">{recipe.cuisine}</p>
              </DescriptionLayout>
              <DescriptionLayout title="Теги">
                {recipe.tags.map((tag, i) => (
                  <p key={i} className="grey-text">{`#${tag}`}</p>
                ))}
              </DescriptionLayout>
              <DescriptionLayout title="Калорийность">
                <p className="text">{`${recipe.caloriesPerServing} ккал`}</p>
                <p className="grey-text">100 грамм</p>
              </DescriptionLayout>
              <DescriptionLayout title="Количество порций">
                <p className="text-bold">{recipe.servings}</p>
              </DescriptionLayout>
              <DescriptionLayout title="Описание">
                <p className="grey-text lh-16">
                  Традиционное итальянское блюдо, изначально в виде круглой
                  дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой
                  из томатного соуса, сыра и зачастую других ингредиентов, таких
                  как мясо, овощи, грибы и прочие продукты. Небольшую пиццу
                  иногда называют пиццеттой.
                </p>
              </DescriptionLayout>
            </div>
            <div className="description">
              <DescriptionLayout title="Общее время приготовления">
                <p className="text">{`${
                  recipe.cookTimeMinutes + recipe.prepTimeMinutes
                } минут`}</p>
              </DescriptionLayout>
              <DescriptionLayout title="Инструкция по приготовлению">
                <Timeline lines={recipe.instructions} />
              </DescriptionLayout>
            </div>
            <div className="recipe-slider">
              <Slider
                imgs={[
                  { alt: recipe.name, src: recipe.image },
                  { alt: recipe.name, src: recipe.image },
                ]}
              />
            </div>
          </>
        ) : (
          "LOADING"
        )}
      </MainLayout>
    </>
  );
};

export default Recipes;
