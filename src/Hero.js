import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero app-section">
      <div className="hero-container section-container">
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Richard Kwaku Opoku" className="profile-picture" />
        </div>
        <div className="hero-text">
          <p className="hero-kicker">Portfolio</p>
          <h1>Richard Kwaku Opoku</h1>
          <h2>Full-Stack Developer and Computer Engineering Student</h2>
          <h3>Building practical web and mobile products.</h3>
          <div className="hero-buttons">
            <a href={process.env.PUBLIC_URL + '/RICHARD KWAKU OPOKU.pdf'} className="download-cv" download>
              <FaDownload /> Download CV
            </a>
          </div>
          <div className="hero-social">
            <a
              href="https://github.com/amaroidev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/richardkwakuopoku982"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ce-rkopoku9823@st.umat.edu.gh"
              className="social-icon"
              aria-label="Send me an email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;