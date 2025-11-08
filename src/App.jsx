import Home from "./components/Home";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 py-8 px-4 ">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">
          AI Image Enhancer{" "}
        </h1>
        <p className="text-lg text-gray-400">
          Upload your Image and Enhance it using AI
        </p>
      </div>

      <Home />

      <div className="text-lg border-t-2 mt-12 border-gray-700 text-center text-gray-500 ">&copy; 2025 Haseeb Javed . All rights reserved.</div>
    </div>
  );
};

export default App;