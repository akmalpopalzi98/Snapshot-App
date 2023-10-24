import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}
    >
      <input style={{ fontSize: "16px", padding: "10px", height: "10px" }} />
      <button
        style={{
          backgroundColor: " #212f3d",
          color: "white",
          border: "none",
        }}
      >
        <SearchIcon />
      </button>
    </Box>
  );
};

export default SearchBar;
