import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import your updated layout
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;