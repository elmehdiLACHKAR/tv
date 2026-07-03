import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import { faqItems } from "@/lib/data";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before getting started."
        />
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
