import React from "react";

import { Card } from "..";
import { RecipeT } from "../../pages/Home";

import styles from "./Cards.module.scss";

type CardsPropsT = {
  recipes: RecipeT[];
};

export const Cards: React.FC<CardsPropsT> = ({ recipes }) => {
  return (
    <div className={styles.root}>
      {recipes.map((recipe, i) => (
        <Card {...recipe} key={i} />
      ))}
    </div>
  );
};
