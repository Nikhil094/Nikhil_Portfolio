// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Optional for external CSS
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-100 to-purple-200 text-gray-900 py-16 px-4 flex flex-col items-center text-center">
      <img
        src={profile}
        alt="Nikhil Deshmukh"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-white"
      />
      <h1 className="text-4xl font-bold mb-2">Nikhil Sanjayrao Deshmukh</h1>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Full Stack Web Developer</h2>
      <p className="max-w-xl text-gray-700">
        I am an enthusiastic fresher with a passion for web technologies and full-stack development. I love crafting responsive websites and scalable backend systems.
      </p>
    </section>
  );
}
