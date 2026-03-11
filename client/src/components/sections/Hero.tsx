import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from '@assets/Screenshot_20260213-210219_Maps_1772879482413.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 bg-secondary/30" style={{ overflow: 'hidden' }}>
      {/* Background Decor - no translate so they never overflow */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-blue-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-4 sm:mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Premium Dental Care
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
              Creating Beautiful <span className="text-primary">Smiles</span> for Everyone
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Experience world-class dentistry at Ora Care Dental Clinic. We blend advanced technology with compassionate care to ensure your optimal oral health.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Button asChild size="lg" className="rounded-xl h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-xl shadow-primary/25 w-full sm:w-auto">
                <a href="#appointment">
                  Book Appointment <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </Button>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-primary font-bold shadow-sm text-xs">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center gap-0.5 text-amber-500 text-xs">
                    {'★★★★★'}
                  </span>
                  <span className="text-muted-foreground text-xs">Trusted by 1000+ patients</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Experienced Specialists', 'Advanced Technology', 'Painless Treatments', 'Hygienic Environment'].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <img 
                src={heroImg} 
                alt="Ora Care Dental Clinic Exterior" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl z-20 flex items-center gap-3 sm:gap-4 border border-white/50">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Open Daily</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
