import React from "react";

const Preview = (props) => {
  console.log(props);
  return (
    <div className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
      <div className=" overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-300 py-2 text-center">
          Original Image
        </h2>
        {props.originalImage ? (
          <img
            src={props.originalImage}
            alt="SomeThing Went Wrong"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-80 bg-gray-700 rounded-md text-amber-50">
            {" "}
            No Image Selected
          </div>
        )}
      </div>
      <div className="overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-300 py-2 text-center">
          Enhanced Image
        </h2>
        {props.enhancedImage && !props.Loading && (
          <img
            src={props.enhancedImage}
            alt="SomeThing Went Wrong"
            className="w-full h-full object-cover"
          />
        )}{" "}
        {props.Loading ? (
          <div className="flex items-center justify-center w-full h-80 bg-gray-700 rounded-md text-amber-50">
            <div
              className="flex flex-col items-center"
              role="status"
              aria-live="polite"
            >
              <div className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
              <span className="mt-3 text-sm text-gray-200">
                Loading Image...
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-80 bg-gray-700 rounded-md text-amber-50">
            {" "}
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
