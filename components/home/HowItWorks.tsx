import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Pick your plan",
    description: "Choose 1, 3 or 12 months. All plans include the full channel and VOD lineup.",
  },
  {
    number: "02",
    title: "Order via WhatsApp or email",
    description: "Send us your order in one message. We confirm payment and activate instantly.",
  },
  {
    number: "03",
    title: "Start streaming",
    description: "Receive your credentials, plug them into any IPTV app and enjoy — usually within 15 minutes.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            From order to streaming in <span className="text-gradient">under 15 minutes</span>
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.12}>
            <article className="glass relative h-full overflow-hidden rounded-3xl p-8 shadow-card">
              <span className="font-display pointer-events-none absolute -right-2 -top-6 text-[7rem] font-bold leading-none text-white/[0.04]">
                {step.number}
              </span>
              <span className="text-gradient font-display text-sm font-bold tracking-widest">
                STEP {step.number}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
