import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.jpeg'

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="Aztec Academy Logo" className="h-12 w-12 border-white border-4 object-cover" />
              <div className="flex flex-col">
                <span className="font-['Playfair_Display'] font-bold text-2xl leading-[0.9] text-white">Aztech</span>
                <span className="font-['Playfair_Display'] text-base tracking-widest text-primary font-semibold">Academy</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Aztech Academy is a premier tuition centre in Attingal dedicated to providing exceptional academic support and fostering holistic learning.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'Faculty', 'Facilities', 'Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span> Top Courses
            </h4>
            <ul className="space-y-3">
              {['B.Tech Tuition', 'Plus One Science', 'Plus Two Science', 'Individual Subject Coaching'].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" /> {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span> Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-sm">Aztech Academy, Heart of Attingal, Trivandrum, Kerala.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:+91XXXXXXXXXX" className="text-sm hover:text-white transition-colors">+91 XXXXXXXXXX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:info@aztechacademy.com" className="text-sm hover:text-white transition-colors">info@aztechacademy.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Aztech Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
