import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black italic mb-12 text-center uppercase tracking-tighter decoration-blue-600 underline">
          Tentang Kami
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic text-center">
          <p>
            X.KKLP bukan sekadar kode kelas di buku absen, melainkan sebuah rumah bagi 35 kepribadian unik yang dipersatukan oleh takdir. Kami memulai perjalanan ini dengan langkah ragu, namun kini kami melangkah dengan solidaritas yang tak tergoyahkan.
          </p>
          <p>
            Di balik bangku-bangku kayu dan papan tulis ini, ribuan cerita telah tercipta. Dari tawa yang meledak saat jam kosong hingga kerja keras yang kami curahkan dalam setiap tugas kelompok, semuanya menjadi benang merah yang merajut persaudaraan kami.
          </p>
          <p>
            Visi kami sederhana namun mendalam: menjadi angkatan yang tidak hanya unggul secara akademis, tetapi juga memiliki empati dan rasa kekeluargaan yang akan tetap hidup bahkan setelah kami meninggalkan gerbang sekolah ini.
          </p>
          <p>
            Setiap tantangan yang datang kami hadapi dengan semangat "Satu Rasa, Satu Jiwa". Karena kami percaya bahwa kemenangan satu orang adalah kemenangan seluruh kelas, dan kesedihan satu orang adalah beban yang kami tanggung bersama.
          </p>
          <p>
            Halaman web ini adalah saksi bisu dan arsip digital untuk kenangan-kenangan emas kami dari tahun 2026 hingga 2028. Sebuah pengingat bahwa di masa muda kami, kami pernah memiliki ikatan sehebat X.KKLP.
          </p>
        </div>

        {/* Penutup: 4 Foto Sejajar 1:1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:rotate-2 transition-transform duration-300"
            >
              <img 
                src={`https://picsum.photos/seed/about-end-${i}/500/500`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Memory" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;