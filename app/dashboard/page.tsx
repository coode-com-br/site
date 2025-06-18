import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const features = [
  {
    title: "Operações",
    description: "Find untapped areas to explore effortlessly.",
  },
  {
    title: "DevOps",
    description:
      "O DevOps é uma abordagem à cultura, automação e design de plataforma destinada a oferecer maior valor de negócios e capacidade de resposta por meio da entrega rápida de serviços.",
  },
  {
    title: "MLOps",
    description: "Get actionable insights instantly at a glance.",
  },
];

export default function Page() {
  return (
    <div className="flex-col items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            Coode tecnologia
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Somos parceiro Seprol, especializados em serviços Red Hat.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button asChild size="lg" className="rounded-full text-base">
              <Link href="https://seprol.com.br" target="_blank">
                Acesse Seprol <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full video bg-accent rounded-xl">
          <Image
            src="/seprol.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full object-center"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Separator />
      </div>
      <div className="w-full py-12">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Ignite Your Imagination
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col text-start">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl" />
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}