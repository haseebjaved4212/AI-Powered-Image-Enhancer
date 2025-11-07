import React from 'react'

const Preview = () => {
  return (
    <div className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
      <div className=" overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-300 py-2 text-center">
          Original Image
        </h2>
        <img src="" alt="" className="w-full h-full object-cover" />
        <div className="flex items-center justify-center w-full h-80 bg-gray-700 rounded-md text-amber-50"> NO Image Selected</div>
      </div>
      <div className="overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-300 py-2 text-center">
          Enhanced Image
        </h2>
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Preview
