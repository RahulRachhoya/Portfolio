import { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save theme preference
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <span className="theme-toggle-icon">
                {theme === 'light' ? '☾' : '☀'}
            </span>
            <span className="theme-toggle-text">
                {theme === 'light' ? 'DARK' : 'LIGHT'}
            </span>
        </button>
    );
};

export default ThemeToggle;
