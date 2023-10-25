import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchBar } from "../hooks/useSearchBar";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { text, changeText } = useSearchBar();
  const [isHovered, setIsHovered] = useState(false);

  // Initialize state from localStorage on component mount
  useEffect(() => {
    const storedText = localStorage.getItem("searchText");
    if (storedText) {
      changeText(storedText);
    }
  }, []);

  // Update localStorage whenever text state changes
  useEffect(() => {
    localStorage.setItem("searchText", text);
  }, [text]);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/${text}`);
  };

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
          value={text}
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
