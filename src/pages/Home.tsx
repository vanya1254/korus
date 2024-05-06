import React from "react";

import { AsideLayout, CardsLayout, MainLayout } from "../layouts";
import { Card } from "../components";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <AsideLayout>
        <button>f</button>
        <button>f</button>
      </AsideLayout>
      <CardsLayout title={"Найденные рецепты"} count={0}>
        {[...new Array(6)].map((_, i) => (
          <Card key={i} />
        ))}
      </CardsLayout>
    </MainLayout>
  );
};
