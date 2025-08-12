"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  changeInputValue,
  toggleFiltersBlockActive,
  toggleSearchBlockActive,
} from "@/store/filters-slice";
import { RootState } from "@/store/store";
import classes from "./catalog-header.module.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CatalogHeader() {
  const dispatch = useDispatch();
  const { isSearchBlockActive, isFiltersBlockActive, inputValue } = useSelector(
    (state: RootState) => state.filters
  );

  const [enteredValue, setEnteredValue] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      dispatch(changeInputValue(enteredValue));
    }, 700);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [enteredValue, dispatch]);

  return (
    <header className={classes.header}>
      <div className={classes.actions}>
        <motion.button
          className={isFiltersBlockActive ? classes.active : ""}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => dispatch(toggleFiltersBlockActive())}
        >
          Filters
        </motion.button>
        <motion.button
          className={isSearchBlockActive ? classes.active : ""}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => dispatch(toggleSearchBlockActive())}
        >
          Search
        </motion.button>
      </div>
      <div
        className={`${classes.search} ${
          isSearchBlockActive ? classes.active : ""
        }`}
      >
        <input
          required
          type="text"
          id="search"
          name="search"
          placeholder="Find tool.."
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
      </div>
    </header>
  );
}
