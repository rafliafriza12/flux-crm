"use client";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
  Heading3,
} from "@/components/atoms";
import Container from "@/components/atoms/container/Container";
import { Features } from "@/config";
import { useState } from "react";

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <Container className="relative z-0">
      <div className="w-full flex justify-center items-center">
        <div className="">
          <div className="rounded-3xl bg-deep px-8 py-14 text-foreground">
            <BodyLargeMedium className="inline-block mb-4 text-primary">
              OUR SERVICE
            </BodyLargeMedium>
            <div className="w-full grid gap-6  lg:grid-cols-2 mb-5">
              <div>
                <Heading1 className="text-secound ">
                  We Build Best <br /> Service Experience
                </Heading1>
              </div>
              <div className="w-full flex items-end justify-end">
                <BodyMediumRegular className="max-w-md w-full text-secound">
                  We believe that creativity, collaboration and adaptability are
                  the keys to success in this fast-changing digital era.
                </BodyMediumRegular>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={feature.title}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer group rounded-2xl p-6 transition-all duration-300 relative z-0
                      ${
                        isActive
                          ? "bg-primary scale-[1.05]"
                          : "bg-brand hover:bg-brand/70"
                      }`}
                  >
                    <div className="absolute z-1 top-6 right-6 w-12.5 flex items-center">
                      <div
                        className={`absolute z-2 w-full h-1 rounded-full ${
                          isActive ? "bg-secound" : "bg-secound/60"
                        }`}
                      ></div>
                      <div
                        className={`absolute z-3 h-4 w-4 rounded-full duration-300 ${
                          isActive
                            ? "left-10 bg-[#5416b5]"
                            : "left-0 bg-primary"
                        }`}
                      ></div>
                    </div>

                    <div
                      className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full
                        ${
                          isActive
                            ? "bg-foreground/20 text-secound"
                            : "bg-primary/50 text-secound/30"
                        }`}
                    >
                      <i className={`${feature.icon} text-xl`} />
                    </div>

                    <Heading3
                      className={`mb-3  ${
                        isActive ? "text-secound" : "text-secound/70"
                      }`}
                    >
                      {feature.title}
                    </Heading3>
                    <BodyMediumRegular
                      className={` text-justify leading-relaxed ${
                        isActive ? "text-secound" : "text-secound/70"
                      }`}
                    >
                      {feature.description}
                    </BodyMediumRegular>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
