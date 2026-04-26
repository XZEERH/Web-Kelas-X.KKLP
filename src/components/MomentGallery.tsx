import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

const MomentGallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const photos = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/${i + 50}/800/600`);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-black italic mb-12 text-center uppercase tracking-tight">Moment Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImg(src)}
          >
            <img src={src} className="w-full h-full object-cover" alt="Moment" />
            <div className="absolute top-2 right-2 text-yellow-400">
              <Star size={20} fill="currentColor" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-10 right-10 text-white"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MomentGallery;