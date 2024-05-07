import React, { useEffect, useState } from "react";

import { difficultyConvert } from "../../constants";

import styles from "./Card.module.scss";

export enum Dificulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

type CardPropsT = {
  id: number;
  name: string;
  cookTimeMinutes: number;
  difficulty: string;
  cuisine: string;
  image: string;
  mealType: string[];
};

export const Card: React.FC<CardPropsT> = ({
  id,
  name,
  cookTimeMinutes,
  difficulty,
  cuisine,
  image,
  mealType,
}) => {
  const [stars, setStars] = useState<boolean[]>([false, false, false]);

  const updateStars = (): void => {
    // @ts-ignore: Unreachable code error
    setStars(difficultyConvert[difficulty.toLowerCase()]);
  };

  useEffect(() => {
    if (difficulty) {
      updateStars();
    }
  }, []);

  return (
    <section className={styles.root}>
      <div className={styles.root__left}>
        <div className={styles.root__header}>
          <h3 className={styles.root_title}>{name}</h3>
        </div>
        <div className={styles.root__img}>
          <img className={styles.root_img} src={image} alt={name} />
        </div>
      </div>
      <div className={styles.root__right}>
        <p className={styles.root__right_text}>
          Традиционное итальянское блюдо, изначально в виде круглой
          дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного
          соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи,
          грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
        </p>
        <article className={styles.root__article}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.1668 22.2454C17.7618 22.2454 22.4122 17.6049 22.4122 12C22.4122 6.40501 17.7717 1.75458 12.1767 1.75458C11.6444 1.75458 11.3834 2.07601 11.3834 2.59801V6.49543C11.3834 6.92743 11.6748 7.27886 12.1162 7.27886C12.5585 7.27886 12.8598 6.92743 12.8598 6.49543V3.49201C17.2797 3.84343 20.6945 7.50001 20.6945 12C20.6992 13.1217 20.4818 14.2332 20.055 15.2705C19.6283 16.3078 19.0005 17.2504 18.2078 18.044C17.4151 18.8376 16.4733 19.4665 15.4365 19.8946C14.3997 20.3226 13.2885 20.5413 12.1668 20.538C7.42553 20.538 3.61896 16.7409 3.62882 12C3.63867 9.89058 4.3921 7.97229 5.64782 6.49543C5.95896 6.10372 5.9791 5.63186 5.64782 5.28001C5.3161 4.91872 4.75382 4.94872 4.3921 5.40086C2.85524 7.18844 1.92139 9.49886 1.92139 12C1.92139 17.6049 6.56196 22.2454 12.1668 22.2454ZM13.774 13.5467C14.5672 12.723 14.407 11.598 13.4525 10.9354L8.13824 7.22872C7.63639 6.87729 7.11396 7.39972 7.46539 7.90158L11.1721 13.2154C11.8351 14.1699 12.9601 14.3404 13.774 13.5467Z"
              fill="black"
            />
          </svg>
          <h4 className={styles.root__article_title}>
            {cookTimeMinutes} минут
          </h4>
        </article>
        <article className={styles.root__article}>
          <h4 className={styles.root__article_title}>Сложность:</h4>
          <div className={styles.root__stars}>
            {stars.map((star, i) =>
              star ? (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M5.99175 21L7.61675 13.975L2.16675 9.25L9.36675 8.625L12.1667 2L14.9667 8.625L22.1667 9.25L16.7167 13.975L18.3417 21L12.1667 17.275L5.99175 21Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.01675 16.825L12.1667 14.925L15.3167 16.85L14.4917 13.25L17.2667 10.85L13.6167 10.525L12.1667 7.125L10.7167 10.5L7.06675 10.825L9.84175 13.25L9.01675 16.825ZM5.99175 21L7.61675 13.975L2.16675 9.25L9.36675 8.625L12.1667 2L14.9667 8.625L22.1667 9.25L16.7167 13.975L18.3417 21L12.1667 17.275L5.99175 21Z"
                    fill="black"
                  />
                </svg>
              )
            )}
          </div>
        </article>
        <article className={styles.root__article}>
          <h4 className={styles.root__article_title}>{cuisine} кухня</h4>
        </article>
        <article className={styles.root__article}>
          <h4 className={styles.root__article_title}>{mealType.join(", ")}</h4>
        </article>
      </div>
    </section>
  );
};
