import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema } from "@shared/schema";
import { Phone, Mail, MapPin, Upload, Send } from "lucide-react";

const formSchema = insertContactInquirySchema.extend({
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      type: "client",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Get In Touch</h2>
          <p className="text-xl text-brand-gray">Ready to find your next opportunity or headhunt the perfect candidate?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray mb-1">Phone</h4>
                  <p className="text-brand-gray">0121 456 7890</p>
                  <p className="text-brand-gray text-sm">Mon-Fri 8:30am - 6:00pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray mb-1">Email</h4>
                  <p className="text-brand-gray">hello@pioneeringrecruitment.co.uk</p>
                  <p className="text-brand-gray text-sm">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray mb-1">Office</h4>
                  <p className="text-brand-gray">Birmingham Business Park</p>
                  <p className="text-brand-gray">Birmingham, B37 7YE</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold text-dark-gray mb-4">For Candidates</h4>
              <p className="text-brand-gray mb-4">
                Looking for your next career move in the UK builders merchant industry?
                We have exclusive opportunities that aren't advertised elsewhere.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                <Upload className="mr-2 h-4 w-4" />
                Upload Your CV
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Ready to partner with our headhunting experts?</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-gray font-medium">Name *</FormLabel>
                        <FormControl>
                          <Input {...field} className="focus:ring-brand-orange focus:border-brand-orange" />
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
                        <FormLabel className="text-brand-gray font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="focus:ring-brand-orange focus:border-brand-orange" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-gray font-medium">Company</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ''} className="focus:ring-brand-orange focus:border-brand-orange" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-gray font-medium">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} value={field.value || ''} className="focus:ring-brand-orange focus:border-brand-orange" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-gray font-medium">I am a:</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="client" id="client" />
                            <Label htmlFor="client" className="text-brand-gray cursor-pointer">
                              Client looking to hire
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="candidate" id="candidate" />
                            <Label htmlFor="candidate" className="text-brand-gray cursor-pointer">
                              Candidate seeking roles
                            </Label>
                          </div>
                        </RadioGroup>
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
                      <FormLabel className="text-brand-gray font-medium">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          placeholder="Tell us about your requirements or career goals..."
                          className="focus:ring-brand-orange focus:border-brand-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-red-600 text-white py-4 text-lg font-semibold"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
