import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { fetchData } from "../../API";

const MountainPage = () => {
  const [imageList, setImageList] = useState([{}]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData("mountains");
        setImageList(response);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(imageList);

  return <Box>Mountain Page</Box>;
};

export default MountainPage;
