import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import MountainPage from "./pages/mountain/mountainPage";
import OceanPage from "./pages/ocean/oceanPage";
import ForestPage from "./pages/forest/forestPage";
import NotFound from "./pages/notFound/notFoundPage";
import CustomPage from "./pages/custom/customPage";
import { useSearchBar } from "./hooks/useSearchBar";

const App = () => {
  const { text } = useSearchBar();

  return (
    <Box sx={{ width: "1200px", margin: "0 auto" }}>
      <Typography
        sx={{
          fontFamily: "Bebas Neue",
          fontSize: "80px",
          textAlign: "center",
        }}
      >
        Snapshot
      </Typography>
      <SearchBar />
      <Header />
      <Routes>
        <Route path="/" element={<MountainPage />} />
        <Route path="/Mountains" element={<MountainPage />} />
        <Route path="/Oceans" element={<OceanPage />} />
        <Route path="/Forests" element={<ForestPage />} />
        <Route path={`/${text}`} element={<CustomPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
