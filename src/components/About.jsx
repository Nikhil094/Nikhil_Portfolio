import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/nikhil.jpg';
import resume from '../assets/Nikhil_Resume.pdf';

function About() {
  return (
    <motion.section
      id="about"
      style={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>About Me</h1>

      <img src={profilePic} alt="Nikhil Deshmukh" style={styles.image} />

      <p>
        I'm Nikhil Sanjayrao Deshmukh, an MCA graduate passionate about full-stack development. I love building smart solutions using Python, Django, React, and more.
      </p>

      <a href={resume} download style={styles.button}>
        📄 Download Resume
      </a>
    </motion.section>
  );
}

const styles = {
  container: {
    padding: '40px 5vw',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
  },
  image: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '3px solid #0a192f',
  },
  button: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#0a192f',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default About;
