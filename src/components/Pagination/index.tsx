import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { recipesSelector } from "../../redux/slices/recipes/selectors";

type PaginationPropsT = {
  pages: number;
  updateParams: (name: string, value: string) => void;
};

export const Pagination: React.FC<PaginationPropsT> = ({
  pages,
  updateParams,
}) => {
  const { curPage } = useAppSelector(recipesSelector);

  const onClickPage = (index: { selected: number }) => {
    const page = index.selected + 1;
    console.log(index.selected, page);
    updateParams("page", page.toString());
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="•••"
      nextLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M9.89777 5.66281L3.86027 0.947189C3.84449 0.934768 3.82553 0.92705 3.80557 0.924919C3.7856 0.922788 3.76544 0.926332 3.7474 0.935143C3.72936 0.943955 3.71417 0.957676 3.70357 0.974732C3.69298 0.991787 3.68741 1.01149 3.6875 1.03156V2.06683C3.6875 2.13246 3.7183 2.1954 3.7692 2.23558L8.59063 6.00031L3.7692 9.76505C3.71697 9.80522 3.6875 9.86817 3.6875 9.9338V10.9691C3.6875 11.0588 3.79063 11.1083 3.86027 11.0534L9.89777 6.33781C9.94908 6.29779 9.9906 6.24658 10.0191 6.1881C10.0477 6.12962 10.0625 6.06539 10.0625 6.00031C10.0625 5.93523 10.0477 5.87101 10.0191 5.81253C9.9906 5.75404 9.94908 5.70284 9.89777 5.66281Z"
            fill="black"
            fillOpacity="0.85"
          />
        </svg>
      }
      onPageChange={onClickPage}
      pageRangeDisplayed={5}
      pageCount={pages}
      forcePage={curPage}
      previousLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          transform="rotate(180)"
        >
          <path
            d="M9.89777 5.66281L3.86027 0.947189C3.84449 0.934768 3.82553 0.92705 3.80557 0.924919C3.7856 0.922788 3.76544 0.926332 3.7474 0.935143C3.72936 0.943955 3.71417 0.957676 3.70357 0.974732C3.69298 0.991787 3.68741 1.01149 3.6875 1.03156V2.06683C3.6875 2.13246 3.7183 2.1954 3.7692 2.23558L8.59063 6.00031L3.7692 9.76505C3.71697 9.80522 3.6875 9.86817 3.6875 9.9338V10.9691C3.6875 11.0588 3.79063 11.1083 3.86027 11.0534L9.89777 6.33781C9.94908 6.29779 9.9906 6.24658 10.0191 6.1881C10.0477 6.12962 10.0625 6.06539 10.0625 6.00031C10.0625 5.93523 10.0477 5.87101 10.0191 5.81253C9.9906 5.75404 9.94908 5.70284 9.89777 5.66281Z"
            fill="black"
            fillOpacity="0.85"
          />
        </svg>
      }
    />
  );
};
