import React from "react";

import { Card } from "..";

import { RecipeT } from "../../redux/types";

import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

type CardsPropsT = {
  recipes: RecipeT[];
};

export const Cards: React.FC<CardsPropsT> = ({ recipes }) => {
  return (
    <div className={styles.root}>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <Card {...recipe} />
        </Link>
      ))}
    </div>
  );
};
