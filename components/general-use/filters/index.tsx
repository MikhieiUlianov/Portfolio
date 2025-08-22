"use client";

import { useDispatch, useSelector } from "react-redux";
import BlockAccordion from "./block-accordion";
import BlockContent from "./block-content";
import classes from "./filters.module.scss";
import { RootState } from "@/store/store";
import CloseIcon from "@/components/UI/icons/close-icon";
import { toggleAccordionBlockActive } from "@/store/accordions-slice";

export default function Filters({
  filters,
  filtersArrName,
  activeFiltersBlock,
}: {
  filters: {
    label: string;
    filters: string[];
  }[];
  activeFiltersBlock: "toolsAccordion" | "projectsAccordion";
  filtersArrName: "projectsFilters" | "toolsFilters";
}) {
  const { isFiltersBlockActive } = useSelector(
    (state: RootState) => state.accordion
  );

  const dispatch = useDispatch();
  return (
    <div
      className={` ${classes.filters} ${
        isFiltersBlockActive[activeFiltersBlock] && classes.active
      }`}
    >
      <div className={classes.header}>
        <span
          className={classes.cancel}
          onClick={() => dispatch(toggleAccordionBlockActive("toolsAccordion"))}
        >
          <CloseIcon />
        </span>
      </div>
      <ul>
        {filters.map(({ label, filters }) => {
          return (
            <BlockAccordion key={label} blockName={label}>
              <BlockContent
                label={label}
                filtersArrName={filtersArrName}
                filters={filters}
              />
            </BlockAccordion>
          );
        })}
      </ul>
    </div>
  );
}
