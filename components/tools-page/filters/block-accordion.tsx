"use client";
import { ReactNode } from "react";

import classes from "./filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilterAccordion } from "@/store/filters-slice";
import OpenIcon from "@/components/UI/icons/open-icon";
import { RootState } from "@/store/store";

export default function BlockAccordion({
  blockName,
  children,
}: {
  blockName: string;
  children: ReactNode;
}) {
  const dispatch = useDispatch();
  const isBlockActive = useSelector((state: RootState) =>
    state.filters.activeAccordions.includes(blockName.trim().toLowerCase())
  );

  return (
    <li className={`${classes.filter} ${isBlockActive ? "active" : ""}`}>
      <header
        className={classes["filter-header"]}
        onClick={() => {
          console.log("click");
          dispatch(setActiveFilterAccordion(blockName.trim().toLowerCase()));
        }}
      >
        <div>{blockName}</div>
        <span
          className={classes.corner}
          style={{
            transform: isBlockActive ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <OpenIcon />
        </span>
      </header>
      {isBlockActive && (
        <div className={classes["filter-content"]}>{children}</div>
      )}
    </li>
  );
}
