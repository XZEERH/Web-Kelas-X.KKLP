const JadwalPiket = () => {
  const data = [
    { hari: 'Senin', siswa: ['Andi', 'Budi', 'Citra', 'Dewi', 'Eko'] },
    { hari: 'Selasa', siswa: ['Fani', 'Gani', 'Hana', 'Indra', 'Joni'] },
    { hari: 'Rabu', siswa: ['Kiki', 'Lala', 'Momo', 'Nana', 'Oki'] },
    { hari: 'Kamis', siswa: ['Putu', 'Qori', 'Rara', 'Sasa', 'Tono'] },
    { hari: 'Jumat', siswa: ['Uli', 'Vivi', 'Wawan', 'Xena', 'Yoyo'] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-black italic mb-12 text-center uppercase tracking-tight">Jadwal Piket</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="bg-[#f8f9fa] p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-black mb-4 border-b-2 border-blue-600 pb-2 italic">{item.hari}</h3>
            <ul className="space-y-2">
              {item.siswa.map((s, i) => (
                <li key={i} className="font-medium text-slate-600 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default JadwalPiket;