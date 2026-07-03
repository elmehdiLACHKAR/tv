import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/lib/data";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Why Millions Choose NexStream"
          subtitle="Built for performance, designed for simplicity. Everything you need for the ultimate streaming experience."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
