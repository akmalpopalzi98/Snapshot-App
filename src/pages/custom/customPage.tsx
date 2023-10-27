import { Box } from "@mui/material";
import ListImages from "../../components/listImages";
import { useSearchBar } from "../../hooks/useSearchBar";

const customPage = () => {
  const { text } = useSearchBar();
  return (
    <Box>
      <ListImages term={text} />
    </Box>
  );
};

export default customPage;
