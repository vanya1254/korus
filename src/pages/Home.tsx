import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { recipesSelector } from "../redux/slices/recipes/selectors";
import {
  fetchRecipes,
  setCurPage,
  setCurRecipes,
  setRecipes,
} from "../redux/slices/recipes/slice";
import { fetchFiltersFields } from "../redux/slices/filters/slice";

import { AsideLayout, ContentLayout, MainLayout } from "../layouts";
import { Additional, Cards, Filters, Header, Pagination } from "../components";

import { FILTERS, LIMIT, PARAMS } from "../constants";
import { OptionT, RecipeT, Status } from "../redux/types";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status, recipes, curRecipes } = useAppSelector(recipesSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const isFirstLoading = useRef(true);

  const [activefilters, setActiveFilters] = useState<OptionT[]>(FILTERS);

  const onChangeFilter = (option: OptionT, htmlName: string) => {
    setActiveFilters((prev) => {
      const newFilters = [
        ...prev.map((filter) => {
          if (filter.name === htmlName) {
            return { ...filter, value: option.value };
          }
          return { ...filter };
        }),
      ];
      return [...newFilters];
    });

    activefilters.forEach((filter) => {
      if (filter.value) {
        updateQS(filter.name, filter.value);
      }
    });
  };

  const updateQS = (name: string, value: string) => {
    setSearchParams((prevParams) => {
      prevParams.delete(name);
      prevParams.append(name, value);
      return prevParams;
    });
  };

  // const setFilteredRecipes = () => {
  //   const filters = searchParams
  //     .toString()
  //     .split("&")
  //     .map((str) => {
  //       const f = str.trim().split("=");
  //       return { name: f[0], value: f[1] };
  //     });

  //   const params = {};

  //   filters.forEach((filter) => {
  //     if (filter.name === "difficulty" || filter.name === "cuisine") {
  //       //@ts-ignore
  //       params[filter.name] = filter.value;
  //     }
  //     if (filter.name === "page") {
  //       setCurPage(Number(filter.value));
  //       console.log(curPage);
  //     }
  //   });

  //   console.log(params);
  //   console.log(searchParams.toString());

  //   const filteredRecipes: RecipeT[] = recipes.filter(function (recipe) {
  //     return Object.keys(params).every(function (a) {
  //       //@ts-ignore
  //       return Object.values(params).includes(recipe[a]);
  //     });
  //   });

  //   console.log(filteredRecipes);
  //   console.log(Object.keys(params), Object.values(params));

  //   dispatch(setRecipes(filteredRecipes));
  // };

  const setFilteredRecipes = () => {};

  useEffect(() => {
    if (isFirstLoading.current) {
      dispatch(fetchFiltersFields());
      dispatch(fetchRecipes());

      isFirstLoading.current = false;
    }
  }, []);

  useEffect(() => {
    setFilteredRecipes();

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
          <Filters onChangeFilter={onChangeFilter} />
          <Additional />
        </AsideLayout>
        <ContentLayout
          title={"Найденные рецепты"}
          count={status === Status.Fulfilled ? recipes.length : 0}
        >
          {status === Status.Fulfilled ? (
            <Cards recipes={curRecipes} />
          ) : (
            "LOADING"
          )}
          <Pagination
            pages={Math.ceil(recipes.length / LIMIT)}
            updateParams={updateQS}
          />
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export default Home;
