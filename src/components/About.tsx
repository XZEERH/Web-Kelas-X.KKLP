const About = () => {
  return (
    <div className="py-20 bg-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-black italic mb-10 text-center uppercase tracking-tight">Tentang Kami</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
          <p>X.KKLP bukan sekadar kelas, melainkan sebuah keluarga besar yang dipertemukan dalam perjalanan pendidikan yang luar biasa. Berawal dari langkah kecil di hari pertama sekolah, kami mulai merajut cerita yang penuh warna.</p>
          <p>Di sini, setiap perbedaan karakter menjadi harmoni yang menguatkan satu sama lain. Dari tawa saat istirahat hingga keseriusan saat ujian, semua menjadi potongan puzzle yang melengkapi identitas X.KKLP.</p>
          <p>Visi kami adalah menjadi angkatan yang tidak hanya unggul secara akademis, tetapi juga memiliki ikatan solidaritas yang tak terpatahkan oleh waktu.</p>
          <p>Bersama-sama, kami menghadapi setiap tantangan kurikulum dan kegiatan sekolah dengan semangat kebersamaan yang menjadi ciri khas utama kami.</p>
          <p>Halaman ini adalah bukti sejarah perjalanan kami dari tahun 2026 hingga 2028, tempat di mana setiap memori abadi akan selalu bisa kita kenang kembali di masa depan.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-xl border-2 border-white">
              <img src={`https://picsum.photos/seed/${i+100}/400`} className="w-full h-full object-cover" alt="Footer grid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;