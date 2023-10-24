import "./App.css";
import logo from "./logo.png";
import background from "./bg.jpg";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={backgroundImageStyle}
    >
      <div className="w-[72vh] h-[72vh] border-4 border-blue-400 border-dashed rounded-full rotate-fast"></div>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[68vh] h-[68vh] border-t-4 border-blue-400 border-solid rounded-full rotate-fast"></div>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[65vh] h-[65vh] border-t-4 border-blue-400 border-solid rounded-full rotate-slow"></div>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[55vh] h-[55vh] border-4 border-blue-400 border-solid rounded-full rotate-fast"></div>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[40vh] h-[40vh] border-8 border-blue-400 border-solid rounded-full rotate-slow"></div>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] border-t-4 border-blue-400 border-dashed rounded-full rotate-slow"></div>
      <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[45vh] h-[45vh] border-t-4 border-blue-400 border-dashed rounded-full rotate-fast"></div>
        <img
          src={logo}
          alt="Logo"
          className="top-32 w-[200px] h-[100px] mx-auto absolute inset-0 object-contain z-10"
        />
      </div>
    </div>
  );
}

export default App;
