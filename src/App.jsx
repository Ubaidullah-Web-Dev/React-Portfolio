import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./Components/MainPage";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import ScrollProgress from "./Components/ScrollProgress";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer";
import { SiteDataProvider } from "./context/SiteDataContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 150,
    });
  }, []);

  return (
    <SiteDataProvider>
      <Router>
        <ScrollProgress />
        <ScrollToTopButton />
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </SiteDataProvider>
  );
}

export default App;
