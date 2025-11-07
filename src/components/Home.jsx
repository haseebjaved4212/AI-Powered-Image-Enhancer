import UploadImage from "./UploadImage";
import Preview from "./Preview";
import { useState } from "react";

const Home = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [Loading, setLoading] = useState(false);
  // Calling Api To Enhance Image
  const UploadImageHandler = async (file) => {
    setOriginalImage(URL.createObjectURL(file));

    setLoading(true);
    try {
      const enhancedUrl = await enhancedImageApi(file);
      setEnhancedImage(enhancedUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to enhance image. Please try again.");
      setLoading(false);
    }
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
