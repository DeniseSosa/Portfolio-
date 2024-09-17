import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

function App() {



  return (
    <div className="w-full bg-neutral-900 scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
