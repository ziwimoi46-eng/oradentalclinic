import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import logoImg from '@assets/Screenshot_20260213-210116_Google_1772879482482.jpg';

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Doctor", href: "#doctor" },
  { name: "Services", href: "#services" },
  { name: "Equipment", href: "#equipment" },
  { name: "Results", href: "#results" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-xl h-12 w-12 border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
            <img src={logoImg} alt="Ora Care Dental Clinic Logo" className="object-cover w-full h-full" />
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl text-foreground leading-tight tracking-tight">
              Ora Care
            </h1>
            <p className="text-xs text-primary font-medium tracking-wider uppercase">Dental Clinic</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 pb-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <span className="text-sm">9405717515</span>
            </div>
            <Button asChild className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <a href="#appointment">Book Appointment</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/5">
                <Menu className="w-6 h-6 text-foreground" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white border-l border-border/50">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Access site sections</SheetDescription>
              <div className="flex flex-col gap-8 mt-12">
                <ul className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors block py-2 border-b border-border/30"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-2xl text-primary font-semibold">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>9405717515</span>
                  </div>
                  <Button asChild size="lg" className="w-full rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    <a href="#appointment">Book Appointment</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
