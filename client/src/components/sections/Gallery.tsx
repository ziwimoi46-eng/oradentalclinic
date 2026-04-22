import gallery1 from '@assets/Screenshot_20260213-210202_Maps_1772879482427.jpg';
import gallery2 from '@assets/Screenshot_20260213-210149_Maps_1772879482435.jpg';
import gallery3 from '@assets/Screenshot_20260213-210033_Google_1772879482508.jpg';
import gallery4 from '@assets/Screenshot_20260213-210041_Google_1772879482493.jpg';

export default function Gallery() {
  const images = [
    { src: gallery1, alt: "Clinic Interior View" },
    { src: gallery2, alt: "Treatment Room" },
    { src: gallery3, alt: "Clinic Reception" },
    { src: gallery4, alt: "Dental Equipment" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">Clinic Tour</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Premium Facility</h3>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Take a look inside our modern, hygienic, and welcoming dental clinic designed entirely around patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl aspect-square shadow-lg ${
                idx === 0 || idx === 3 ? 'sm:col-span-2 md:col-span-2 lg:col-span-2 aspect-video md:aspect-auto' : ''
              }`}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300 mix-blend-multiply" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
