import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

const AnggotaInteraktif = () => {
  // ==========================================================
  // EDIT DAFTAR NAMA SISWA DI SINI (URUTAN SESUAI ABSEN)
  // Kamu tinggal ganti teks di dalam tanda kutip ini.
  // ==========================================================
  const daftarSiswa = [
    "Siswa 1", "Siswa 2", "Siswa 3", "Siswa 4", "Siswa 5",
    "Siswa 6", "Siswa 7", "Siswa 8", "Siswa 9", "Siswa 10",
    "Siswa 11", "Siswa 12", "Siswa 13", "Siswa 14", "Siswa 15",
    "Siswa 16", "Siswa 17", "Siswa 18", "Siswa 19", "Siswa 20",
    "Siswa 21", "Siswa 22", "Siswa 23", "Siswa 24", "Siswa 25",
    "Siswa 26", "Siswa 27", "Siswa 28", "Siswa 29", "Siswa 30",
    "Siswa 31", "Siswa 32", "Siswa 33", "Siswa 34", "Siswa 35",
  ];
  // ==========================================================

  const [isScattered, setIsScattered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Sensor Gravitasi / Kemiringan HP
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (isScattered) {
        // Sensitivitas miring
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
        <p className="text-[10px] text-slate-500 italic font-bold uppercase tracking-widest leading-relaxed">
          Klik salah satu kartu untuk menjatuhkan identitas ke bawah! <br/> Miringkan HP untuk menggerakkan mereka.
        </p>
      </div>

      {/* KANDANG (Box Terkurung) */}
      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto px-2 min-h-[700px] bg-white/40 rounded-[2.5rem] border-2 border-dashed border-slate-300 relative p-4 overflow-hidden shadow-inner"
      >
        {/* Grid Responsive: 3 Kolom (HP), 5 Kolom (Laptop) */}
        <div className={`grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 ${isScattered ? 'block' : 'grid'}`}>
          {daftarSiswa.map((nama, i) => (
            <motion.div
              key={i}
              layout
              drag={isScattered}
              dragConstraints={containerRef} // MENGURUNG KARTU DALAM KANDANG
              dragElastic={0.05}
              onClick={() => setIsScattered(true)}
              // ANIMASI JATUH BERANTAKAN KE BAWAH
              animate={isScattered ? { 
                y: 500 + (Math.random() * 80) + (tilt.y * 10), // Jatuh ke tumpukan bawah
                x: tilt.x * 12,
                rotate: (Math.random() * 60 - 30) + (tilt.x * 2) 
              } : { y: 0, x: 0, rotate: 0 }}
              transition={{ type: "spring", damping: 18, stiffness: 70 }}
              className={`
                p-2 md:p-4 bg-white rounded-xl shadow-md border border-slate-200 cursor-grab active:cursor-grabbing select-none
                ${isScattered ? 'absolute z-10 w-24 md:w-32 shadow-2xl' : 'relative'}
              `}
              style={isScattered ? { 
                left: `${(i % 3) * 30 + (Math.random() * 5)}%`, // Atur posisi kiri agar berantakan
                top: '20px' 
              } : {}}
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

      {/* Tombol Reset Posisi Statis */}
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