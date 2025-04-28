import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiPhp,
  SiDjango, SiReact, SiBootstrap, SiSass, SiMongodb, SiMysql, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import profilePic from '../assets/nikhil.jpg'; // ✅ Make sure the path is correct

function AboutAndSkills() {
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
    { name: "Git", icon: <SiGit color="#F05032" /> }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={styles.container}
    >
      <img src={profilePic} alt="Nikhil Deshmukh" style={styles.profileImage} />
      <h1 style={styles.heading}>Hi, I'm Nikhil Sanjayrao Deshmukh</h1>
      <p style={styles.subhead}>An MCA graduate passionate about full-stack development.</p>
      <h2 style={styles.sectionTitle}>🚀 Technical Skills</h2>
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
    padding: '60px 5vw',
    backgroundColor: '#f0f4ff',
    textAlign: 'center',
  },
  profileImage: {
    width: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#0a192f',
  },
  subhead: {
    fontSize: '18px',
    margin: '5px 0 30px',
    color: '#333',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0a192f',
    marginTop: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '110px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  icon: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#444',
  },
};

export default AboutAndSkills;