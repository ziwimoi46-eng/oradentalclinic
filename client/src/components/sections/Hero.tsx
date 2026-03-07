import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from '@assets/Screenshot_20260213-210219_Maps_1772879482413.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary/30">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Premium Dental Care
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 text-balance">
              Creating Beautiful <span className="text-primary relative inline-block">Smiles<svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg></span> for Everyone
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
              Experience world-class dentistry at Ora Care Dental Clinic. We blend advanced technology with compassionate care to ensure your optimal oral health.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                <a href="#appointment">
                  Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <div className="flex items-center gap-4 text-sm font-medium text-foreground">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-primary font-bold shadow-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center gap-1 text-amber-500">
                    {'★'.repeat(5)}
                  </span>
                  <span className="text-muted-foreground">Trusted by 1000+ patients</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {['Experienced Specialists', 'Advanced Technology', 'Painless Treatments', 'Hygienic Environment'].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <img 
                src={heroImg} 
                alt="Ora Care Dental Clinic Exterior" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl z-20 flex items-center gap-4 border border-white/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinelinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Open Daily</h4>
                  <p className="text-sm text-muted-foreground">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Background shape for image */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-[3rem] -z-10 transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-6" />
          </div>

        </div>
      </div>
    </section>
  );
}
