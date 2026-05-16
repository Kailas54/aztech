import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '4.9', label: 'Google Rated', suffix: '/5' },
    { value: '3500+', label: 'Students', suffix: '' },
    { value: '4.8', label: 'Justdial Rated', suffix: '/5' },
  ];

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center pt-8 md:pt-0"
            >
              <div className="flex items-baseline gap-1 text-primary mb-2">
                <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
                <span className="text-xl font-semibold">{stat.suffix}</span>
              </div>
              <p className="text-slate-600 font-medium uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
