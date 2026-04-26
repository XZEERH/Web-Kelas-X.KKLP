import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JadwalPiket from './components/JadwalPiket';
import AnggotaInteraktif from './components/AnggotaInteraktif';
import MomentGallery from './components/MomentGallery';
import About from './components/About';
import Footer from './components/Footer'; // Import Footer yang baru

function App() {
  return (
    <div className="antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <JadwalPiket />
        <AnggotaInteraktif />
        <MomentGallery />
        <About />
      </main>
      <Footer /> {/* Render Footer di sini */}
    </div>
  );
}

export default App;