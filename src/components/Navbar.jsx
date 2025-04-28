import React from 'react';

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav style={{
      ...styles.nav,
      backgroundColor: darkMode ? '#1a1a2e' : '#0a192f',
    }}>
      <div style={styles.navContent}>
        <h2 style={styles.logo}>Nikhil</h2>

        <ul style={styles.links}>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#skills" style={styles.link}>Skills</a></li>
          <li><a href="#projects" style={styles.link}>Projects</a></li>
          <li><a href="#education" style={styles.link}>Education</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>

        <button onClick={toggleTheme} style={styles.button}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 20,
    zIndex: 1000,
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  navContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1100px',
    backgroundColor: '#112240',
    borderRadius: '40px',
    padding: '15px 30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFD700',
  },
  links: {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#FFD700',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  button: {
    padding: '8px 14px',
    backgroundColor: 'transparent',
    border: '2px solid #FFD700',
    color: '#FFD700',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Navbar;
