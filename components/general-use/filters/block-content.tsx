"use client";

import classes from "./filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { normalizeString, setActiveFilters } from "@/store/accordions-slice";
import { RootState } from "@/store/store";

type BlockContentProps = {
  label: string;
  filters: string[];
  filtersArrName: "projectsFilters" | "toolsFilters";
};

export default function BlockContent({
  label,
  filters,
  filtersArrName,
}: BlockContentProps) {
  const dispatch = useDispatch();
  const activeFilters = useSelector(
    (state: RootState) => state.accordion.activeFilters[filtersArrName]
  );
  return (
    <div className={classes["filter-content"]} key={label}>
      <ul className={classes["filter-items"]}>
        {filters.map((filter) => {
          const isActive = activeFilters.includes(normalizeString(filter));
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
                onClick={() =>
                  dispatch(
                    setActiveFilters({ filtersArr: filtersArrName, filter })
                  )
                }
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
