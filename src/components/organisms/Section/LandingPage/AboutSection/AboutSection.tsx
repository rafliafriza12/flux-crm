"use client";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
} from "@/components/atoms";
import Container from "@/components/atoms/container/Container";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        {
          y: -70,
        },
        {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }
  }, []);
  return (
    <Container>
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="overflow-hidden about-section rounded-3xl ">
                <div ref={parallaxRef} className="relative overflow-hidden ">
                  <Image
                    src="/images/companyDummy.jpg"
                    alt="About us"
                    width={600}
                    height={450}
                    className="object-cover aspect-square scale-[1.4]"
                  />
                </div>
              </div>

              <div className="absolute -bottom-10 -right-6 rounded-2xl bg-deep p-6 text-foreground shadow-xl w-60 border-4 border-secound">
                <h3 className="text-4xl text-secound font-bold">
                  530<span className="text-primary">+</span>
                </h3>
                <p className="mt-1 text-secound text-sm ">
                  Trusted by our clients
                </p>

                <div className="mt-4 flex items-center -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`/avatar/${i}.jpg`}
                      alt="avatar"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-deep"
                    />
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm text-foreground">
                    +
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BodyLargeMedium className="inline-block mb-4 text-primary">
                ABOUT US
              </BodyLargeMedium>

              <Heading1 className="text-foreground">
                Why You Should <br />
                Choose <span className="text-primary">Gutech</span>
              </Heading1>

              <BodyMediumRegular className="mt-6 max-w-xl text-foreground">
                We proudly introduce ourselves as a digital creative agency
                committed to realizing our clients&apos; vision and mission
                through creative, innovative, and technology-based solutions in
                the digital world.
              </BodyMediumRegular>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-medium text-brand hover:underline"
              >
                Learn more
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
