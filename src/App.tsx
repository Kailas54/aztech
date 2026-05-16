
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Features from './components/Features';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-slate-900 bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Faculty />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
