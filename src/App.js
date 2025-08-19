import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import WebProjectsPage from "./components/projects/WebProjectsPage";
import AIMLProjectsPage from "./components/projects/AIMLProjectPage";
import YouTubePage from "./components/sndev/YouTubePage";
import ChannelPage from "./components/sndev/ChannelPage";
import Resume from "./components/resume/Resume";

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
          <Route path="/sndev" element={<YouTubePage />} />
          <Route path="/sndev-channel" element={<ChannelPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
