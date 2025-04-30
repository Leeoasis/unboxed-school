import Home from "./routes/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admissions from "./routes/Admissions"
import About from "./routes/About"
import Contact from "./routes/Contact"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
