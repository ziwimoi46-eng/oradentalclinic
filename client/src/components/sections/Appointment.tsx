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
    <section id="appointment" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Contact Info & WhatsApp CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready for your best smile?
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Book an appointment with us today. You can fill out the contact form, give us a call, or instantly reach us via WhatsApp.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4 bg-secondary/50 p-4 rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Call Us</p>
                  <a href="tel:9405717515" className="text-xl font-bold text-foreground hover:text-primary transition-colors">9405717515</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-secondary/50 p-4 rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                  <a href="mailto:oracaredental32@gmail.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors break-all">oracaredental32@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-50 pointer-events-none" />
              <h4 className="text-xl font-bold text-green-900 mb-2">Fastest Booking</h4>
              <p className="text-green-800/80 mb-6">Message us directly on WhatsApp to book your slot instantly.</p>
              
              <a 
                href="https://wa.me/919405717515" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/5 border border-border/80">
            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <span className="w-1.5 h-8 bg-primary rounded-full"></span> Send a Message
            </h4>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 bg-secondary/20 focus-visible:ring-primary/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" className="h-12 bg-secondary/20 focus-visible:ring-primary/20" {...field} />
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
                        <FormLabel className="text-foreground/80">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="h-12 bg-secondary/20 focus-visible:ring-primary/20" {...field} />
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
                      <FormLabel className="text-foreground/80">How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your dental issue or preferred appointment date..." 
                          className="min-h-[120px] resize-y bg-secondary/20 focus-visible:ring-primary/20" 
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
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
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
