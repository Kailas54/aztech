import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-2">
      <div className="w-full px-4 md:px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center z-50 -ml-6 md:-ml-40">
          <img src={logoImg} alt="Aztech Academy Logo" className="h-24 md:h-32 w-auto object-contain drop-shadow-md transform scale-125 md:scale-150 origin-left" />
          <div className="hidden sm:flex flex-col -ml-4 md:-ml-8 transition-colors duration-300">
            <span className={`font-black text-2xl md:text-3xl leading-none tracking-tight drop-shadow-md transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>AZTECH</span>
            <span className={`text-[11px] md:text-xs tracking-widest font-bold uppercase mt-1 drop-shadow-sm transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-orange-200'}`}>ACADEMY</span>
          </div>
        </div>

        {/* Desktop Centered Pill Nav */}
        <nav className="hidden xl:flex items-center bg-[#fff7ed]/90 backdrop-blur-md border border-white/20 rounded-full px-1 py-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9a3412] hover:bg-white/60 hover:text-[#7c2d12] px-6 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden lg:block z-50">
          <a href="#contact" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg border border-white/10">
            REGISTER NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white z-50 bg-[#fff7ed]/20 backdrop-blur-md p-2 rounded-full border border-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-0 left-0 right-0 bg-[#431407]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl pt-28 pb-8 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-bold text-lg px-4 py-3 rounded-xl hover:bg-white/10 transition-colors uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="mt-4 bg-[#ea580c] text-white px-6 py-4 rounded-xl font-bold text-center uppercase tracking-wider">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
