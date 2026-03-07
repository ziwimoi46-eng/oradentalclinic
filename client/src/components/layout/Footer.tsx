import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display tracking-tight text-white">
              Ora Care <span className="text-primary-foreground font-normal block text-sm mt-1 uppercase tracking-widest">Dental Clinic</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Providing premium, compassionate, and comprehensive dental care to create healthy and beautiful smiles.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Doctor', 'Services', 'Gallery', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:9405717515" className="hover:text-white transition-colors mt-0.5">9405717515</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:oracaredental32@gmail.com" className="hover:text-white transition-colors mt-0.5 break-all">
                  oracaredental32@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Visit us at our clinic location for premium dental care.
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm text-slate-400 border-b border-slate-800 pb-2">
                <span>Mon - Sat</span>
                <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm text-slate-400 pt-1">
                <span>Sunday</span>
                <span className="text-white font-medium">By Appointment</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/919405717515" 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" /> Whatsapp Us
            </a>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Ora Care Dental Clinic. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
