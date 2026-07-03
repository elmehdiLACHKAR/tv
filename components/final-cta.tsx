import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="glass-card neon-ring mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-200">
              Ready to launch
            </p>
            <h2 className="font-[var(--font-jakarta)] text-3xl font-black tracking-tight text-white md:text-5xl">
              Premium streaming starts with a simple plan.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Pick a subscription, send your order through WhatsApp or email, and receive
              activation guidance with a polished customer journey.
            </p>
          </div>
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 px-7 py-4 text-sm font-black text-slate-950 transition hover:scale-105"
          >
            Start checkout
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
