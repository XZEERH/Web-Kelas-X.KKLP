import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="aspect-video w-full max-h-[80vh] hero-stars flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-9xl font-black italic mb-2 tracking-tighter">X.KKLP</h1>
          <p className="text-xl md:text-2xl font-light opacity-80">Selamat Datang Di Website X.KKLP</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 md:-mt-24 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <motion.div 
              key={i} 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-slate-300 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src={`https://picsum.photos/seed/${i+10}/600`} alt="Class" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a href="#piket" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Eksplorasi Kelas
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;