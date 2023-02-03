// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Projects/Projects";

import Work from "./Work/Work";
import About from "./About/About";

// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/Projects" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Projects /> */}
      </Router>
    </div>
  );
}

export default App;