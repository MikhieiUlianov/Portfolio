"use client";

import { useSelector } from "react-redux";
import { filtersBlocks } from "../SideData";
import BlockAccordion from "./block-accordion";
import BlockContent from "./block-content";
import classes from "./filters.module.scss";
import { RootState } from "@/store/store";

export default function Filters() {
  const blocks = filtersBlocks;

  const { isFiltersBlockActive } = useSelector(
    (state: RootState) => state.filters
  );
  return (
    <ul
      className={` ${classes.filters} ${
        isFiltersBlockActive && classes.active
      }`}
    >
      {blocks.map(({ label, filters }) => {
        return (
          <BlockAccordion key={label} blockName={label}>
            <BlockContent label={label} filters={filters} />
          </BlockAccordion>
        );
      })}
    </ul>
  );
}
