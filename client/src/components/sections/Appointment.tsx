import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Appointment() {
  const { mutate, isPending } = useSubmitContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: InsertContactMessage) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <section id="appointment" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12">
          
          {/* Contact Info & WhatsApp CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 md:mb-3">Get In Touch</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Ready for your best smile?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed">
              Book an appointment with us today. You can fill out the contact form, give us a call, or instantly reach us via WhatsApp.
            </p>

            <div className="flex flex-col gap-3 md:gap-6 mb-8 md:mb-12">
              <div className="flex items-center gap-3 md:gap-4 bg-secondary/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-border/50">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Phone className="w-4 md:w-5 h-4 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground">Call Us</p>
                  <a href="tel:9405717515" className="text-base md:text-xl font-bold text-foreground hover:text-primary transition-colors">9405717515</a>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 bg-secondary/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-border/50">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Mail className="w-4 md:w-5 h-4 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground">Email Us</p>
                  <a href="mailto:oracaredental32@gmail.com" className="text-sm md:text-lg font-bold text-foreground hover:text-primary transition-colors break-all">oracaredental32@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-green-100 relative overflow-hidden">
              <div className="hidden sm:block absolute -right-4 -bottom-4 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-50 pointer-events-none" />
              <h4 className="text-lg md:text-xl font-bold text-green-900 mb-1 md:mb-2">Fastest Booking</h4>
              <p className="text-sm md:text-base text-green-800/80 mb-4 md:mb-6">Message us directly on WhatsApp to book your slot instantly.</p>
              
              <a 
                href="https://wa.me/919405717515" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 bg-green-500 text-white rounded-lg md:rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 md:w-6 h-5 md:h-6" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-2xl shadow-primary/5 border border-border/80">
            <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 text-foreground">
              <span className="w-1 md:w-1.5 h-6 md:h-8 bg-primary rounded-full"></span> Send a Message
            </h4>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm text-foreground/80">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-10 md:h-12 text-sm md:text-base bg-secondary/20 focus-visible:ring-primary/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs md:text-sm text-foreground/80">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" className="h-10 md:h-12 text-sm md:text-base bg-secondary/20 focus-visible:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs md:text-sm text-foreground/80">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="h-10 md:h-12 text-sm md:text-base bg-secondary/20 focus-visible:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm text-foreground/80">How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your dental issue or preferred appointment date..." 
                          className="min-h-[100px] md:min-h-[120px] resize-y text-sm md:text-base bg-secondary/20 focus-visible:ring-primary/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending} 
                  className="w-full h-10 md:h-14 text-sm md:text-lg font-semibold rounded-lg md:rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Request
                    </>
                  )}
                </Button>
                
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
