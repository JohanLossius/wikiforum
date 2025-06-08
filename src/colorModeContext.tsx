
import { createContext, useContext, useState, ReactNode } from 'react';

interface ColorModeContextType {
  colorMode: 'light' | 'dark' | 'read';
  toggleColorMode: () => void;
  setColorMode: (mode: 'light' | 'dark' | 'read') => void; // <-- add this
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'read'>('light');

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'read' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode(): ColorModeContextType {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
}