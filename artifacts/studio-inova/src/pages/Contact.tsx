import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FadeIn } from "@/components/ui/FadeIn";
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
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@workspace/api-client-react";
import { Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitMutation.mutate(
      { data },
      {
        onSuccess: (response) => {
          toast({
            title: "Message Sent",
            description: response.message || "We'll get back to you shortly.",
            variant: "default",
          });
          form.reset();
        },
        onError: (error) => {
          toast({
            title: "Error",
            description: error.response?.data?.error || "Failed to send message. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our products? We'd love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info Sidebar */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="bg-primary text-white rounded-3xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <h2 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h2>
              
              <div className="space-y-6 flex-1 relative z-10">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-white/70 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/80">hello@studioinova.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white/70 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Studio</h4>
                    <p className="text-white/80 leading-relaxed">
                      Studio Inova —<br />
                      Building Digital Products<br />for Long-term Trust
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <h4 className="font-semibold mb-4 text-white/90">Connect with us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-secondary/50 border-border/50 focus-visible:bg-white transition-colors h-12 rounded-xl px-4" {...field} />
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
                          <FormLabel className="text-foreground font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-secondary/50 border-border/50 focus-visible:bg-white transition-colors h-12 rounded-xl px-4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="bg-secondary/50 border-border/50 focus-visible:bg-white transition-colors h-12 rounded-xl px-4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry..." 
                            className="bg-secondary/50 border-border/50 focus-visible:bg-white transition-colors min-h-[160px] rounded-xl p-4 resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-xl text-base shadow-md hover:shadow-lg transition-all"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
