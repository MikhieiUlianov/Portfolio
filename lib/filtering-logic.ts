"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { GitHubRepo } from "./projects-action";

type ToolsType = {
  img: string;
  alt: string;
  title: string;
  description: string;
  date: string;
}[];

import { normalizeString } from "@/store/accordions-slice";

export function useFilteredTools(items: ToolsType) {
  const { activeFilters, inputValue } = useSelector(
    (state: RootState) => state.accordion
  );

  const normalizedInput = normalizeString(inputValue);

  return items.filter((item) => {
    const normalizedTitle = normalizeString(item.title);

    const matchesInput = normalizedTitle.includes(normalizedInput);

    const normalizedActiveFilters = activeFilters.toolsFilters;

    const matchesFilter =
      normalizedActiveFilters.length === 0 ||
      normalizedActiveFilters.some(
        (f) => normalizeString(f) === normalizedTitle
      );
    return matchesInput && matchesFilter;
  });
}

export function useFilteredRepos(items: GitHubRepo[]) {
  const { activeFilters, inputValue } = useSelector(
    (state: RootState) => state.accordion
  );

  const normalizedInput = normalizeString(inputValue);

  return items.filter((item) => {
    const normalizedTitle = normalizeString(item.name);
    const matchesInput = normalizedTitle.includes(normalizedInput);

    const filters = activeFilters.projectsFilters.map((f) =>
      normalizeString(f)
    );

    const matchesFilter = filters.every((filter) => {
      if (["javascript", "typescript", "python", "go", "rust"].includes(filter))
        return normalizeString(item.language || "") === filter;

      if (filter === "10") return item.stargazers_count < 10;
      if (filter === "1050")
        return item.stargazers_count >= 10 && item.stargazers_count <= 50;
      if (filter === "50200")
        return item.stargazers_count > 50 && item.stargazers_count <= 200;
      if (filter === "200") return item.stargazers_count > 200;

      if (filter === "thismonth")
        return (
          new Date(item.updated_at) >
          new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        );
      if (filter === "last3months")
        return (
          new Date(item.updated_at) >
          new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
        );
      if (filter === "lastyear")
        return (
          new Date(item.updated_at) >
          new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
        );
      if (filter === "older")
        return (
          new Date(item.updated_at) <=
          new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
        );
    });

    return matchesInput && matchesFilter;
  });
}
