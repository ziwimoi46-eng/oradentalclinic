import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t-4 border-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          
          {/* Brand Info */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight text-white">
              Ora Care <span className="text-primary-foreground font-normal block text-xs md:text-sm mt-1 uppercase tracking-widest">Dental Clinic</span>
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Providing premium, compassionate, and comprehensive dental care to create healthy and beautiful smiles.
            </p>
            <div className="flex gap-3 md:gap-4 pt-2">
              <a href="#" className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors flex-shrink-0">
                <Facebook className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#" className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors flex-shrink-0">
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'About Us', 'Our Doctor', 'Services', 'Gallery', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs md:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 border-b border-slate-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3 text-slate-400 text-xs md:text-sm">
                <Phone className="w-4 md:w-5 h-4 md:h-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:9405717515" className="hover:text-white transition-colors">9405717515</a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-slate-400 text-xs md:text-sm">
                <Mail className="w-4 md:w-5 h-4 md:h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:oracaredental32@gmail.com" className="hover:text-white transition-colors break-all">
                  oracaredental32@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-slate-400 text-xs md:text-sm">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Visit us at our clinic location for premium dental care.
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 border-b border-slate-700 pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                <span>Mon - Sat</span>
                <span className="text-white font-medium text-xs md:text-sm">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-slate-400 pt-1">
                <span>Sunday</span>
                <span className="text-white font-medium text-xs md:text-sm">By Appointment</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/919405717515" 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 md:mt-6 w-full inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-colors"
            >
              <Phone className="w-3 md:w-4 h-3 md:h-4" /> Whatsapp Us
            </a>
          </div>
          
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-slate-800 text-center text-xs md:text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p>&copy; {new Date().getFullYear()} Ora Care Dental Clinic. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
