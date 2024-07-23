import React from 'react';
import { useTheme } from './ThemeContext';
import themeIcon from '../assets/theme-icon.svg';
import '../styles/themetogglebutton.css';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle-container">
            <button className="theme-toggle-button" onClick={toggleTheme}>
                <img src={themeIcon} alt="Toggle Theme" />
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
        </div>
    );
};

export { ThemeToggleButton };
