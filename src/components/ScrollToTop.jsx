import React, { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById('scrollToTop');
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollToTop"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none',
        padding: '10px 20px',
        backgroundColor: '#0a192f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: '999',
      }}
      onClick={() => window.scrollTo(0, 0)}
    >
      ↑ Top
    </button>
  );
}

export default ScrollToTop;
