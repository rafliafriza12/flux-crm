import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
} from "@/components/atoms";
import Container from "@/components/atoms/container/Container";
import Image from "next/image";

const CtaSectiom = () => {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src="/images/companyDummy.jpg"
            alt="Ready to talk"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-deep/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center text-secound">
          <BodyLargeMedium className="mb-4 text-primary">
            STAY IN TOUCH
          </BodyLargeMedium>

          <Heading1 className="text-secound">Ready To Talk</Heading1>

          <BodyMediumRegular className="mt-4 max-w-2xl text-secound/80 ">
            Feel free to contact us right now. We are pleased to announce our
            readiness to receive contacts from potential clients.
          </BodyMediumRegular>

          <button className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-secound transition hover:opacity-90">
            Let’s Talk
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CtaSectiom;
