"use client";
import Image from "next/image";
import { CLientlist } from "@/config";
import Container from "@/components/atoms/container/Container";
import { BodyMediumRegular, Heading1, Heading4 } from "@/components/atoms";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const INITIAL_WIDTH: number = 80;
  const INITIAL_HEIGHT: number = 80;
  const TOTAL_ELEMENT: number = 5;

  useEffect(() => {
    gsap.fromTo(
      ".scale-up",
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        // stagger: 0.2,
        // scrollTrigger: {
        //   trigger: ".fade-up-scroll",
        //   start: "top 85%", // mulai ketika elemen hampir masuk viewport
        // },
      }
    );

    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        {
          y: -40,
        },
        {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }
  }, []);
  return (
    <Container className="relative z-0 ">
      <div className="absolute z-[-1] bottom-[40%] left-[0%] flex justify-center items-center ">
        {Array.from({ length: TOTAL_ELEMENT }).map((_, i: number) => {
          return (
            <div
              style={{
                width: INITIAL_WIDTH + i * 200,
                height: INITIAL_HEIGHT + i * 200,
                opacity: 0.25 - i * 0.015,
                zIndex: 10 - i,
              }}
              className="bg-primary absolute rounded-full scale-up"
              key={i}
            ></div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
        <Heading1 className="font-extrabold text-center lg:text-left text-foreground max-w-lg">
          Color <span className="text-primary">Digitally With</span> Imagination
          Palette
        </Heading1>
        <BodyMediumRegular className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint omnis
          eveniet unde corrupti? Sequi quod maxime, id a nihil amet laboriosam
          esse dolore sint alias possimus iste incidunt sunt molestiae.
        </BodyMediumRegular>
      </div>

      <div className="w-full grid grid-cols-5 mt-10 gap-5">
        <div className="">
          <div className="flex flex-col gap-5">
            {CLientlist.map((items) => (
              <div
                key={items.id}
                className="rounded-3xl  px-4 py-5 w-full backdrop-blur-xs  border border-white/40 shadow-[7px_7px_0px_#7f3aa1] hover:-translate-y-1 duration-300"
              >
                <Heading4 className="text-secound font-bold!">
                  {items.title}
                  <span className="ml-1">{items.icon}</span>
                </Heading4>
                <BodyMediumRegular className="text-secound">
                  {items.desc}
                </BodyMediumRegular>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 bg-primary rounded-3xl flex flex-col items-start justify-end relative z-0 overflow-hidden p-5 hero-section">
          <div
            ref={parallaxRef}
            className="absolute z-[-2] w-full h-full inset-0"
          >
            <Image
              src={"/images/pdam-meeting.jpeg"}
              alt="Gutech Developer"
              fill
              priority
              quality={100}
              className="object-cover scale-[1.1]"
            />
          </div>
          <div className="absolute z-[-1] w-full h-full bg-linear-to-t from-black/70 to-black/30 inset-0"></div>
          <div className="w-auto flex justify-start items-center gap-12 p-5 rounded-2xl backdrop-blur-[2px] bg-white/10 border border-white/40 shadow-[inset_-3px_-3px_4px_rgba(255,255,255,0.15),inset_3px_3px_4px_rgba(255,255,255,0.15)]">
            <div className="flex items-center w-24 ">
              <Image
                src={"/icon/gutech-white.png"}
                alt="Gutech Developer"
                width={96}
                height={40} // rasio logo
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="flex items-start flex-col text-secound/80">
              <h1>We Are Base in</h1>
              <h1 className="mt-1 font-bold text-secound tracking-[2px]">
                Banda Aceh
              </h1>
            </div>
            <div className="flex items-start flex-col text-secound/80">
              <h1>Let&apos;s Talk</h1>
              <h1 className="mt-1 font-bold text-secound tracking-[2px]">
                hello@gutech.dev
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
