import ba1 from '@assets/IMG-20260309-WA0017_1773231859129.jpg';
import ba2 from '@assets/IMG-20260309-WA0021_1773231859220.jpg';
import ba3 from '@assets/IMG-20260309-WA0023_1773231859269.jpg';
import ba4 from '@assets/IMG-20260309-WA0025_1773231859294.jpg';
import ba5 from '@assets/IMG-20260309-WA0015_1773231859350.jpg';
import ba6 from '@assets/IMG-20260309-WA0014_1773231859405.jpg';
import ba7 from '@assets/IMG-20260309-WA0018_1773231859434.jpg';
import ba8 from '@assets/IMG-20260309-WA0011_1773231859381.jpg';

const results = [
  { src: ba1, label: "Chipped Tooth Restoration" },
  { src: ba2, label: "Smile Correction" },
  { src: ba3, label: "Cavity & Decay Treatment" },
  { src: ba4, label: "Crown & Cap Placement" },
  { src: ba5, label: "Gap Closure" },
  { src: ba6, label: "Full Mouth Rehabilitation" },
  { src: ba7, label: "Implant Crown Restoration" },
  { src: ba8, label: "Tooth Coloured Filling" },
];

export default function BeautifulResults() {
  return (
    <section id="results" className="py-16 md:py-24 bg-slate-900 text-white" style={{ overflow: 'hidden' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">Real Patient Results</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Beautiful Results
          </h3>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            See the real transformations achieved for our patients. Every smile tells a story of confidence restored through expert dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="font-semibold text-white text-xs sm:text-sm text-center">{item.label}</p>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl md:rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 sm:px-10 sm:py-6">
            <div className="text-4xl sm:text-5xl font-bold text-primary">5000+</div>
            <div className="text-left text-center sm:text-left">
              <p className="text-white font-semibold text-base sm:text-lg">Smiles Transformed</p>
              <p className="text-slate-400 text-sm">and counting — book your transformation today</p>
            </div>
            <a
              href="#appointment"
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
