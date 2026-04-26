import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { UserCircle2, Zap } from 'lucide-react';

const AnggotaInteraktif = () => {
  const [isScattered, setIsScattered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  const anggota = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    nama: `Siswa ${i + 1}`,
    absen: i + 1 < 10 ? `0${i + 1}` : i + 1
  }));

  // Fungsi Guncang (Shake Effect)
  const shakeCards = async () => {
    await controls.start({
      x: [0, -20, 20, -20, 20, 0],
      transition: { duration: 0.4 }
    });
  };

  // Sensor Goyang (Accelerometer) untuk HP
  useEffect(() => {
    const handleMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (acc && (Math.abs(acc.x || 0) > 15 || Math.abs(acc.y || 0) > 15)) {
        if (isScattered) shakeCards();
      }
    };

    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotion);
    }
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, [isScattered]);

  return (
    <section id="anggota" className="py-24 bg-zinc-200 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-black italic uppercase">Daftar Anggota</h2>
        <p className="text-slate-500 italic mt-2">Klik kartu & Goyangkan HP untuk mengacaukan!</p>
        
        {isScattered && (
          <button 
            onClick={shakeCards}
            className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-black flex items-center gap-2 mx-auto shadow-lg active:scale-95"
          >
            <Zap size={16} fill="black" /> GUNCANG MANUAL
          </button>
        )}
      </div>

      {/* Container "Kandang" (Cage) */}
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 min-h-[600px] bg-white/30 rounded-[3rem] border-4 border-dashed border-white/50 relative p-8"
      >
        <div className={`grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 ${isScattered ? 'block' : 'grid'}`}>
          {anggota.map((person) => (
            <motion.div
              key={person.id}
              layout
              drag={isScattered}
              // Ini yang mengurung kartu agar tidak keluar dari containerRef
              dragConstraints={containerRef}
              dragElastic={0.2}
              animate={controls}
              onDragStart={() => setIsScattered(true)}
              onClick={() => setIsScattered(true)}
              initial={false}
              className={`
                p-4 bg-white rounded-2xl shadow-xl border border-slate-200 cursor-grab active:cursor-grabbing select-none
                ${isScattered ? 'absolute z-10 w-36' : 'relative'}
              `}
              style={isScattered ? {
                left: `${Math.random() * 60 + 10}%`,
                top: `${Math.random() * 60 + 10}%`,
              } : {}}
            >
              <div className="flex flex-col items-center text-center">
                <UserCircle2 size={40} className="text-blue-500 mb-2" />
                <div className="text-[10px] font-black text-slate-400">ABSEN {person.absen}</div>
                <div className="font-bold text-xs uppercase italic truncate w-full">{person.nama}</div>
              </div>
              
              {/* Dekorasi Card */}
              <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-2/3"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isScattered && (
        <button 
          onClick={() => window.location.reload()}
          className="fixed bottom-10 right-10 z-[120] bg-black text-white px-8 py-4 rounded-full font-black shadow-2xl hover:bg-blue-600 transition-colors"
        >
          RESET POSISI
        </button>
      )}
    </section>
  );
};

export default AnggotaInteraktif;