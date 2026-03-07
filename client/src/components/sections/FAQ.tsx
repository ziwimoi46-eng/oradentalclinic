import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist for a routine check-up and professional cleaning every 6 months. However, your specific needs may require more frequent visits depending on your oral health status."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "We assist with most major dental insurance providers. Please contact our front desk with your insurance details, and we'll help you understand your coverage and benefits before your treatment."
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "In case of a dental emergency such as a knocked-out tooth, severe toothache, or swelling, please call our clinic immediately at 9405717515. We prioritize emergency cases and will do our best to see you on the same day."
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are extremely safe. We use modern digital X-ray technology which significantly reduces radiation exposure compared to traditional film X-rays, ensuring your safety while providing accurate diagnostics."
    },
    {
      question: "Do you offer treatments for children?",
      answer: "Yes! We provide comprehensive pediatric dental care in a friendly and gentle environment to ensure your child develops healthy dental habits early on."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Common Dental Questions</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 p-6 md:p-10 border border-border/50">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border/60">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
