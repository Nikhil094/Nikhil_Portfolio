import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiPhp,
  SiDjango, SiMongodb, SiMysql, SiReact, SiBootstrap, SiSass, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // ✅ Java icon from Font Awesome

function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "PHP", icon: <SiPhp color="#8892BE" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Sass", icon: <SiSass color="#CC6699" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={styles.container}
    >
      <h1 style={{ marginBottom: '30px' }}>Technical Skills</h1>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{skill.icon}</div>
            <p style={styles.label}>{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

const styles = {
  container: {
    padding: '40px 5vw',
    backgroundColor: '#f0f8ff',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '100px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  icon: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Skills;
