import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <Router>
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
