import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

const AnggotaInteraktif = () => {
  const [isScattered, setIsScattered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // EDIT NAMA SISWA DI SINI
  const daftarNama = [
    "Nama Siswa 1", "Nama Siswa 2", "Nama Siswa 3", "Nama Siswa 4",
    "Nama Siswa 5", "Nama Siswa 6", "Nama Siswa 7", "Nama Siswa 8",
    "Nama Siswa 9", "Nama Siswa 10", "Nama Siswa 11", "Nama Siswa 12",
    "Nama Siswa 13", "Nama Siswa 14", "Nama Siswa 15", "Nama Siswa 16",
    "Nama Siswa 17", "Nama Siswa 18", "Nama Siswa 19", "Nama Siswa 20",
    "Nama Siswa 21", "Nama Siswa 22", "Nama Siswa 23", "Nama Siswa 24",
    "Nama Siswa 25", "Nama Siswa 26", "Nama Siswa 27", "Nama Siswa 28",
    "Nama Siswa 29", "Nama Siswa 30", "Nama Siswa 31", "Nama Siswa 32",
    "Nama Siswa 33", "Nama Siswa 34", "Nama Siswa 35"
  ];

  const anggota = daftarNama.map((nama, i) => ({
    id: i,
    nama: nama,
    absen: i + 1 < 10 ? `0${i + 1}` : i + 1
  }));

  return (
    <section id="anggota" className="py-24 bg-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-black italic uppercase">Daftar Anggota</h2>
        <p className="text-slate-500 italic mt-2">Klik salah satu kartu identitas untuk menghancurkan formasi!</p>
      </div>

      {/* Kandang / Container - Diberi min-height agar layar tidak mental saat absolute */}
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 min-h-[800px] bg-white/50 rounded-[3rem] border-4 border-dashed border-slate-300 relative p-10 overflow-hidden"
      >
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 ${isScattered ? 'block' : 'grid'}`}>
          {anggota.map((person) => (
            <motion.div
              key={person.id}
              layout
              drag={isScattered}
              dragConstraints={containerRef}
              onClick={() => setIsScattered(true)}
              initial={false}
              animate={isScattered ? { 
                x: Math.random() * 300 - 150, 
                y: Math.random() * 500 + 50, 
                rotate: Math.random() * 90 - 45 
              } : { x: 0, y: 0, rotate: 0 }}
              className={`
                p-6 bg-white rounded-2xl shadow-lg border border-slate-200 cursor-grab active:cursor-grabbing select-none
                ${isScattered ? 'absolute z-10 w-40' : 'relative'}
              `}
            >
              <div className="flex flex-col items-center text-center">
                <UserCircle2 size={48} className="text-blue-500 mb-3" />
                <div className="text-xs font-black text-slate-400">ABSEN {person.absen}</div>
                <div className="font-bold text-sm uppercase italic leading-tight">{person.nama}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tombol Reset - Sekarang statis di bawah kandang, tidak ngikutin kamera */}
      {isScattered && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => window.location.reload()}
            className="bg-black text-white px-12 py-4 rounded-full font-black shadow-xl hover:bg-blue-600 transition-all active:scale-95"
          >
            RESET POSISI
          </button>
        </div>
      )}
    </section>
  );
};

export default AnggotaInteraktif;