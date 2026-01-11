"use client";
import Image from "next/image";
import { useState } from "react";
import { insightsData } from "@/config";
import Container from "@/components/atoms/container/Container";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
} from "@/components/atoms";

const InsightsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="rounded-3xl bg-deep px-8 py-12 text-foreground">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <BodyLargeMedium className="inline-block mb-3 text-primary">
                  BLOG
                </BodyLargeMedium>
                <Heading1 className="text-secound">
                  Latest Insight Updates
                </Heading1>
                <BodyMediumRegular className="mt-2 max-w-md text-secound/70">
                  Follow our blog for specific topics, be it in science,
                  technology, tips and tricks, etc.
                </BodyMediumRegular>
              </div>

              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-secound hover:opacity-90 transition">
                All Post →
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {insightsData.map((item, index) => {
                const isActive = hoveredIndex === index;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative h-95 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-300 ${
                        isActive ? "bg-deep/70" : "bg-deep/40"
                      }`}
                    />

                    <div
                      className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                        isActive ? "translate-y-0" : "translate-y-6"
                      }`}
                    >
                      <span className="mb-2 inline-block rounded-full bg-brand/70 px-3 py-1 text-xs text-secound">
                        {item.category}
                      </span>

                      <h3 className="text-lg text-secound font-semibold leading-snug">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 text-sm text-secound/80 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.description}
                      </p>

                      <button
                        className={`mt-4 inline-flex items-center gap-2 text-sm font-medium text-secound transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Learn more →
                      </button>
                    </div>
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

export default InsightsSection;
