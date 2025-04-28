import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutAndSkills from './components/AboutAndSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Import Footer
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Toggle dark mode
  const toggleTheme = () => setDarkMode(!darkMode);

  // Simulate a loading delay for the app to appear
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the loading screen timeout (2 seconds)
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Handle dynamic classes for the app container
  const appClasses = `min-h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`;

  return (
    <div className={appClasses}>
      {loading ? (
        // Show loader until loading state is false
        <Loader />
      ) : (
        <>
          {/* Pass darkMode and toggleTheme as props to Navbar and Footer */}
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

          {/* All sections/components for the portfolio */}
          <AboutAndSkills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Contact darkMode={darkMode} />

          {/* Footer component */}
          <Footer darkMode={darkMode} />

          {/* Scroll to top button */}
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
