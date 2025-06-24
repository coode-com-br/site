import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Navbar04Page from "@/components/layout/navbar-04";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookCheck, ChartPie, Goal } from "lucide-react";

const features = [
  {
    icon: Goal,
    title:
      "Gerenciar contêineres que executam aplicativos e garantir que não haja tempo de inatividade",
    description:
      "Com o IaC, sua infraestrutura torna-se modular e reutilizável: componentes como servidores, redes, volumes e serviços podem ser estruturados em blocos independentes e recombináveis. Essa abordagem facilita a automação em larga escala, acelera o time-to-market e aumenta a eficiência operacional.",
  },
  {
    icon: BookCheck,
    title: "DevOps como código",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: ChartPie,
    title: "MLOps como código",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar04Page />
      <div className="flex-col items-center justify-center pt-30">
        <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 pb-10">
          <div>
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
              CØØDE
              <br />
              IT como código
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg">
              Startup Seprol - Especializada em serviços Linux & Kubernetes com
              Red Hat.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <Button asChild size="lg" className="rounded-full text-base">
                <Link href="https://seprol.com.br" target="_blank">
                  Acesse Seprol <ArrowUpRight className="!h-5 !w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
              >
                <Link href="/dashboard" target="_blank">
                  <CirclePlay className="!h-5 !w-5" /> Dashboard
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between rounded-xl">
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
        <div className="flex items-center justify-center pt-4">
          <div className="max-w-screen-lg w-full px-6">
            <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
              Qual sua área de interesse?
            </h2>
            <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="flex flex-col border rounded-xl overflow-hidden shadow-none"
                >
                  <CardHeader>
                    <feature.icon />
                    <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-muted-foreground text-[17px]">
                      {feature.description}
                    </p>
                  </CardHeader>
                  <CardContent className="mt-auto px-0 pb-0">
                    <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
