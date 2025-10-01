import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  company: z.string().trim().min(1, { message: "Company is required" }).max(100, { message: "Company must be less than 100 characters" }),
  product: z.string().min(1, { message: "Please select a product" }),
  quantity: z.coerce.number().min(1, { message: "Quantity must be at least 1" }).max(999, { message: "Quantity must be less than 1000" }),
  additionalInfo: z.string().max(1000, { message: "Additional information must be less than 1000 characters" }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequestsSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      product: "",
      quantity: 1,
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://hook.eu2.make.com/4d6ms6di8iatkai6cx6mu8c72d2fgsab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success("Request submitted successfully!", {
        description: "We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("There has been an error, try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-muted/30 py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4">
              Product Requests
            </h2>
            <p className="text-lg text-muted-foreground">
              Interested in our products? Submit a request and our team will contact you shortly.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-card-border rounded-2xl p-8 lg:p-12 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Field */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Product Field */}
                <FormField
                  control={form.control}
                  name="product"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="galaxy-s25-ultra">Galaxy S25 Ultra</SelectItem>
                          <SelectItem value="galaxy-z-flip7">Galaxy Z Flip7</SelectItem>
                          <SelectItem value="galaxy-z-fold7">Galaxy Z Fold7</SelectItem>
                          <SelectItem value="galaxy-watch8">Galaxy Watch8</SelectItem>
                          <SelectItem value="bespoke-ai">Bespoke AI Appliances</SelectItem>
                          <SelectItem value="samsung-tv">Samsung TV</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Quantity Field */}
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Information Field */}
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific requirements or questions..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestsSection;
