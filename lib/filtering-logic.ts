"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

type ToolsType = {
  img: any;
  alt: string;
  title: string;
  description: string;
  date: string;
}[];
function normalizeString(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яё]/gi, ""); // remove everything except letters and digits, no spaces
}
export default function useFilteredTools(tools: ToolsType) {
  const { inputValue, activeFilters } = useSelector(
    (state: RootState) => state.filters
  );

  const normalizedInput = normalizeString(inputValue);

  return tools.filter((tool) => {
    const normalizedTitle = normalizeString(tool.title);

    const matchesInput = normalizedTitle.includes(normalizedInput);

    const normalizedActiveFilters = activeFilters; // they should be normalized already

    const matchesFilter =
      normalizedActiveFilters.length === 0 ||
      normalizedActiveFilters.some((f) => f === normalizedTitle);
    return matchesInput && matchesFilter;
  });
}
