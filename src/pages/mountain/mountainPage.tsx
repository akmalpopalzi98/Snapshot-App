import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { fetchData } from "../../API";

interface ImageType {
  id: string;
  urls: {
    small: string;
    small_s3: string;
  };
}

const MountainPage = () => {
  const [isloading, setLoading] = useState(true);
  const [imageList, setImageList] = useState<ImageType[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData("mountains");
        setImageList(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const renderedData = imageList.map((image: ImageType) => {
    return (
      <img
        key={image.id}
        src={image.urls.small_s3}
        style={{ height: "200px", width: "200px" }}
      />
    );
  });

  console.log(imageList);
  return <Box>{isloading ? <CircularProgress /> : renderedData}</Box>;
};

export default MountainPage;
