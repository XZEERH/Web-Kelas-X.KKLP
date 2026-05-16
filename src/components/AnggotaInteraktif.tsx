import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

const AnggotaInteraktif = () => {
  // ==========================================================
  // EDIT DAFTAR NAMA SISWA DI SINI (URUTAN SESUAI ABSEN)
  // ==========================================================
  const daftarSiswa = [
    "Nama Siswa 1",  // Absen 1
    "Nama Siswa 2",  // Absen 2
    "Nama Siswa 3",  // Absen 3
    "Nama Siswa 4",  // Absen 4
    "Nama Siswa 5",  // Absen 5
    "Nama Siswa 6",
    "Nama Siswa 7",
    "Nama Siswa 8",
    "Nama Siswa 9",
    "Nama Siswa 10",
    "Nama Siswa 11",
    "Nama Siswa 12",
    "Nama Siswa 13",
    "Nama Siswa 14",
    "Nama Siswa 15",
    "Nama Siswa 16",
    "Nama Siswa 17",
    "Nama Siswa 18",
    "Nama Siswa 19",
    "Nama Siswa 20",
    "Nama Siswa 21",
    "Nama Siswa 22",
    "Nama Siswa 23",
    "Nama Siswa 24",
    "Nama Siswa 25",
    "Nama Siswa 26",
    "Nama Siswa 27",
    "Nama Siswa 28",
    "Nama Siswa 29",
    "Nama Siswa 30",
    "Nama Siswa 31",
    "Nama Siswa 32",
    "Nama Siswa 33",
    "Nama Siswa 34",
    "Nama Siswa 35",
  ];
  // ==========================================================

  const [isScattered, setIsScattered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Sensor Gravitasi / Kemiringan HP
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (isScattered) {
        // Sensitivitas miring (makin kecil pembagi, makin sensitif)
        const x = e.gamma ? e.gamma / 1.5 : 0; 
        const y = e.beta ? (e.beta - 45) / 1.5 : 0; 
        setTilt({ x, y });
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [isScattered]);

  return (
    <section id="anggota" className="py-12 bg-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Daftar Anggota</h2>
        <p className="text-[10px] text-slate-500 italic font-bold uppercase tracking-widest">
          Klik kartu & miringkan HP untuk interaksi gravitasi
        </p>
      </div>

      {/* Kandang Box Identitas */}
      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto px-2 min-h-[600px] bg-white/40 rounded-[2.5rem] border-2 border-dashed border-slate-300 relative p-4 overflow-hidden shadow-inner"
      >
        {/* Grid Responsive: 3 Kolom (HP), 5 Kolom (Laptop) */}
        <div className={`grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 ${isScattered ? 'block' : 'grid'}`}>
          {daftarSiswa.map((nama, i) => (
            <motion.div
              key={i}
              layout
              drag={isScattered}
              dragConstraints={containerRef} // Mengurung kartu agar tidak keluar box
              dragElastic={0.1}
              onClick={() => setIsScattered(true)}
              // Animasi smooth mengikuti tilt HP
              animate={isScattered ? { 
                x: tilt.x * 6, 
                y: tilt.y * 6,
                rotate: tilt.x * 1.5 
              } : { x: 0, y: 0, rotate: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
              className={`
                p-2 md:p-4 bg-white rounded-xl shadow-md border border-slate-200 cursor-grab active:cursor-grabbing select-none
                ${isScattered ? 'absolute z-10 w-24 md:w-32 shadow-2xl' : 'relative'}
              `}
            >
              <div className="flex flex-col items-center text-center">
                <UserCircle2 size={24} className="text-blue-500 mb-1" />
                <div className="text-[8px] font-black text-slate-400">ABSEN {i + 1}</div>
                <div className="font-bold text-[9px] md:text-[11px] uppercase italic leading-tight truncate w-full">
                  {nama}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tombol Reset Posisi Statis (Di bawah kandang) */}
      {isScattered && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => window.location.reload()}
            className="bg-black text-white px-10 py-3 rounded-full font-black text-xs shadow-xl active:scale-95 transition-all hover:bg-blue-600"
          >
            RESET POSISI
          </button>
        </div>
      )}
    </section>
  );
};

export default AnggotaInteraktif;