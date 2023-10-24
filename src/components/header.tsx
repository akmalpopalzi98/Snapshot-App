import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Button sx={{ backgroundColor: "#212f3d" }} variant="contained">
        <Link
          to="/Mountains"
          style={{
            textDecoration: "None",
            textDecorationColor: "None",
            color: "white",
          }}
        >
          Mountains
        </Link>
      </Button>
      <Button sx={{ backgroundColor: "#212f3d" }} variant="contained">
        <Link
          to="/Oceans"
          style={{
            textDecoration: "None",
            textDecorationColor: "None",
            color: "white",
          }}
        >
          Oceans
        </Link>
      </Button>
      <Button sx={{ backgroundColor: "#212f3d" }} variant="contained">
        <Link
          to="/Forests"
          style={{
            textDecoration: "None",
            textDecorationColor: "None",
            color: "white",
          }}
        >
          Forests
        </Link>
      </Button>
    </Box>
  );
};

export default header;
