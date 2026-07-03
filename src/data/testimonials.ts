export type Testimonial = {
  name: string;
  location: string;
  initials: string;
  rating: number;
  quote: string;
  plan: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Webb",
    location: "Manchester, UK",
    initials: "MW",
    rating: 5,
    quote:
      "Switched from cable to Nebula Stream six months ago and I haven't looked back. Zero buffering during live matches, even on Saturdays.",
    plan: "Elite · 12 Months",
  },
  {
    name: "Sofia Alvarez",
    location: "Madrid, Spain",
    initials: "SA",
    rating: 5,
    quote:
      "The VOD library is huge and gets updated so fast. Setup on my Fire Stick took less than five minutes with their support team.",
    plan: "Pro · 3 Months",
  },
  {
    name: "Daniel Osei",
    location: "Toronto, Canada",
    initials: "DO",
    rating: 5,
    quote:
      "Best value I've found for international channels. My whole family uses it across four different devices without a hitch.",
    plan: "Elite · 12 Months",
  },
  {
    name: "Priya Nair",
    location: "Dubai, UAE",
    initials: "PN",
    rating: 4,
    quote:
      "Support answered on WhatsApp at 2am and fixed my playlist in minutes. That kind of service is rare these days.",
    plan: "Starter · 1 Month",
  },
  {
    name: "Lukas Becker",
    location: "Berlin, Germany",
    initials: "LB",
    rating: 5,
    quote:
      "4K quality is genuinely stunning on my OLED TV. Picture is sharper than my previous cable provider by a mile.",
    plan: "Pro · 3 Months",
  },
  {
    name: "Amara Chukwu",
    location: "Lagos, Nigeria",
    initials: "AC",
    rating: 5,
    quote:
      "Reliable even during peak hours. I recommended it to three friends and they all upgraded to the yearly plan.",
    plan: "Elite · 12 Months",
  },
];
