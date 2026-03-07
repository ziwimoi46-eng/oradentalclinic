import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Syringe, 
  Smile 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import servicesImg from '@assets/Screenshot_20260213-210056_Google_1772879482467.jpg';

export default function Services() {
  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Dental Cleaning",
      desc: "Professional scaling and polishing to remove plaque and prevent gum disease."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Root Canal",
      desc: "Pain-free endodontic therapy to save severely infected or decayed teeth."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Tooth Filling",
      desc: "Tooth-colored composite restorations that blend seamlessly with natural teeth."
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Braces & Aligners",
      desc: "Orthodontic treatments to correct misaligned teeth and bite issues."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cosmetic Dentistry",
      desc: "Veneers, whitening, and smile design to enhance the aesthetics of your smile."
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: "General Treatments",
      desc: "Routine checkups, extractions, and comprehensive oral health maintenance."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-end justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">Our Services</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Comprehensive Dental Treatments
            </h3>
          </div>
          <p className="text-muted-foreground max-w-lg text-sm md:text-base lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-primary pl-4 lg:pl-0 lg:pr-4">
            We provide a wide array of dental services under one roof. Our state-of-the-art facility ensures you receive the best care possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Services Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {services.map((item, idx) => (
              <Card key={idx} className="group border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-6 md:p-8 relative flex flex-col h-full">
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg md:rounded-xl bg-secondary text-primary flex items-center justify-center mb-4 md:mb-6 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1">{item.desc}</p>
                  
                  {/* Decorative background shape */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Image Column */}
          <div className="lg:col-span-1 relative h-full min-h-[300px] md:min-h-[400px]">
            <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={servicesImg} 
                alt="Dental Treatments" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Modern Facilities</h4>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">
                    Our clinic is equipped with the latest dental technology to ensure precise and comfortable treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
