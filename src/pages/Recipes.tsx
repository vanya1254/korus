import React from "react";

import { Header } from "../components";
import { MainLayout } from "../layouts";

const Recipes: React.FC = () => {
  return (
    <>
      <Header title={"Наименование блюда длинное"} hasBackBtn={true} />
      <MainLayout>[]</MainLayout>
    </>
  );
};

export default Recipes;
