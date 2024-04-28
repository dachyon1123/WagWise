import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Rates from "./pages/Rates";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/rates" element={<Rates />} />         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
