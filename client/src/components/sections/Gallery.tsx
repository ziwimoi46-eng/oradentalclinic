import gallery1 from '@assets/Screenshot_20260213-210202_Maps_1772879482427.jpg';
import gallery2 from '@assets/Screenshot_20260213-210149_Maps_1772879482435.jpg';
import gallery3 from '@assets/Screenshot_20260213-210033_Google_1772879482508.jpg';
import gallery4 from '@assets/Screenshot_20260213-210041_Google_1772879482493.jpg';
import gallery5 from '@assets/Screenshot_20260422-233953_Maps_1776970174781.jpg';
import gallery6 from '@assets/Screenshot_20260422-233930_Maps_1776970174807.jpg';
import gallery7 from '@assets/Screenshot_20260422-233848_Maps_1776970174830.jpg';
import gallery8 from '@assets/Screenshot_20260422-233813_Maps_1776970174883.jpg';
import gallery9 from '@assets/Screenshot_20260422-233922_Maps_1776970174864.jpg';
import gallery10 from '@assets/Screenshot_20260422-233838_Maps_1776970174874.jpg';
import gallery11 from '@assets/Screenshot_20260422-233904_Maps_1776970174816.jpg';
import gallery12 from '@assets/Screenshot_20260422-233830_Maps_1776970174847.jpg';

export default function Gallery() {
  const images = [
    { src: gallery1, alt: "Clinic Interior View" },
    { src: gallery2, alt: "Treatment Room" },
    { src: gallery3, alt: "Clinic Reception" },
    { src: gallery4, alt: "Dental Equipment" },
    { src: gallery5, alt: "Reception Desk" },
    { src: gallery6, alt: "Clinic Exterior at Night" },
    { src: gallery7, alt: "Waiting Area" },
    { src: gallery8, alt: "Consultation Room" },
    { src: gallery9, alt: "Dr. Syed Navid Ali at Work" },
    { src: gallery10, alt: "Oracare Branding" },
    { src: gallery11, alt: "Dental Care Tips" },
    { src: gallery12, alt: "Dental Health in 5 Steps" },
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
              data-testid={`img-gallery-${idx}`}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-square shadow-lg"
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
