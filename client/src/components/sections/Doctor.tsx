import { CheckCircle2, Award, GraduationCap } from "lucide-react";
import doctorImg from '@assets/Screenshot_20260213-210044_Google_1772879482449.jpg';

export default function Doctor() {
  return (
    <section id="doctor" className="py-16 md:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm md:max-w-md lg:max-w-none order-2 lg:order-1 px-2 sm:px-0">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-2 md:border-4 border-white">
              <img 
                src={doctorImg} 
                alt="Dr. Navid - Ora Care Dental Clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">Dr. Navid</h3>
                <p className="text-primary-foreground/80 font-medium text-sm md:text-base">Chief Dental Surgeon</p>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="hidden sm:block absolute -top-8 -left-8 w-32 h-32 bg-blue-300/20 rounded-full blur-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">Meet The Doctor</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">Expert Care You Can Trust</h3>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              With years of extensive experience in advanced dental procedures, Dr. Navid is dedicated to providing high-quality, pain-free dental treatments. Known for a gentle approach and meticulous attention to detail, Dr. Navid ensures that every patient walks out with a confident, healthy smile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
              <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-border/50">
                <GraduationCap className="w-7 md:w-8 h-7 md:h-8 text-primary mb-3 md:mb-4" />
                <h4 className="font-bold text-base md:text-lg mb-2">Qualifications</h4>
                <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary shrink-0 mt-0.5" /> BDS, MDS
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary shrink-0 mt-0.5" /> Specialized in Cosmetic Dentistry
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-border/50">
                <Award className="w-7 md:w-8 h-7 md:h-8 text-primary mb-3 md:mb-4" />
                <h4 className="font-bold text-base md:text-lg mb-2">Experience</h4>
                <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary shrink-0 mt-0.5" /> 10+ Years Clinical Practice
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary shrink-0 mt-0.5" /> 5000+ Happy Patients
                  </li>
                </ul>
              </div>
            </div>

            <div className="pl-4 md:pl-6 border-l-4 border-primary italic text-foreground/80 text-sm md:text-lg font-medium">
              "My priority is not just treating teeth, but treating people. A comfortable patient is the foundation of successful dentistry."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
