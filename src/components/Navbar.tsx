import { useState } from 'react';
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Tutup menu mobile setelah klik
    }
  };

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter uppercase">X.KKLP</div>
        
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleScroll(e, item.href)}
              className="text-xs font-bold uppercase hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="flex flex-col p-6 gap-6 font-black uppercase text-lg text-center">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;