// src/components/Navbar.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorMode } from '../colorModeContext';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colorMode, setColorMode } = useColorMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
    visible: { 
      opacity: 1,
      backdropFilter: 'blur(8px)',
      transition: { duration: 0.3 }
    }
  };

  // Bakgrunnsfarger basert på modus
  const bgColors = {
    light: 'bg-[#F5F4F0]',
    dark: 'bg-[#25231D]',
    read: 'bg-amber-50'
  };

  // Tekstfarger basert på modus
  const textColors = {
    light: 'text-gray-800',
    dark: 'text-white',
    read: 'text-gray-800'
  };

  return (
    <nav className={`${bgColors[colorMode]} shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className={`text-lg font-bold ${textColors[colorMode]}`}>LOGO</div>
        
        <div className="flex items-center gap-24">
          {/* Tre separate modus-knapper som sirkler */}
          <div className="relative flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full p-1.5">
            <motion.div
              className={`absolute w-5 h-5 rounded-full ring-2 ring-offset-1 ${
                colorMode === 'light' ? 'ring-yellow-500' : 
                colorMode === 'dark' ? 'ring-gray-600' : 
                'ring-amber-500'
              }`}
              animate={{
                left: colorMode === 'light' ? '0.375rem' : colorMode === 'dark' ? '2.125rem' : '3.875rem'
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <button
              onClick={() => setColorMode('light')}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: '#FFFFFF' }}
              aria-label="Light mode"
            />
            <button
              onClick={() => setColorMode('dark')}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: '#2B2923' }}
              aria-label="Dark mode"
            />
            <button
              onClick={() => setColorMode('read')}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: '#FFE89A' }}
              aria-label="Read mode"
            />
          </div>

          {/* 4-dot menu button */}
          <button 
            onClick={toggleMenu}
            className={`${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-700'} focus:outline-none hover:text-blue-500 transition-colors`}
            aria-expanded={isMenuOpen}
            aria-label="Menu"
          >
            <svg 
              className="w-8 h-8"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <circle cx="5" cy="7" r="4" />
              <circle cx="19" cy="7" r="4" />
              <circle cx="5" cy="17" r="4" />
              <circle cx="19" cy="17" r="4" />
            </svg>
          </button>
        </div>

        {/* Animated full-screen menu (uendret) */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                key="overlay"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
                onClick={toggleMenu}
              />
              
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <motion.nav 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <ul className="space-y-10">
                    <li>
                      <motion.a
                        href="#"
                        className="block text-5xl font-light text-white hover:text-blue-400 py-6"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        WIKI
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="#"
                        className="block text-5xl font-light text-white hover:text-blue-400 py-6"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        FORUM
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/posts"
                        className="block text-5xl font-light text-white hover:text-blue-400 py-6"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        POSTS
                      </motion.a>
                    </li>
                  </ul>
                </motion.nav>

                <button 
                  onClick={toggleMenu}
                  className="absolute top-8 right-8 text-white hover:text-gray-300"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;