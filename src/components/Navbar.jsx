import { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Set date to December 10, 2024 to match byline and footer
    setCurrentDate('DECEMBER 10, 2024');
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="masthead">
      <div className="newspaper-container">
        {/* Top Border */}
        <div className="masthead-border-top"></div>

        {/* Theme Toggle */}
        <div className="masthead-theme-toggle">
          <ThemeToggle />
        </div>

        {/* Newspaper Title */}
        <h1 className="masthead-title">THE RACHHOYA CHRONICLE</h1>

        {/* Publication Details */}
        <div className="masthead-details">
          <span className="masthead-volume">VOL. I</span>
          <span className="masthead-separator">•</span>
          <span className="masthead-location">INDIA</span>
          <span className="masthead-separator">•</span>
          <span className="masthead-date">{currentDate || 'DECEMBER 2024'}</span>
        </div>

        {/* Middle Border */}
        <div className="masthead-border-middle"></div>

        {/* Navigation Sections */}
        <nav className="masthead-nav">
          <button onClick={() => scrollToSection('hero')} className="nav-link">ABOUT</button>
          <span className="nav-separator">|</span>
          <button onClick={() => scrollToSection('projects')} className="nav-link">WORK</button>
          <span className="nav-separator">|</span>
          <button onClick={() => scrollToSection('experience')} className="nav-link">EXPERIENCE</button>
          <span className="nav-separator">|</span>
          <button onClick={() => scrollToSection('skills')} className="nav-link">SKILLS</button>
          <span className="nav-separator">|</span>
          <button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</button>
        </nav>

        {/* Bottom Border */}
        <div className="masthead-border-bottom"></div>
      </div>
    </header>
  );
};

export default Navbar;
