import { Box, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchData } from "../API";

const listImages = ({ term }: { term: string }) => {
  const [isloading, setLoading] = useState(true);
  const [imageList, setImageList] = useState<ImageType[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData(term);
        setImageList(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getData();
  }, [term]);

  const renderedData = imageList.map((image: ImageType) => {
    return (
      <img
        key={image.id}
        src={image.urls.small_s3}
        style={{ height: "200px", width: "200px" }}
      />
    );
  });

  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          margin: "20px",
          display: "grid",
          gridTemplateColumns: "200px 200px 200px 200px 200px",
          columnGap: "10px",
          rowGap: "10px",
        }}
      >
        {isloading ? (
          <Box
            sx={{
              width: "990px",
              display: "flex",
              justifyContent: "center",
              marginLeft: "30px",
              height: "400px",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          renderedData
        )}
      </Box>
    </Box>
  );
};
export default listImages;

interface ImageType {
  id: string;
  urls: {
    small: string;
    small_s3: string;
  };
}
