import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Doctor from "@/components/sections/Doctor";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Appointment from "@/components/sections/Appointment";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Doctor />
        <Services />
        <Gallery />
        <FAQ />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
