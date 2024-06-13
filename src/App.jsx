import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';
import PreLoader from './components/PreLoader/PreLoader'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <PreLoader />
      <div className="App">
        <NavBar load={load} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  )
}

export default App
