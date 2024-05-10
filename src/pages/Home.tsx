import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { recipesSelector } from "../redux/slices/recipes/selectors";
import { fetchRecipes } from "../redux/slices/recipes/slice";

import { AsideLayout, ContentLayout, MainLayout } from "../layouts";
import { Additional, Cards, Filters, Header, Pagination } from "../components";
import { Status } from "../redux/types";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status, recipes } = useAppSelector(recipesSelector);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

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
