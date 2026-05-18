import { BookOpen, Calculator, Atom, Book, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Courses() {
  const categories = [
    {
      title: "B.Tech Tuition",
      label: "ENGINEERING · ALL SEMESTERS",
      subtitle: "Expert coaching for all B.Tech branches and semesters. Theory, practicals, and exam preparation covered.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    },
    {
      title: "Plus One Science",
      label: "HIGHER SECONDARY · GRADE 11",
      subtitle: "Comprehensive coaching in Physics, Chemistry, Maths & Biology for Plus One students.",
      icon: Atom,
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80",
    },
    {
      title: "Plus Two Science",
      label: "HIGHER SECONDARY · GRADE 12",
      subtitle: "Board exam preparation with focused problem solving and revision strategies.",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    },
    {
      title: "Individual Subject Coaching",
      label: "PERSONALISED · ANY GRADE",
      subtitle: "One-on-one or small group coaching tailored to your specific subject needs.",
      icon: Book,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    },
  ];

  return (
    <section id="courses" className="py-20 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4A4BBF] text-xs font-bold tracking-[0.2em] uppercase mb-3"
          >
            Academic Programmes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic leading-none tracking-tight"
          >
            <span className="text-slate-800">OUR </span>
            <span className="text-[#4A4BBF]">COURSES </span>
            <span className="text-slate-200">OFFERED</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-[420px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Full background image */}
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Orange gradient overlay — heavier at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#4A4BBF]/60 to-black/20" />

              {/* Icon top-left */}
              <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2">
                <category.icon size={20} className="text-[#4A4BBF]" />
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex flex-col gap-2">
                <p className="text-[#4A4BBF] text-[10px] font-bold tracking-[0.15em] uppercase leading-none">{category.label}</p>
                <h3 className="text-white text-xl font-black leading-tight">{category.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">{category.subtitle}</p>

                {/* CTA */}
                <div className="flex items-center gap-1 mt-2 text-[#4A4BBF] text-xs font-bold tracking-widest uppercase group-hover:gap-2 transition-all duration-300">
                  <span>Explore Course</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
