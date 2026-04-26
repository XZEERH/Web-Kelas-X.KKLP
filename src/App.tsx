import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JadwalPiket from './components/JadwalPiket';
import AnggotaInteraktif from './components/AnggotaInteraktif';
import MomentGallery from './components/MomentGallery';
import About from './components/About';

function App() {
  return (
    <div className="antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <JadwalPiket />
        <AnggotaInteraktif />
        <MomentGallery />
        <About />
      </main>
    </div>
  );
}

export default App;