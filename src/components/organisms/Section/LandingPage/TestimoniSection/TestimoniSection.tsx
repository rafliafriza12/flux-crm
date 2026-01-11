"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonialsData, brandsList } from "@/config";
import Container from "@/components/atoms/container/Container";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
} from "@/components/atoms";

const TestimonialsSection = () => {
  return (
    <Container>
      <div className="w-full">
        <div className="mb-12 text-center">
          <BodyLargeMedium className="inline-block mb-4 text-primary">
            TESTIMONIALS
          </BodyLargeMedium>
          <Heading1 className="text-foreground">Hear From Our Clients</Heading1>
          <BodyMediumRegular className="mx-auto mt-4 max-w-2xl text-foreground/70">
            This testimonial is a motivation for us to continue improving
            quality and providing better satisfaction.
          </BodyMediumRegular>
        </div>
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="  max-w-9xl px-2 pb-12 p-2 [&_.swiper-pagination]:-bottom-4.5!"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <div className="h-full rounded-3xl bg-brand/10 p-8 text-foreground">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-foreground/60">{item.role}</p>

                      <p className="mt-4 text-foreground/80">“{item.quote}”</p>

                      <div className="mt-4 flex items-center justify-between border-t">
                        <span className="text-xs text-foreground/50">
                          {item.date}
                        </span>

                        <div className="flex gap-1 text-amber-400">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Marquee speed={40} className="mt-16">
          <div className="flex gap-46">
            {brandsList.map((brand) => (
              <Image
                key={brand.id}
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={40}
                className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
