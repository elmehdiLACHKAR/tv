import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Streamers Worldwide"
          subtitle="Join thousands of satisfied customers who made the switch to premium IPTV."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
