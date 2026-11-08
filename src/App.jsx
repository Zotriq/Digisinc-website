import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Components/Home-Page/Home.jsx';
import Services from './assets/Components/Services/Services.jsx';
import Portfolio from './assets/Components/Portfolio/Portfolio.jsx';
import Contact from './assets/Components/Contact/Contact.jsx';
import Navbar from './assets/Components/Navbar.jsx';
import './App.css';
import ScrollToTop from './assets/Components/ScrollToTop.jsx';
import useLocomotiveScroll from './hooks/useLocomotiveScroll.js';

const App = () => {
  const containerRef = useRef(null);
  const scrollInstance = useLocomotiveScroll(containerRef);

  return (
    <>
      {/* Navbar lives outside the scroll container so position:fixed works correctly */}
      <Navbar />
      <div
        ref={containerRef}
        data-scroll-container
        className='App'
      >
        <ScrollToTop scrollInstance={scrollInstance} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
