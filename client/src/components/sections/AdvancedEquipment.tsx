import { CheckCircle2, Zap, Shield, Info } from "lucide-react";
import microscopeImg from '@assets/images_(8)_1773231859151.jpeg';
import endomotorImg from '@assets/images_(9)_1773231859141.jpeg';
import rubberDamImg from '@assets/images_(10)_1773231859162.jpeg';
import autoclaveImg from '@assets/images_(11)_1773231859193.jpeg';

const equipment = [
  {
    image: microscopeImg,
    name: "Dental Operating Microscope",
    details: "A high-precision microscope used by dentists to clearly see very small details inside the tooth during treatment.",
    howItWorks: "It provides strong magnification and bright light so the dentist can see tiny cracks, canals, and infected areas that are not visible to the naked eye.",
    safety: "Non-invasive viewing technology, improves treatment accuracy, and reduces unnecessary drilling.",
    benefit: "Helps in more precise treatments, especially for root canal procedures, improving success rates and patient comfort.",
  },
  {
    image: endomotorImg,
    name: "Endomotor",
    details: "A modern electronic device used during root canal treatment to clean and shape the root canals.",
    howItWorks: "The motor rotates special dental files inside the root canal to remove infected tissue and prepare the canal for filling.",
    safety: "Controlled speed and torque settings prevent damage to the tooth and make the procedure safer.",
    benefit: "Makes root canal treatments faster, more accurate, and more comfortable for the patient.",
  },
  {
    image: rubberDamImg,
    name: "Rubber Dam",
    details: "A protective sheet used to isolate the tooth being treated from the rest of the mouth.",
    howItWorks: "It is placed around the tooth so that saliva and bacteria cannot enter the treatment area.",
    safety: "Prevents contamination, protects the patient from swallowing dental instruments or chemicals.",
    benefit: "Keeps the treatment area clean and dry, improving the quality and safety of dental procedures.",
  },
  {
    image: autoclaveImg,
    name: "Autoclaved / Sterilized Instruments",
    details: "All dental instruments are sterilized using a medical autoclave machine before use.",
    howItWorks: "The autoclave uses high-temperature steam under pressure to kill bacteria, viruses, and other microorganisms.",
    safety: "Ensures 100% sterilization of instruments to prevent infection.",
    benefit: "Protects patients from cross-infection and maintains the highest level of hygiene in the clinic.",
  },
];

export default function AdvancedEquipment() {
  return (
    <section id="equipment" className="py-16 md:py-24 bg-white" style={{ overflow: 'hidden' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">Technology & Safety</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Advanced Equipment
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            We invest in the latest dental technology to deliver precise, safe, and comfortable treatments for every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {equipment.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-border/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-4 sm:p-6">
                  <h4 className="text-white font-bold text-lg sm:text-xl leading-tight">{item.name}</h4>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{item.details}</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">How It Works</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.howItWorks}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-0.5">Safety Features</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.safety}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Why It Is Useful</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
