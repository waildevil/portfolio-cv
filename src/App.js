import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const NAVBAR_IS_FIXED = true;

  return (
    <Router>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />

        
        <main className={`flex-1 ${NAVBAR_IS_FIXED ? "pt-16" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
