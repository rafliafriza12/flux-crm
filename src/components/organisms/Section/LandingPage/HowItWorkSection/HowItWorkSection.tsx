import Image from "next/image";
import { ItWorkData } from "@/config";
import { Icon } from "@iconify/react";
import Container from "@/components/atoms/container/Container";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
  Heading3,
} from "@/components/atoms";

const HowItWorksSection = () => {
  return (
    <Container>
      <div className="w-full flex items-center justify-center">
        <div className="">
          <div className="mb-14 text-center">
            <BodyLargeMedium className="inline-block mb-4 text-primary">
              HOW IT WORKS?
            </BodyLargeMedium>
            <Heading1 className="text-foreground">How Do We Works?</Heading1>
            <BodyMediumRegular className="mx-auto mt-4 max-w-2xl text-foreground">
              We strive to create extraordinary experiences, increase brand
              awareness, expand target audience reach, and optimize overall
              business results.
            </BodyMediumRegular>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ItWorkData.slice(0, 1).map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-deep p-8 text-foreground flex flex-col justify-between items-start"
              >
                <div>
                  <BodyLargeMedium className="font-bold text-primary">
                    {item.step}
                  </BodyLargeMedium>
                  <Heading3 className="mt-4 text-secound">
                    {item.title}
                  </Heading3>
                  <BodyMediumRegular className="mt-3 text-secound/70">
                    {item.description}
                  </BodyMediumRegular>
                </div>

                <button className="mt-6 inline-flex items-center gap-2  text-sm text-secound ">
                  Learn More →
                </button>
              </div>
            ))}
            <div className="relative lg:col-span-2 overflow-hidden rounded-3xl">
              <Image
                src="/images/meetingDummy.jpg"
                alt="How we work"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center  ">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-foreground">
                  <Icon
                    icon="solar:play-bold"
                    width="24"
                    height="24"
                    className="text-deep"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ItWorkData.slice(1).map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-deep p-8 text-foreground flex flex-col justify-between items-start"
              >
                <div>
                  <BodyLargeMedium className="font-bold text-primary">
                    {item.step}
                  </BodyLargeMedium>
                  <Heading3 className="mt-4 text-secound">
                    {item.title}
                  </Heading3>
                  <BodyMediumRegular className="mt-3 text-secound/70">
                    {item.description}
                  </BodyMediumRegular>
                </div>

                <button className="mt-6 inline-flex items-center gap-2  text-sm  text-secound ">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorksSection;
