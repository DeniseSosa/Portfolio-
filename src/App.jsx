import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
