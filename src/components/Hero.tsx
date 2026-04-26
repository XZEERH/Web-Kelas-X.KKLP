import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16">
      {/* Header 16:9 Gelap Bintang */}
      <div className="hero-stars aspect-video w-full max-h-[70vh] flex flex-col items-center justify-center text-white text-center p-6 bg-slate-950">
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

      {/* Layout Gambar Mengapit Teks */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
             <img src="https://picsum.photos/seed/a1/400/500" className="rounded-2xl shadow-xl border-4 border-white" alt="img1"/>
             <img src="https://picsum.photos/seed/a2/400/500" className="rounded-2xl shadow-xl border-4 border-white mt-8" alt="img2"/>
          </div>
          
          <div className="w-full md:w-1/3 text-center py-12">
            <a href="#piket" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Eksplorasi Kelas
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
             <img src="https://picsum.photos/seed/a3/400/500" className="rounded-2xl shadow-xl border-4 border-white mt-8" alt="img3"/>
             <img src="https://picsum.photos/seed/a4/400/500" className="rounded-2xl shadow-xl border-4 border-white" alt="img4"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;