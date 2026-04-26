import { useState } from 'react';
import { motion } from 'framer-motion';

const AnggotaInteraktif = () => {
  const [scatter, setScatter] = useState(false);
  const anggota = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    nama: `Siswa Ke-${i + 1}`,
    absen: i + 1
  }));

  return (
    <section id="anggota" className="py-24 relative overflow-hidden min-h-[800px] bg-zinc-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-black italic uppercase">Daftar Anggota</h2>
        <p className="italic text-slate-500 mt-2 font-medium text-sm">Klik kartu mana saja untuk mengaktifkan gravitasi</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {anggota.map((person) => (
          <motion.div
            key={person.id}
            layout
            drag={scatter}
            onClick={() => setScatter(true)}
            animate={scatter ? { 
              x: Math.random() * 400 - 200, 
              y: Math.random() * 600 + 100, 
              rotate: Math.random() * 90 - 45 
            } : {}}
            className={`
              p-4 bg-white rounded-2xl border border-slate-200 cursor-grab active:cursor-grabbing shadow-sm select-none
              ${scatter ? 'absolute z-10 w-32 shadow-2xl' : 'relative hover:bg-slate-50'}
            `}
          >
            <div className="text-[10px] font-black text-blue-600 mb-1">ABSEN {person.absen}</div>
            <div className="font-bold text-xs uppercase truncate italic">{person.nama}</div>
          </motion.div>
        ))}
      </div>

      {scatter && (
        <button 
          onClick={() => window.location.reload()}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-blue-600 text-white px-8 py-3 rounded-full font-black shadow-2xl"
        >
          RESET POSISI
        </button>
      )}
    </section>
  );
};

export default AnggotaInteraktif;