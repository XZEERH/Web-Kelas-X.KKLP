import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

const MomentGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const images = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/moment${i}/800/600`);

  return (
    <section id="moment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black italic mb-12 uppercase">Moment Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-3xl"
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="moment" />
              <div className="absolute top-4 right-4 text-yellow-400 bg-black/20 p-1 rounded-full">
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
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-8 right-8 text-white"><X size={40}/></button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={selected} className="max-w-full max-h-full rounded-xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MomentGallery;