import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo_copy.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    // { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4">
      <div className="w-full px-4 md:px-7 flex justify-around items-center">


        {/* Desktop Centered Pill Nav */}
        <nav className="hidden xl:flex items-center bg-[#F7F8FC]/70 backdrop-blur-md border-2 border-[#F7F8FC]/60 rounded-lg px-1 py-1 shadow-xl ">
          <div className="flex items-center pl-2 pr-4 space-x-2 border-r border-[#2B3BAB]/20 mr-2 cursor-pointer">
          <a href="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Aztec Academy Logo" className="h-11 w-11 object-cover" />
            <div className="flex flex-col items-start justify-center leading-none mt-1 mb-1">
              <span className="font-['Playfair_Display'] font-black text-[#2B3BAB] text-[28px] whitespace-nowrap leading-[0.9] ">Aztec</span>
              <span className="font-['Playfair_Display'] italic font-bold text-[#2B3BAB] text-[16px] whitespace-nowrap opacity-90 leading-none ">Academy</span>
            </div>
            </a>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#2B3BAB] hover:bg-white/60 hover:text-[#1A1A2E] px-6 py-2 rounded-lg font-bold transition-all text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden lg:block z-50">
          <a href="#contact" className="bg-[#4A4BBF] hover:bg-[#2B3BAB] text-white px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-lg border-2 border-white/10 italic">
            REGISTER NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white z-50 bg-[#F7F8FC]/20 backdrop-blur-md p-2 rounded-full border border-white/20"
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
            className="xl:hidden absolute top-0 left-0 right-0 bg-[#1A1A2E]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl pt-28 pb-8 px-6"
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
              <a href="#contact" className="mt-4 bg-[#4A4BBF] text-white px-6 py-4 rounded-xl font-bold text-center uppercase tracking-wider ">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
