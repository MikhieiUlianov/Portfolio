"use client";

import { useDispatch, useSelector } from "react-redux";
import { filtersBlocks } from "../../SideData";
import BlockAccordion from "./block-accordion";
import BlockContent from "./block-content";
import classes from "./filters.module.scss";
import { RootState } from "@/store/store";
import CloseIcon from "@/components/UI/icons/close-icon";
import { toggleFiltersBlockActive } from "@/store/filters-slice";

export default function Filters() {
  const blocks = filtersBlocks;

  const { isFiltersBlockActive } = useSelector(
    (state: RootState) => state.filters
  );

  const dispatch = useDispatch();
  return (
    <div
      className={` ${classes.filters} ${
        isFiltersBlockActive && classes.active
      }`}
    >
      <div className={classes.header}>
        <span
          className={classes.cancel}
          onClick={() => dispatch(toggleFiltersBlockActive())}
        >
          <CloseIcon />
        </span>
      </div>
      <ul>
        {blocks.map(({ label, filters }) => {
          return (
            <BlockAccordion key={label} blockName={label}>
              <BlockContent label={label} filters={filters} />
            </BlockAccordion>
          );
        })}
      </ul>
    </div>
  );
}
