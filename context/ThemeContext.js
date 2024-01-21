'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize state with value from localStorage if available
  const [isDay, setIsDay] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('isDay');
      return storedTheme !== null ? JSON.parse(storedTheme) : true;
    }
    return true; // Default value
  });

  useEffect(() => {
    // Update localStorage when isDay changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDay', JSON.stringify(isDay));
    }
  }, [isDay]);

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  return (
    <ThemeContext.Provider value={{ isDay, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
