import React from 'react'
import { useTheme } from './ThemeContext'
import darkThemeIcon from '../assets/dark-theme-icon.svg'
import lightThemeIcon from '../assets/light-theme-icon.svg'
import '../styles/themetogglebutton.css'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle-container">
            <button className="theme-toggle-button" onClick={toggleTheme}>
                <img src={theme === 'light' ? darkThemeIcon : lightThemeIcon} alt="Toggle Theme" />
            </button>
        </div>
    );
};

export { ThemeToggleButton };
