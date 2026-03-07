import { CheckCircle2, Award, GraduationCap } from "lucide-react";
import doctorImg from '@assets/Screenshot_20260213-210044_Google_1772879482449.jpg';

export default function Doctor() {
  return (
    <section id="doctor" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              <img 
                src={doctorImg} 
                alt="Dr. Navid - Ora Care Dental Clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h3 className="text-3xl font-bold mb-1">Dr. Navid</h3>
                <p className="text-primary-foreground/80 font-medium">Chief Dental Surgeon</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-300/20 rounded-full blur-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Meet The Doctor</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Expert Care You Can Trust</h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With years of extensive experience in advanced dental procedures, Dr. Navid is dedicated to providing high-quality, pain-free dental treatments. Known for a gentle approach and meticulous attention to detail, Dr. Navid ensures that every patient walks out with a confident, healthy smile.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                <GraduationCap className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Qualifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> BDS, MDS
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Specialized in Cosmetic Dentistry
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Experience</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 10+ Years Clinical Practice
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 5000+ Happy Patients
                  </li>
                </ul>
              </div>
            </div>

            <div className="pl-6 border-l-4 border-primary italic text-foreground/80 text-lg font-medium">
              "My priority is not just treating teeth, but treating people. A comfortable patient is the foundation of successful dentistry."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
