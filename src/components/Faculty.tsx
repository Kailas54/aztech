import { motion } from 'framer-motion';

export default function Faculty() {
  const facultyList = [
    {
      name: "Lead Instructor",
      photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      qualification: "M.Tech in Engineering",
      experience: "10+ Years of Teaching Experience",
    }
  ];

  return (
    <section id="faculty" className="py-20 md:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4A4BBF] text-xs font-bold tracking-[0.2em] uppercase mb-3"
          >
            Our Educators
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic leading-none tracking-tight mb-4"
          >
            <span className="text-slate-800">MEET </span>
            <span className="text-[#4A4BBF]">EXPERT </span>
            <span className="text-slate-200">FACULTY</span>
          </motion.h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experienced academicians and industry professionals dedicated to your success.
          </p>
        </div>

        <div className="flex justify-center">
          {facultyList.map((faculty, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-sm w-full group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={faculty.photo} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{faculty.name}</h3>
                <p className="text-primary font-semibold mb-4">{faculty.qualification}</p>
                <div className="inline-block bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600">
                  {faculty.experience}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
