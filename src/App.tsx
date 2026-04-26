import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star, Instagram } from 'lucide-react';

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Home", "Piket", "Anggota", "Moment", "Tentang"];
  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter">X.KKLP</div>
        <div className="hidden md:flex gap-8 font-bold uppercase text-xs">
          {menu.map(m => <a key={m} href={`#${m.toLowerCase()}`} className="hover:text-blue-600 transition-colors">{m}</a>)}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden bg-white p-6 flex flex-col gap-4 font-bold border-b">
            {menu.map(m => <a key={m} href={`#${m.toLowerCase()}`} onClick={() => setIsOpen(false)}>{m}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-16">
    <div className="hero-stars w-full min-h-[60vh] flex flex-col items-center justify-center text-white text-center p-6">
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-9xl font-black italic tracking-tighter">X.KKLP</motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-2xl font-light opacity-70">Selamat Datang Di Website X.KKLP</p>
    </div>
    <div className="max-w-6xl mx-auto px-6 -mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map(i => (
        <motion.div key={i} whileHover={{ y: -10 }} className="aspect-[3/4] bg-white rounded-2xl shadow-2xl border-4 border-white overflow-hidden">
          <img src={`https://picsum.photos/seed/class${i}/600/800`} className="w-full h-full object-cover" alt="hero" />
        </motion.div>
      ))}
    </div>
  </section>
);

const JadwalPiket = () => {
  const hari = [
    { n: "Senin", s: ["Andi", "Budi", "Caca", "Dedi"] },
    { n: "Selasa", s: ["Euis", "Fafa", "Gigi", "Haha"] },
    { n: "Rabu", s: ["Iwan", "Jaja", "Kiki", "Lala"] },
    { n: "Kamis", s: ["Mumu", "Nana", "Opi", "Pupu"] },
    { n: "Jumat", s: ["Rere", "Sisi", "Tata", "Uu"] }
  ];
  return (
    <section id="piket" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black italic mb-12 text-center uppercase">Jadwal Piket</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {hari.map(h => (
          <div key={h.n} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-black italic border-b-2 border-blue-500 mb-4 pb-2">{h.n}</h3>
            {h.s.map(s => <p key={s} className="text-slate-600 font-medium py-1"># {s}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
};

const AnggotaInteraktif = () => {
  const [scatter, setScatter] = useState(false);
  const list = Array.from({ length: 35 }, (_, i) => i + 1);
  return (
    <section id="anggota" className="py-24 bg-white relative overflow-hidden min-h-[700px]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-black italic uppercase">Daftar Anggota</h2>
        <p className="italic text-slate-400">Klik salah satu kartu untuk mengaktifkan gravitasi</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 md:grid-cols-7 gap-3">
        {list.map(i => (
          <motion.div
            key={i}
            layout
            drag={scatter}
            onClick={() => setScatter(true)}
            animate={scatter ? { x: Math.random() * 200 - 100, y: Math.random() * 400 + 50, rotate: Math.random() * 40 - 20 } : {}}
            className={`p-4 bg-off-white rounded-xl border border-slate-200 cursor-pointer shadow-sm ${scatter ? 'absolute z-10 w-24' : ''}`}
          >
            <div className="text-[10px] font-bold text-blue-500">#{i}</div>
            <div className="font-bold text-xs uppercase truncate">Siswa {i}</div>
          </motion.div>
        ))}
      </div>
      {scatter && <button onClick={() => window.location.reload()} className="fixed bottom-10 right-10 z-[110] bg-black text-white px-6 py-3 rounded-full font-bold shadow-2xl">Reset</button>}
    </section>
  );
};

const MomentGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const imgs = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/mom${i}/800/600`);
  return (
    <section id="moment" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black italic mb-12 text-center uppercase">Moment Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imgs.map((img, i) => (
          <div key={i} className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video" onClick={() => setSelected(img)}>
            <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="moment" />
            <Star className="absolute top-2 right-2 text-yellow-400" size={16} fill="currentColor" />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setSelected(null)}>
             <img src={selected} className="max-w-full max-h-full rounded-lg" alt="full" />
             <X className="absolute top-10 right-10 text-white cursor-pointer" size={40} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-black italic mb-8">X.KKLP</h2>
      <div className="grid grid-cols-4 gap-2 mb-12">
        {[1,2,3,4].map(i => <img key={i} src={`https://picsum.photos/seed/foot${i}/300/300`} className="rounded-xl grayscale hover:grayscale-0 transition-all" alt="foot" />)}
      </div>
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors font-bold"><Instagram size={20}/> @X.KKLP</a>
      </div>
      <p className="text-xs opacity-40 uppercase tracking-widest font-bold">X.KKLP @ 2026 - 2028 | DIBUAT OLEH RAZEERH</p>
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <JadwalPiket />
      <AnggotaInteraktif />
      <MomentGallery />
      <section id="tentang" className="py-24 bg-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black italic mb-8 uppercase">Tentang Kami</h2>
          <div className="space-y-6 text-lg font-medium text-slate-600 leading-relaxed italic">
            <p>Kami adalah keluarga besar X.KKLP, sekumpulan individu yang dipersatukan oleh takdir di ruang kelas yang sama. Lebih dari sekadar teman sebangku, kami adalah saudara dalam mengejar mimpi.</p>
            <p>Setiap tawa, argumen, dan kerja keras yang kami lalui bersama membentuk pondasi yang kuat untuk masa depan kami dari tahun 2026 hingga 2028 nanti.</p>
            <p>Website ini adalah ruang abadi untuk menyimpan setiap kenangan yang kita buat.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}