import {
  BodyMediumMedium,
  BodySmallMedium,
  Button,
  Heading1,
  OTPInput,
} from "@/components/atoms";
import { cn } from "@/lib";
import { useState } from "react";

interface IStepIIProps {
  getter: string;
}

const StepII: React.FC<IStepIIProps> = ({ getter }) => {
  const [otpValue, setOtpValue] = useState("");

  return (
    <>
      <div className="w-10">
        <svg
          className="w-full h-auto"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 0H40L20 20H40L20 40H0L20 20H0L20 0Z"
            fill="#9FE870"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <Heading1 className="tracking-[-1px] text-2xl! ipad-vertical:text-[32px]!">
          Password Reset
        </Heading1>
        <BodyMediumMedium
          className={cn(
            "text-center",
            "text-placeholder",
            "dark:text-placeholder-dark"
          )}
        >
          We sent a code to{" "}
          <span className="text-text dark:text-white">{getter}</span>
        </BodyMediumMedium>
      </div>
      <div className="w-full flex flex-col gap-6 items-center">
        <OTPInput
          length={6}
          autoFocus
          onChange={(value) => setOtpValue(value)}
          onComplete={(value) => console.log("OTP Complete:", value)}
        />
        <div className="w-full flex flex-col items-start gap-4">
          <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
            Didn’t receive the email?{" "}
            <span className="text-text dark:text-white cursor-pointer hover:underline">
              Click to resend code
            </span>
          </BodySmallMedium>
          <Button
            type="submit"
            variant="primary"
            disabled={otpValue.length < 6}
            className=" w-full  rounded-full hover:bg-primary/80 duration-300 py-"
          >
            <BodySmallMedium className="">Reset Password</BodySmallMedium>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepII;
