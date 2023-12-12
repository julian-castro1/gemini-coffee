import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const BurgerIcon = ({width}) => {
    const theme = useContext(ThemeContext);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={width} viewBox="0 -960 960 960" width={width}>
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill={theme.color} />
    </svg>
  );
};

export default BurgerIcon;