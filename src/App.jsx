import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-8 px-4 ">
      <div className="text-center text-lg text-gray-300 ">
        <h1 className="text-4xl font-bold mb-6 text-amber-50">
          Image Enhancer
        </h1>
        <p className="text-lg text-gray-100">Enhance your images with ease</p>
      </div>

      <Home />

      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4 w-full max-w-4xl">
        &copy; 2024 Image Enhancer. All rights reserved.
      </div>
        
    </div>
  );
}

export default App
