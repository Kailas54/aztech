import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-20 bg-blue-50 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Text Content */}
        <div>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#4A4BBF] text-xs font-bold tracking-[0.2em] uppercase mb-3"
          >
            About Us
          </motion.h4>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic leading-none tracking-tight mb-6"
          >
            <span className="text-slate-800">AZTECH </span>
            <span className="text-[#4A4BBF]">ACADEMY </span>
            <span className="text-slate-200">ATTINGAL</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg mb-6 leading-relaxed"
          >
            Located in the heart of Attingal, Aztech Academy is a premier B. Tech tuition centre dedicated to providing exceptional academic support to students pursuing their Bachelor of Technology degree. Our mission is to foster a culture of excellence, innovation, and holistic learning, helping students unlock their full potential and achieve academic success.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg mb-8 leading-relaxed"
          >
            At Aztech Academy, we understand that every student learns differently. Our expert faculty, comprising experienced academicians and industry professionals, employ a range of teaching methodologies tailored to individual needs. From concept clarity to problem-solving techniques, our comprehensive approach ensures students grasp complex concepts with ease.
          </motion.p>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#contact" 
            className="inline-block bg-slate-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary transition-colors"
          >
            Contact Us Today
          </motion.a>
        </div>

        {/* Right Side - Mission & Approach */}
        <div className="grid gap-6">

          {/* Card 01 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl border-2 border-orange-200 hover:border-[#4A4BBF] hover:shadow-xl hover:shadow-[#4A4BBF]/40 transition-all duration-300 cursor-pointer overflow-hidden relative px-8 py-8 flex items-center gap-6 group"
          >
            {/* Ghost number */}
            <div className="text-[7rem] font-black italic leading-none text-orange-100 select-none shrink-0 group-hover:text-orange-300 transition-colors duration-300">
              01
            </div>

            {/* Content */}
            <div className="flex flex-col min-w-0">
              {/* Label + separator + tag */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#4A4BBF] text-[10px] font-black tracking-[0.18em] uppercase whitespace-nowrap">Our Mission</span>
                <div className="h-px flex-1 bg-slate-200"></div>
                <span className="text-orange-300 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap">Excellence</span>
              </div>
              {/* Big title */}
              <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-800 leading-tight mb-2 group-hover:text-[#4A4BBF] transition-colors duration-300">
                Foster Academic Excellence
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To foster a culture of excellence, innovation, and holistic learning, helping students unlock their full potential and achieve academic success.
              </p>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-[#1A1A2E] rounded-3xl border-2 border-[#4A4BBF] hover:border-[#F5C518] hover:shadow-xl hover:shadow-orange-900/30 transition-all duration-300 cursor-pointer overflow-hidden relative px-8 py-8 flex items-center gap-6 group"
          >
            {/* Ghost number */}
            <div className="text-[7rem] font-black italic leading-none text-white/20 select-none shrink-0 group-hover:text-white/70 transition-colors duration-300">
              02
            </div>

            {/* Content */}
            <div className="flex flex-col min-w-0">
              {/* Label + separator + tag */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#F5C518] text-[10px] font-black tracking-[0.18em] uppercase whitespace-nowrap">Our Approach</span>
                <div className="h-px flex-1 bg-white/20"></div>
                <span className="text-orange-200 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap">Tailored</span>
              </div>
              {/* Big title */}
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white leading-tight mb-2">
                Personalised Learning Methods
              </h3>
              <p className="text-orange-200 text-sm leading-relaxed">
                From concept clarity to problem-solving techniques, our comprehensive approach ensures students grasp complex concepts with ease.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
