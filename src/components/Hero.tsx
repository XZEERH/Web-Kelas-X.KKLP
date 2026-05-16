import { motion } from 'framer-motion';

const Hero = () => {
  // Array untuk 4 foto utama di Hero
  const heroImages = [
    "assets/hero1.jpg",
    "assets/hero2.jpg",
    "assets/hero3.jpg",
    "assets/hero4.jpg"
  ];

  return (
    <section id="home" className="relative pt-16">
      {/* Latar Belakang Teks X.KKLP - Ganti URL di backgroundImage nnti */}
      <div 
        className="hero-stars aspect-video w-full max-h-[70vh] flex flex-col items-center justify-center text-white text-center p-6 bg-cover bg-center"
        style={{ backgroundImage: `url('assets/latar-x-kklp.jpg')`, backgroundColor: '#020617' }} // Backup warna gelap jika gambar tdk ada
      >
        <div className="bg-black/40 p-10 rounded-3xl backdrop-blur-sm">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black italic tracking-tighter mb-2"
          >
            X.KKLP
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl font-light opacity-80"
          >
            Selamat Datang Di Website X.KKLP
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Sisi Kiri (Foto 1 & 2) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
             <img src={heroImages[0]} className="rounded-2xl shadow-xl border-4 border-white aspect-[3/4] object-cover" alt="Hero 1"/>
             <img src={heroImages[1]} className="rounded-2xl shadow-xl border-4 border-white mt-8 aspect-[3/4] object-cover" alt="Hero 2"/>
          </div>
          
          <div className="w-full md:w-1/3 text-center py-12">
            <a href="#piket" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Eksplorasi Kelas
            </a>
          </div>

          {/* Sisi Kanan (Foto 3 & 4) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
             <img src={heroImages[2]} className="rounded-2xl shadow-xl border-4 border-white mt-8 aspect-[3/4] object-cover" alt="Hero 3"/>
             <img src={heroImages[3]} className="rounded-2xl shadow-xl border-4 border-white aspect-[3/4] object-cover" alt="Hero 4"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;