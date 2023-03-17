import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
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
