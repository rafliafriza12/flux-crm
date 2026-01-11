import Image from "next/image";
import { ItWorkData } from "@/config";
import { Icon } from "@iconify/react";

const HowItWorksSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="w-full flex items-center justify-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="inline-block mb-4 rounded-full border font-heading border-brand/30 px-4 py-1 text-xs tracking-widest text-brand">
              HOW IT WORKS?
            </span>
            <h2 className="text-4xl font-heading font-bold text-foreground">
              How Do We Works?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              We strive to create extraordinary experiences, increase brand
              awareness, expand target audience reach, and optimize overall
              business results.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ItWorkData.slice(0, 1).map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-deep p-8 text-foreground"
              >
                <span className="text-3xl font-bold text-primary">
                  {item.step}
                </span>
                <h3 className="mt-4 text-4xl font-heading font-semibold text-secound">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg text-secound/70">
                  {item.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-foreground hover:opacity-90 transition">
                  Learn More →
                </button>
              </div>
            ))}
            <div className="relative lg:col-span-2 overflow-hidden rounded-3xl border-20 border-deep">
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
                className="rounded-3xl bg-deep p-8 text-foreground"
              >
                <span className="text-3xl font-bold text-primary">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-4xl font-semibold text-secound">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg text-secound/70">
                  {item.description}
                </p>

                <button className="mt-6 rounded-full border border-secound/40 px-5 py-2 text-sm text-secound hover:bg-brand/10 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
