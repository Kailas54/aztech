import { motion } from 'framer-motion';

export default function Facilities() {
  const facilities = [
    {
      tag: "CLASSROOMS",
      title: "Smart Classrooms",
      desc: "Air-conditioned rooms equipped with interactive smart boards for engaging, tech-powered lessons.",
      letter: "S",
      featured: true,
    },
    {
      tag: "LIBRARY",
      title: "Extensive Library",
      desc: "Access to a wide range of engineering reference books and curated study materials.",
      letter: "L",
      featured: false,
    },
    {
      tag: "CONNECTIVITY",
      title: "High-Speed Wi-Fi",
      desc: "Free campus-wide internet access for seamless research, study, and digital learning.",
      letter: "W",
      featured: false,
    },
    {
      tag: "MENTORSHIP",
      title: "Doubt Clearing Hub",
      desc: "Dedicated spaces for focused one-on-one doubt sessions with expert faculty members.",
      letter: "D",
      featured: false,
    },
    {
      tag: "RESOURCES",
      title: "Study Material",
      desc: "Comprehensive printed and digital notes crafted for board exams and competitive tests.",
      letter: "M",
      featured: false,
    },
    {
      tag: "SAFETY",
      title: "Safe Environment",
      desc: "24/7 CCTV surveillance and fully secured campus infrastructure for student well-being.",
      letter: "E",
      featured: false,
    },
  ];

  return (
    <section id="facilities" className="py-20 md:py-32 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ea580c] text-xs font-bold tracking-[0.2em] uppercase mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic leading-none tracking-tight"
          >
            <span className="text-slate-800">CAMPUS </span>
            <span className="text-[#ea580c]">FACILITIES </span>
            <span className="text-slate-300">& MORE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-3xl p-8 overflow-hidden transition-all duration-300 cursor-pointer
                ${facility.featured
                  ? 'bg-[#7c2d12] shadow-2xl'
                  : 'bg-[#fff7ed] border border-orange-100 hover:border-orange-200 hover:shadow-lg'
                }`}
            >
              {/* Pill tag */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-5
                ${facility.featured ? 'bg-white/15 text-white' : 'bg-orange-100 text-[#ea580c]'}`}>
                {facility.tag}
              </div>

              {/* Title */}
              <h3 className={`text-2xl md:text-3xl font-black italic mb-3 leading-tight
                ${facility.featured ? 'text-white' : 'text-[#7c2d12]'}`}>
                {facility.title}
              </h3>

              {/* Description */}
              <p className={`text-sm md:text-base italic leading-relaxed max-w-xs
                ${facility.featured ? 'text-orange-200' : 'text-slate-500'}`}>
                {facility.desc}
              </p>

              {/* Ghost watermark letter */}
              <div className={`absolute bottom-2 right-4 text-[9rem] font-black italic leading-none select-none pointer-events-none
                ${facility.featured ? 'text-white/10' : 'text-orange-100'}`}>
                {facility.letter}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
