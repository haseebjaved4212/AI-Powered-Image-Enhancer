const API_KEY = "wxj06sxcjxmkj7nf0";
const Base_URL = `https://techhk.aoscdn.com/api/tasks/visual/scale/`;

import axios from "axios";




const enhancedImageApi = async (file) => {
  //  Code To Call the  API to Enhance Image
  try {
    const taskId = await uploadImage(file);
    console.log("Task ID:", taskId);
    const enhancedImageData = await getEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);
    // return enhancedImageData;

  } catch (error) {
    console.log("Error Enhancing Image:", error.message);

  }

};

const uploadImage = async (file) => {


  // Code To Upload Image
  // /api/tasks/visual/scale --PostApi

  const formData = new FormData();
  formData.append("image_file", file);


  const { data } = await axios.post(`${Base_URL}/api/tasks/visual/scale`, formData, {
    headers: {

      "Content-Type": "multipart/form-data",
      "X-API-KEY": API_KEY,
    },
  })
  console.log(data);

  // return taskId;

};
const getEnhancedImage = async (taskId) => {

  // Code To Get Enhanced Image
  // /api/tasks/visual/scale/{task_id} --GetApi
};

export { enhancedImageApi, uploadImage, getEnhancedImage };
