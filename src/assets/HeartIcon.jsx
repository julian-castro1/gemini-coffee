import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const HeartIcon = ({ width = '24px', filled = false, onClick }) => {
    const theme = useContext(ThemeContext) || {};

    const defaultTheme = {
        color: 'red', // Default fill color
        background: 'black', // Default border color
        primary: 'red', // Default primary color
    };

    // Merged theme with defaults to handle undefined values
    const effectiveTheme = { ...defaultTheme, ...theme };

    const fillColor = filled ? effectiveTheme.color : 'none';
    const borderColor = effectiveTheme.color;

    const pathStyle = {
        fill: fillColor, // Fill color when filled is true, otherwise theme color
        stroke: borderColor, // Border color
        strokeWidth: '50' // Width of the border stroke
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={width} viewBox="-60 -60 550 500" width={width} onClick={onClick}>
          <g transform="matrix(1,0,0,1,-1944.24,-970.441)">
            <g transform="matrix(0.879591,0,0,1,233.618,0)">
                <path 
                    d="M2190.78,1044.74C2242.92,954.848 2345.36,956.576 2399.36,999.792C2475.17,1060.46 2427.73,1149.47 2388.9,1191.02C2295.68,1290.76 2200.5,1357.46 2197.34,1358.73C2197.34,1358.73 2197.34,1358.73 2197.34,1358.73C2197.34,1358.73 2197.34,1358.73 2197.34,1358.73C2194.18,1357.46 2074.78,1280.25 1990.82,1189.05C1952.3,1147.2 1914.27,1057.33 1982.2,999.792C2034.79,955.249 2138.63,954.848 2190.78,1044.74Z" 
                    style={pathStyle}
                />
            </g>
          </g>
        </svg>
    );
};

export default HeartIcon;
