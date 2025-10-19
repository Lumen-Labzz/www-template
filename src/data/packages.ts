import type { Package } from "@/types";

export const packages: Package[] = [
  {
    id: crypto.randomUUID(),
    name: "Starter",
    price: 9,
    billingCycle: "monthly",
    description:
      "A simple plan for individuals exploring WWW-Template. Perfect to get started with premium designs.",
    features: [
      "1 website template",
      "Basic customization options",
      "Community support",
      "Email updates",
    ],
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Pro",
    price: 29,
    billingCycle: "monthly",
    description:
      "Designed for creators and freelancers who need more control and flexibility over their templates.",
    features: [
      "5 premium templates",
      "Advanced customization tools",
      "Priority email support",
      "Access to beta features",
    ],
    isPopular: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Business",
    price: 59,
    billingCycle: "monthly",
    description:
      "For small businesses looking to scale their online presence with powerful templates and integrations.",
    features: [
      "Unlimited templates",
      "Team collaboration tools",
      "Analytics dashboard",
      "Dedicated support",
    ],
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Enterprise",
    price: 99,
    billingCycle: "monthly",
    description:
      "Custom-tailored solutions for large teams or enterprises needing advanced scalability and white-label options.",
    features: [
      "Unlimited access to all templates",
      "Custom branding",
      "Dedicated account manager",
      "24/7 enterprise support",
    ],
    isPopular: false,
  },
];
