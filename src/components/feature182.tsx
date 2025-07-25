"use client";
import { ArrowRight, BadgeCheck, Pyramid, Sparkle, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataItem {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const DATA: DataItem[] = [
  {
    title: "Structures réutilisables",
    description:
      "Générez des dizaines de contenus via une structure réutilisable.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    icon: <Zap className="size-6" />,
  },
  {
    title: "Multi-agents",
    description:
      "La clé d'une qualité supérieure.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    icon: <Pyramid className="size-6" />,
  },
  {
    title: "Génération supervisée",
    description:
      "Pour vos articles d'actualités et vos contenus ultra-spécifiques.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    icon: <Sparkle className="size-6" />,
  },
];

const Feature182 = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Title and Buttons Section */}
        <div className="text-center">
          <h2 className="mb-6 text-2xl font-semibold sm:mb-9 sm:text-3xl lg:mb-14 lg:text-4xl">
            Solutions innovantes
          </h2>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-12 grid gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DATA.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-64 w-full rounded-lg object-cover"
              />
              <p className="mt-4 mb-2 text-xl font-bold">{feature.title}</p>
              <p className="mb-6 text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="w-fit rounded-lg border p-2 shadow-sm">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature182 };
