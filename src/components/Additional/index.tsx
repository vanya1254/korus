import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import { recipesSelector } from "../../redux/slices/recipes/selectors";
import getRandom from "../../utils/getRandom";

import { CustomBtn } from "..";

import styles from "./Additional.module.scss";

export const Additional: React.FC = () => {
  const { filteredRecipes, recipes } = useAppSelector(recipesSelector);
  const navigate = useNavigate();

  const onClickLucky = () => {
    const rndId = getRandom(1, (filteredRecipes.length || recipes.length) - 1);

    navigate(`/recipes/${rndId}`);
  };

  return (
    <div className={styles.root}>
      <p className={styles.root_text}>А еще можно попробовать на вкус удачу</p>
      <CustomBtn onClick={() => onClickLucky()} isDisabled={false}>
        Мне повезёт!
      </CustomBtn>
    </div>
  );
};
