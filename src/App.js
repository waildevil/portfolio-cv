import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow" style={{height:'300px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
