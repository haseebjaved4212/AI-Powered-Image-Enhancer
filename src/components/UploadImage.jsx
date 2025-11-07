const UploadImage = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
    // console.log(file);
  };
  return (
    <div className=" bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl mt-6 ">
      <label
        htmlFor="fileinput"
        className="block text-sm border border-gray-600 rounded-md p-4 text-center font-medium hover:border-gray-500 transition-all text-gray-300 mb-2 cursor-pointer"
      >
        <input
          type="file"
          id="fileinput"
          className="hidden "
          onChange={ShowImageHandler}
        />
        Upload your Image And Enhance with AI
      </label>
    </div>
  );
};

export default UploadImage;
