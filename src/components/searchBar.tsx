import { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchBar } from "../hooks/useSearchBar";

const SearchBar = () => {
  const { text, changeText } = useSearchBar();
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.history.pushState({}, "", `/${text}`);
  };
  console.log(text);

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          alignItems: "center",
        }}
      >
        <input
          style={{ fontSize: "16px", padding: "10px", height: "10px" }}
          placeholder="search image"
          onChange={(event) => {
            changeText(event.target.value);
          }}
        />
        <button
          style={{
            backgroundColor: isHovered ? "#1abc9c" : "#212f3d",
            color: "white",
            border: "none",
            marginLeft: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SearchIcon />
        </button>
      </Box>
    </form>
  );
};

export default SearchBar;
