import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

const MomentGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  // DAFTAR GAMBAR GALLERY (Bisa Anda tambah/ubah sesuai file di assets/gallery/)
  const images = [
    "assets/gallery/moment1.jpg",
    "assets/gallery/moment2.jpg",
    "assets/gallery/moment3.jpg",
    "assets/gallery/moment4.jpg",
    "assets/gallery/moment5.jpg",
    "assets/gallery/moment6.jpg",
    "assets/gallery/moment7.jpg",
    "assets/gallery/moment8.jpg",
  ];

  return (
    <section id="moment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black italic mb-12 uppercase tracking-tighter">Moment Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-3xl bg-slate-100"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={`Moment ${i+1}`}
                onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Foto+Belum+Ada"; }}
              />
              <div className="absolute top-4 right-4 text-yellow-400 bg-black/20 p-1 rounded-full backdrop-blur-sm">
                <Star size={18} fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform">
              <X size={48}/>
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              src={selected} className="max-w-full max-h-full rounded-xl shadow-2xl border-2 border-white/20" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MomentGallery;