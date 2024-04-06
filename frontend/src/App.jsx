import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Footer from "./Components/Footer";
import Articles from "./Pages/Articles";
import Dass from "./Pages/Dass";
import Community from "./Pages/Community";

function App() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const navBarHandler = (val) => {
    setOpenNavbar(val);
  };

  return (
    <Router>
      <Header navbarHandler={navBarHandler} />
      <Routes>
        <Route path="/" element={<About open={openNavbar} />} />
        <Route path="/about" element={<About open={openNavbar} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/dass" element={<Dass />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
