const JadwalPiket = () => {
  const data = [
    { hari: 'Senin', anggota: ['Andi', 'Budi', 'Caca', 'Dedi'] },
    { hari: 'Selasa', anggota: ['Euis', 'Fafa', 'Gigi', 'Haha'] },
    { hari: 'Rabu', anggota: ['Iwan', 'Jaja', 'Kiki', 'Lala'] },
    { hari: 'Kamis', anggota: ['Mumu', 'Nana', 'Opi', 'Pupu'] },
    { hari: 'Jumat', anggota: ['Rere', 'Sisi', 'Tata', 'Uu'] },
  ];

  return (
    <section id="piket" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black italic mb-12 text-center uppercase underline decoration-blue-500">Jadwal Piket</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {data.map((item) => (
            <div key={item.hari} className="p-8 rounded-[2rem] bg-zinc-50 border border-slate-100 hover:shadow-xl transition-all group">
              <h3 className="text-2xl font-black italic mb-6 text-slate-800 group-hover:text-blue-600 transition-colors">{item.hari}</h3>
              <ul className="space-y-3">
                {item.anggota.map(nama => (
                  <li key={nama} className="font-bold text-slate-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span> {nama}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JadwalPiket;