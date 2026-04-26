import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JadwalPiket from './components/JadwalPiket';
import AnggotaInteraktif from './components/AnggotaInteraktif';
import MomentGallery from './components/MomentGallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        {/* Tambahkan id agar navigasi berfungsi */}
        <section id="home"><Hero /></section>
        <section id="piket"><JadwalPiket /></section>
        <section id="anggota"><AnggotaInteraktif /></section>
        <section id="moment"><MomentGallery /></section>
        <section id="tentang"><About /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;