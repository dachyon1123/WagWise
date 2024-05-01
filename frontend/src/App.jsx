import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import NavbarTest from "./components/NavbarTest";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Rates from "./pages/Rates";



export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <div className="flex-1">
          <NavbarTest />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/rates" element={<Rates />} />         
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}