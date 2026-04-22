import { ShieldPlus, HeartHandshake, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Patient Care",
      desc: "We prioritize your comfort and well-being, ensuring a relaxing and stress-free dental experience at every visit."
    },
    {
      icon: <ShieldPlus className="w-8 h-8 text-primary" />,
      title: "Strict Hygiene",
      desc: "Our clinic follows the highest standards of sterilization and infection control protocols to guarantee your safety."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      desc: "To deliver accessible, premium, and comprehensive dental solutions tailored to individual patient needs."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Modern Approach",
      desc: "Equipped with state-of-the-art technology to provide accurate diagnoses and effective, painless treatments."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">About Ora Care</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">Committed to Dental Excellence</h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Welcome to Ora Care Dental Clinic, where your smile is our top priority. We have established our practice on the core values of integrity, compassion, and clinical excellence. Our goal is to transform the way you experience dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((item, idx) => (
            <Card key={idx} className="border-none shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-secondary/30">
              <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
