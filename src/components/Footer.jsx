import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer({ darkMode }) {
  const iconStyle = {
    margin: '0 10px',
    fontSize: '22px',
    transition: 'transform 0.3s ease, color 0.3s ease',
    color: darkMode ? '#ffffff' : '#1a202c',
  };

  const hoverStyle = {
    transform: 'scale(1.2)',
    color: '#4FD1C5', 
  };

  const containerStyle = {
    padding: '30px 20px',
    background: darkMode
      ? 'linear-gradient(to right, #1a202c, #2d3748)'
      : 'linear-gradient(to right, #e0f7fa, #f0fff4)',
    color: darkMode ? '#ffffff' : '#1a202c',
    textAlign: 'center',
    marginTop: '60px',
    borderTop: '2px solid #ccc',
  };

  return (
    <footer style={containerStyle}>
      <div style={{ marginBottom: '15px' }}>
        <a
          href="https://github.com/Nikhil094"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          style={iconStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, iconStyle)}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nik-deshmukh-09ap01/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          style={iconStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, iconStyle)}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:nikdeshmukh094@gmail.com"
          title="Email"
          style={iconStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, iconStyle)}
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+917875649045"
          title="Phone"
          style={iconStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, iconStyle)}
        >
          <FaPhone />
        </a>
      </div>

      <p style={{ fontSize: '14px', marginTop: '10px' }}>
        © 2025 <strong>Nikhil Sanjayrao Deshmukh</strong>. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
