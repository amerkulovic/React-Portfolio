import Header from "./components/homeComponents/Header";
import Body from "./pages/Body";
import Footer from "./components/homeComponents/Footer";
import Contact from "./components/pageComponents/Contact";
import Resume from "./components/pageComponents/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/homeComponents/About.js";

function App() {
  return (
    <Router basename="/React-Portfolio">
      <div>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Body />} />
        </Routes>
        {/* <Body /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
