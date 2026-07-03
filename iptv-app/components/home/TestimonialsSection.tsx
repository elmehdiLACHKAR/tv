"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Sports Enthusiast",
    location: "United States",
    avatar: "MT",
    rating: 5,
    text: "StreamVault is absolutely incredible. I can watch all my favorite sports leagues from around the world in 4K with zero buffering. The channels load instantly and the picture quality is stunning.",
    plan: "Ultimate Plan",
  },
  {
    name: "Sophie Laurent",
    role: "Movie Buff",
    location: "France",
    avatar: "SL",
    rating: 5,
    text: "I've tried many IPTV services and StreamVault is by far the best. The VOD library is massive, the UI is clean, and customer support actually responds within minutes. Highly recommended!",
    plan: "Pro Plan",
  },
  {
    name: "Rajan Mehta",
    role: "Tech Professional",
    location: "India",
    avatar: "RM",
    rating: 5,
    text: "Setup took less than 5 minutes on my Firestick. Works flawlessly with 3 TVs simultaneously. The value for money is unbeatable — I pay less than my old cable bill and get 10x more content.",
    plan: "Ultimate Plan",
  },
  {
    name: "Carlos Mendez",
    role: "Family Man",
    location: "Spain",
    avatar: "CM",
    rating: 5,
    text: "My entire family loves StreamVault. Kids shows, sports, international news — everything we need. The parental controls and EPG guide make it so easy to manage. We switched from Netflix + cable and saved a fortune.",
    plan: "Pro Plan",
  },
  {
    name: "Aisha Okonkwo",
    role: "Expat Living Abroad",
    location: "Nigeria",
    avatar: "AO",
    rating: 5,
    text: "Living abroad, I missed home TV channels desperately. StreamVault solved that instantly. I can watch my home country channels in HD every single day. The anti-freeze technology really works!",
    plan: "Starter Plan",
  },
  {
    name: "James Wilson",
    role: "Cord-Cutter",
    location: "United Kingdom",
    avatar: "JW",
    rating: 5,
    text: "Cut the cord 2 years ago and haven't looked back. StreamVault is the core of my entertainment setup. 24/7 support is genuinely helpful, not just bots. This is exactly what IPTV should be.",
    plan: "Ultimate Plan",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="glow-blob w-96 h-96 bg-purple-600 top-0 -right-48 opacity-10" />
      <div className="glow-blob w-64 h-64 bg-cyan-500 bottom-0 -left-32 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by Streamers "
            highlight="Worldwide"
            description="Join over 50,000 satisfied subscribers who've made StreamVault their go-to entertainment platform."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 card-hover hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <StarRating rating={testimonial.rating} />
                <Quote className="w-8 h-8 text-purple-500/40" />
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs truncate">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
                <span className="text-xs glass px-2.5 py-1 rounded-full text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                  {testimonial.plan}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          <div className="text-center">
            <div className="text-3xl font-black gradient-text">50,000+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-black gradient-text">4.9/5</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-black gradient-text">98%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-black gradient-text">150+</div>
            <div className="text-gray-400 text-sm">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
