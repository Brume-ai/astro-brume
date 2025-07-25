"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

import { Boxes } from "@/components/aceternity/background-boxes";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "@/components/ui/button";

const Hero223 = () => {
  return (
    <section className="py-32">
      <div className="relative container flex h-150 w-full flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-background [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="scale-150" />

        <h1 className="relative z-99 max-w-4xl text-center text-5xl font-medium tracking-tight md:text-7xl">
          <span className="mr-3 text-muted-foreground/50">
            The only app you Need to Stay
          </span>
          <LineShadowText> Productive </LineShadowText>
          <span className="text-muted-foreground/50"> ever</span>
          <span>.</span>
        </h1>
        <p className="relative z-99 mt-4 max-w-xl text-center text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
          quisquam debitis error vero possimus amet
        </p>
        <div className="realtive z-99 mt-10 flex items-center justify-center gap-4">
          <Button
            variant="default"
            className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>See Pricing</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
          <Button
            variant="secondary"
            className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>Try it for free</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero223 };
