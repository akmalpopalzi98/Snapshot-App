import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define types for context values
type SearchContextType = {
  text: string;
  changeText: Dispatch<SetStateAction<string>>;
};

const initialContextValue: SearchContextType = {
  text: "", // initial text value
  changeText: () => {}, // a dummy function to avoid errors
};

// Create a context with initial values
const SearchContext = createContext<SearchContextType>(initialContextValue);

// Create a context provider component
const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [text, changeText] = useState<string>("");

  const contextValue: SearchContextType = {
    text,
    changeText,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
