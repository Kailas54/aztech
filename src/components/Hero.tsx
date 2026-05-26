import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import backImg from '../assets/back2.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center bg-[#1A1A2E] overflow-hidden pt-16">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={backImg}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[#1A1A2E]/20 mix-blend-multiply"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center mt-12 md:mt-4 pb-20 md:pb-16">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left w-full md:w-3/5 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[12vw] leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black text-white mb-6 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)] font-['Playfair_Display']"
          >
            AZTECH<br/>ACADEMY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 mb-8"
          >
            <div className="flex items-center gap-4 text-white">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">ADMISSIONS OPEN FOR 2026</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide">ATTINGAL, TRIVANDRUM</span>
                <span className="text-xs sm:text-sm md:text-base text-slate-200">Kerala, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-end w-full md:w-2/5 mt-8 md:mt-0 relative h-full justify-center md:justify-end self-stretch pb-8">

          {/* Bottom Right Text Overlaid on Card */}
          {/* Card with text overlay */}
          {/* Bottom Right Text */}
          <div className="mt-auto hidden md:flex flex-col items-end text-right mb-6 lg:mb-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-3xl font-medium text-slate-100 leading-[1.4]"
            >
              Your Nomination.<br />
              Your Academic Passport.<br />
              Your Engineering Journey.
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute z-30 bottom-[55px] sm:bottom-[65px] right-4 sm:right-6"
      >
        <a href="#contact" className="bg-[#4A4BBF] hover:bg-[#2B3BAB] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-[13px] sm:text-lg transition-colors flex items-center gap-2 sm:gap-3 shadow-[0_0_30px_rgba(74,75,191,0.4)]">
          <MessageCircle className="w-5 h-5 ml-1 sm:w-6 sm:h-6" />
          Enquire Now
        </a>
      </motion.div> */}

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#2B3BAB] py-2 sm:py-3.5 overflow-hidden flex z-20 border-t border-white/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-white/95 text-[11px] sm:text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase px-4 flex items-center gap-4">
              AZTECH ACADEMY ADMISSIONS <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span> TRANSFORMING IDEAS <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
