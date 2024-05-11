import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { recipesSelector } from "../redux/slices/recipes/selectors";
import { filtersSelector } from "../redux/slices/filters/selectors";
import { fetchRecipes } from "../redux/slices/recipes/slice";
import { fetchFiltersFields, setFilters } from "../redux/slices/filters/slice";

import getFilters from "../utils/getFilters";

import { AsideLayout, ContentLayout, MainLayout } from "../layouts";
import { Additional, Cards, Filters, Header, Pagination } from "../components";

import { Status } from "../redux/types";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const filtersState = useAppSelector(filtersSelector);
  const { status, recipes } = useAppSelector(recipesSelector);

  const [searchParams, setSearchParams] = useSearchParams();
  const isFirstLoading = useRef(true);

  useEffect(() => {
    if (isFirstLoading.current) {
      dispatch(fetchFiltersFields());
      dispatch(fetchRecipes());
    }
  }, []);

  useEffect(() => {
    if (isFirstLoading.current) {
      if (filtersState.status === Status.Fulfilled) {
        const converted = getFilters(filtersState.filtersFields);
        dispatch(setFilters(converted));

        isFirstLoading.current = false;
      }
    }
  }, [filtersState.status]);

  // useEffect(() => {}, [searchParams]);

  const updateQS = (name: string, value: string) => {
    setSearchParams((prevParams) => {
      prevParams.delete(name);
      prevParams.append(name, value);
      return prevParams;
    });
  };

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
          <Filters />
          <Additional />
        </AsideLayout>
        <ContentLayout title={"Найденные рецепты"} count={0}>
          {status === Status.Fulfilled ? (
            <Cards recipes={recipes} />
          ) : (
            "LOADING"
          )}
          <Pagination />
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export default Home;
