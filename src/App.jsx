import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/navabar";
import Footer from "./components/footer";
import Abouts from "./pages/abouts";
import Landing from "./pages/landing";
import Chefs from "./pages/chefs";
import Workshop from "./pages/workshop";
import "./App.css";

function App() {
  const [device, setDevice] = useState("desktop");
  return (
    <>
      <Header device={device} setDevice={setDevice} />
      <div className={`page-container ${device}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
