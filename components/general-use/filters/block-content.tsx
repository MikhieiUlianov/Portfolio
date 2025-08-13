"use client";

import classes from "./filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "@/store/filters-slice";
import { RootState } from "@/store/store";

type BlockContentProps = {
  label: string;
  filters: string[];
};

export default function BlockContent({ label, filters }: BlockContentProps) {
  const dispatch = useDispatch();

  return (
    <div className={classes["filter-content"]} key={label}>
      <ul className={classes["filter-items"]}>
        {filters.map((filter) => {
          const isActive = useSelector(
            (state: RootState) => state.filters.activeFilters
          ).includes(filter.trim().toLowerCase());
          console.log(isActive);

          return (
            <li
              className={`${classes["filter-item"]} ${
                isActive ? classes.active : undefined
              }`}
              key={filter}
            >
              <button
                className={`${classes.filtersCategoryButton} ${
                  isActive ? classes.active : ""
                }`}
                onClick={() => dispatch(setActiveFilter(filter))}
              >
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
