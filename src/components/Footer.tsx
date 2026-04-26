import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo/Branding */}
        <h2 className="text-3xl font-black italic mb-6 tracking-tighter">X.KKLP</h2>
        
        {/* Social Links */}
        <div className="flex gap-8 mb-10">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold hover:text-blue-500 transition-colors group"
          >
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-blue-600 transition-colors">
              <Instagram size={20} />
            </div>
            <span>@X.KKLP</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-white/10 mb-8"></div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-[11px] tracking-[0.4em] font-bold opacity-40 uppercase">
            X.KKLP @ 2026 - 2028
          </p>
          <p className="text-[10px] tracking-widest font-black text-blue-500 uppercase">
            DIBUAT OLEH RAZEERH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;