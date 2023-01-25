// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Work from "./pages/Work";
// import Projects from "./pages/Projects";
import About from "./pages/About";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;