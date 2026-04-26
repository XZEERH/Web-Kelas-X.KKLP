import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JadwalPiket from './components/JadwalPiket';
import AnggotaInteraktif from './components/AnggotaInteraktif';
import MomentGallery from './components/MomentGallery';
import About from './components/About';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f4f4f5]">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-4xl font-bold tracking-tighter"
      >
        X.KKLP<span className="text-blue-600">.</span>
      </motion.h1>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="piket" className="py-20 bg-white"><JadwalPiket /></section>
        <section id="anggota" className="py-20 bg-[#f4f4f5] overflow-hidden"><AnggotaInteraktif /></section>
        <section id="moment" className="py-20 bg-white"><MomentGallery /></section>
        <section id="tentang"><About /></section>
      </main>
      
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 italic underline decoration-blue-500">X.KKLP</h2>
          <div className="flex justify-center gap-6 mb-8 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
          <p className="text-sm opacity-60">X.KKLP @ 2026 - 2028 | DIBUAT OLEH RAZEERH</p>
        </div>
      </footer>
    </div>
  );
};

export default App;