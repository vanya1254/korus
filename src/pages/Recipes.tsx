import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { recipeSelector } from "../redux/slices/recipe/selectors";
import { fetchRecipe } from "../redux/slices/recipe/slice";

import { Header, Slider } from "../components";
import { DescriptionLayout, MainLayout } from "../layouts";
import { Status } from "../redux/types";

const Recipes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { status, recipe } = useAppSelector(recipeSelector);

  useEffect(() => {
    dispatch(fetchRecipe("1"));
    console.log(searchParams.get("id"));
  }, []);

  return (
    <>
      <Header title={"Наименование блюда длинное"} hasBackBtn={true} />
      <MainLayout className="pr-0">
        {status === Status.Fulfilled ? (
          <>
            <div className="description">
              <DescriptionLayout title="Кухня">
                <p className="">{recipe.cuisine}</p>
              </DescriptionLayout>
              <DescriptionLayout title="Теги">
                {recipe.tags.map((tag, i) => (
                  <p key={i} className="">{`#${tag}`}</p>
                ))}
              </DescriptionLayout>
              <DescriptionLayout title="Калорийность">
                <p className="">{`${recipe.caloriesPerServing} ккал`}</p>
                <p className="">100 грамм</p>
              </DescriptionLayout>
              <DescriptionLayout title="Количество порций">
                <p className="">{recipe.servings}</p>
              </DescriptionLayout>
              <DescriptionLayout title="Описание">
                <p className="">
                  Традиционное итальянское блюдо, изначально в виде круглой
                  дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой
                  из томатного соуса, сыра и зачастую других ингредиентов, таких
                  как мясо, овощи, грибы и прочие продукты. Небольшую пиццу
                  иногда называют пиццеттой.
                </p>
              </DescriptionLayout>
            </div>
            <div className="description">
              <DescriptionLayout title="Общее время приготоволения">
                <p className="">{`${
                  recipe.cookTimeMinutes + recipe.prepTimeMinutes
                } минут`}</p>
              </DescriptionLayout>
              <DescriptionLayout title="Инструкция по приготовлению">
                {recipe.instructions.map((instruction, i) => (
                  <p key={i}>{instruction}</p>
                ))}
              </DescriptionLayout>
            </div>
            <div>
              <Slider imgs={[{ alt: recipe.name, src: recipe.image }]} />
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
