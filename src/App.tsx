import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MountainPage from "./pages/mountain/mountainPage";
import OceanPage from "./pages/ocean/oceanPage";
import ForestPage from "./pages/forest/forestPage";
import NotFound from "./pages/notFound/notFoundPage";

const App = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Bebas Neue",
          fontSize: "80px",
          textAlign: "center",
        }}
      >
        Snapshot
      </Typography>
      <Header />
      <Routes>
        <Route path="/" element={<MountainPage />} />
        <Route path="/Mountains" element={<MountainPage />} />
        <Route path="/Oceans" element={<OceanPage />} />
        <Route path="/Forests" element={<ForestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
