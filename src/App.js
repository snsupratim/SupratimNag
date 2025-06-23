import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import WebProjectsPage from "./components/projects/WebProjectsPage";
import AIMLProjectsPage from "./components/projects/AIMLProjectPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/web-development" element={<WebProjectsPage />} />
          <Route path="/aiml-development" element={<AIMLProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
