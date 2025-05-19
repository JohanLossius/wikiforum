import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white py-10 mt-12">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold mb-2">Wiki</h3>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm opacity-80">
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-3 text-xl">
            <a href="#" aria-label="Twitter" className="hover:text-gray-400 transition-colors">💬</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-400 transition-colors">💬</a>
            <a href="#" aria-label="Discord" className="hover:text-gray-400 transition-colors">💬</a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <div className="text-center text-xs opacity-70">© 2025 All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 