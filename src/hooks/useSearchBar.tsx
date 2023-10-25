import { useContext } from "react";
import { SearchContext } from "../context/searchBarContext";

const useSearchBar = () => {
  const context = useContext(SearchContext);
  return context;
};

export { useSearchBar };
