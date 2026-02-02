import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button 
      className={`theme-toggle ${isAnimating ? 'spinning' : ''}`}
      onClick={handleClick}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
    </button>
  );
}

export default ThemeToggle;
