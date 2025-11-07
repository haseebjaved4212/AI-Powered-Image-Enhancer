import UploadImage from "./UploadImage";
import Preview from "./Preview";
import { useState } from "react";

const Home = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [Loading, setLoading] = useState(false);

  const UploadImageHandler = (file) => {
    setOriginalImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));

    setLoading(true);
  };
  return (
    <>
      <UploadImage
        UploadImageHandler={UploadImageHandler}
        originalImage={originalImage}
        setOriginalImage={setOriginalImage}
      />

      <Preview
        Loading={Loading}
        originalImage={originalImage}
        enhancedImage={enhancedImage}
      />
    </>
  );
};

export default Home;
