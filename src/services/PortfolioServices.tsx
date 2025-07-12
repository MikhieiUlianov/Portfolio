import { useCallback } from "react";
import { portfolioItems } from "../SideData";

const usePortfolioServices = () => {
  const getPortfolioItems = useCallback((start: number = 0, amount: number) => {
    return portfolioItems.slice(start, start + amount);
  }, []);
  return { getPortfolioItems };
};

export default usePortfolioServices;
