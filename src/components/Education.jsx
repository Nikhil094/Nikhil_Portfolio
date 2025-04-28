import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: '60px 5vw', backgroundColor: '#f0fff4', textAlign: 'center' }}
    >
      <h2 style={styles.sectionTitle}>🎓 Education</h2>
      <div style={styles.edu}><h3>MCA</h3><p>PES Modern College, Pune — 71.47%</p></div>
      <div style={styles.edu}><h3>BSc (CS)</h3><p>K. J. Somaiya College — 73.55%</p></div>
      <div style={styles.edu}><h3>HSC & SSC</h3><p>Dr. D. A. Ohara Jr. College / B.G.P. Sahyadri — 51.38%, 69.60%</p></div>
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
  edu: {
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    maxWidth: '600px',
    margin: '0 auto 20px auto',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default Education;
