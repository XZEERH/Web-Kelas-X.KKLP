import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnggotaInteraktif = () => {
  const [isScattered, setIsScattered] = useState(false);
  const anggota = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    name: `Anggota ${i + 1}`,
    absen: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`
  }));

  const handleScatter = () => {
    setIsScattered(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 relative min-h-[800px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black italic uppercase tracking-tight">Daftar Anggota</h2>
        <p className="text-slate-500 mt-2 italic">Klik salah satu kartu untuk mengaktifkan gravitasi</p>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 ${isScattered ? 'block' : 'grid'}`}>
        {anggota.map((person) => (
          <motion.div
            key={person.id}
            layout
            drag={isScattered}
            dragConstraints={{ left: -100, right: 1200, top: -100, bottom: 800 }}
            onClick={handleScatter}
            initial={false}
            animate={isScattered ? {
              x: Math.random() * 200 - 100,
              y: Math.random() * 500 + 100,
              rotate: Math.random() * 90 - 45,
              position: 'absolute' as const
            } : {}}
            className={`
              p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer select-none
              ${isScattered ? 'bg-white z-10 w-32' : 'bg-white hover:bg-slate-100 transition-colors'}
            `}
          >
            <div className="text-xs font-bold text-blue-600 mb-1">ABSEN {person.absen}</div>
            <div className="font-bold text-sm uppercase truncate">{person.name}</div>
          </motion.div>
        ))}
      </div>
      
      {isScattered && (
        <button 
          onClick={() => window.location.reload()}
          className="fixed bottom-10 right-10 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-xl z-50"
        >
          Reset Posisi
        </button>
      )}
    </div>
  );
};
export default AnggotaInteraktif;