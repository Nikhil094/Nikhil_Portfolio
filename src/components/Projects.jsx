import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: '60px 5vw', backgroundColor: '#fffbe6', textAlign: 'center' }}
    >
      <h2 style={styles.sectionTitle}>📁 Projects</h2>
      <div style={styles.project}><h3>Faculty Web Page Registration</h3><p>Built with HTML, CSS, JavaScript — part of ERP System.</p></div>
      <div style={styles.project}><h3>Task Tracker</h3><p>Python + Django app for managing and tracking tasks with deadlines.</p></div>
      <div style={styles.project}><h3>Songs Lyrics Extractor</h3><p>Django-based app to fetch lyrics using song/artist input.</p></div>
    </motion.section>
  );
}

const styles = {
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0a192f',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '30px',
  },
  project: {
    margin: '20px auto',
    backgroundColor: '#fff',
    padding: '20px',
    maxWidth: '600px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default Projects;
