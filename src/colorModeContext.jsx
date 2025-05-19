import React, { createContext, useContext, useState } from 'react';

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState('light');
  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) throw new Error('useColorMode must be used within a ColorModeProvider');
  return context;
} 