import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Jadwal Piket', href: '#piket' },
    { name: 'Daftar Anggota', href: '#anggota' },
    { name: 'Moment', href: '#moment' },
    { name: 'Tentang Kami', href: '#tentang' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-black italic tracking-tighter">X.KKLP</div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-bold uppercase hover:text-blue-600 transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4 flex flex-col items-center"
          >
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="font-bold">{item.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;