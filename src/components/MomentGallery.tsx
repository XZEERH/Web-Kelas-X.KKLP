import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

const MomentGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  // Pastikan nama file di sini SAMA PERSIS dengan di folder assets/gallery Anda
  // Perhatikan: Saya tambahkan "/" di awal agar Vite membacanya dari folder public
  const images = [
    "/assets/gallery/moment1.jpg",
    "/assets/gallery/moment2.jpg",
    "/assets/gallery/moment3.jpg",
    "/assets/gallery/moment4.jpg",
    "/assets/gallery/moment5.jpg",
    "/assets/gallery/moment6.jpg",
    "/assets/gallery/moment7.jpg",
    "/assets/gallery/moment8.jpg",
  ];

  return (
    <section id="moment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black italic mb-12 uppercase tracking-tighter">Moment Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
            >
              {/* Gunakan loading="lazy" agar web ringan, tapi gambar tetap muncul cepat saat discroll */}
              <img 
                src={img} 
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-300" 
                alt={`Moment ${i+1}`}
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0 }}
                onError={(e) => { 
                  // Jika gambar tidak muncul, tampilkan placeholder agar tidak kosong
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Cek+Nama+File"; 
                }}
              />
              <div className="absolute top-3 right-3 text-yellow-400 bg-black/10 p-1 rounded-full">
                <Star size={16} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full">
              <X size={32}/>
            </button>
            <img 
              src={selected} 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MomentGallery;