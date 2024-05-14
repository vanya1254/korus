import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { recipesSelector } from "../redux/slices/recipes/selectors";
import {
  fetchRecipes,
  setCurPage,
  setCurRecipes,
  setFilteredRecipes,
} from "../redux/slices/recipes/slice";
import { fetchFiltersFields } from "../redux/slices/filters/slice";
import { filtersSelector } from "../redux/slices/filters/selectors";

import { AsideLayout, ContentLayout, MainLayout } from "../layouts";
import { Additional, Cards, Filters, Header, Pagination } from "../components";

import { LIMIT } from "../constants";
import { RecipeT, Status } from "../redux/types";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status, recipes, filteredRecipes, curRecipes, hasFiltered, curPage } =
    useAppSelector(recipesSelector);
  const { filters } = useAppSelector(filtersSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const isFirstLoading = useRef(true);

  const updateQS = (name: string, value: string) => {
    setSearchParams((prevParams) => {
      prevParams.delete(name);
      prevParams.append(name, value);
      return prevParams;
    });
  };

  const deleteQS = (name: string) => {
    setSearchParams((prevParams) => {
      prevParams.delete(name);
      return prevParams;
    });
  };

  const setFiltered = () => {
    const params = {};

    filters.forEach((filter) => {
      if (filter.activeValue) {
        //@ts-ignore
        params[filter.name] = filter.activeValue;
      }
    });

    const filtered: RecipeT[] = recipes.filter(function (recipe) {
      return Object.keys(params).every(function (a) {
        //@ts-ignore
        if (Array.isArray(recipe[a])) {
          //@ts-ignore
          for (let i = 0; i < recipe[a].length; i++) {
            // да это нереальный кастом, но оно работает
            //@ts-ignore
            const type = recipe[a][i];
            //@ts-ignore
            if (i === recipe[a].length - 1) {
              //@ts-ignore
              return Object.values(params).includes(type);
            } else if (Object.values(params).includes(type)) {
              return Object.values(params).includes(type);
            }
          }
        }
        //@ts-ignore
        return Object.values(params).includes(recipe[a]);
      });
    });
    // if (filtered.length) {
    //   dispatch(setHasFiltered(true));
    // } else {
    //   dispatch(setHasFiltered(false));
    // }
    dispatch(setFilteredRecipes(filtered));
  };

  useEffect(() => {
    if (isFirstLoading.current) {
      dispatch(fetchFiltersFields());
      dispatch(fetchRecipes());

      isFirstLoading.current = false;
    }
  }, []);

  useEffect(() => {
    setFiltered();

    const page = (Number(searchParams.get("page")) || 1) - 1;

    dispatch(setCurPage(page));
    dispatch(setCurRecipes());
  }, [searchParams]);

  return (
    <>
      <Header
        title={"Сборник рецептов из разных стран мира"}
        hasBackBtn={false}
      />
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
                Часто мы сталкиваемся с дилеммой: что приготовить на завтрак,
                обед или ужин? Каким образом мы можем легко и быстро
                определиться с выбором блюда и не тратить много времени на
                принятие этого решения?
              </p>
              <p className="prologue__content__text">
                Наш сервис поможет: выбирайте параметры - и вперед!
              </p>
            </div>
          </div>
          <Filters pushQS={updateQS} deleteQS={deleteQS} />
          <Additional />
        </AsideLayout>
        <ContentLayout
          title={"Найденные рецепты"}
          count={
            status === Status.Fulfilled
              ? filteredRecipes.length || recipes.length
              : 0
          }
        >
          {status === Status.Fulfilled ? (
            <Cards recipes={curRecipes} />
          ) : (
            "LOADING"
          )}
          <Pagination
            pages={Math.ceil(
              (filteredRecipes.length || recipes.length) / LIMIT
            )}
            updateParams={updateQS}
          />
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export default Home;
