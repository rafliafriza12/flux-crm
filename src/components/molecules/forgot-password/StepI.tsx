"use client";

import {
  BodyMediumMedium,
  BodySmallMedium,
  Button,
  EmailInput,
  Heading1,
} from "@/components/atoms";
import { cn } from "@/lib";
import { Dispatch, SetStateAction } from "react";

interface IStepIProps {
  getter: string;
  setter: Dispatch<SetStateAction<string>>;
}

const StepI: React.FC<IStepIProps> = ({ setter, getter }) => {
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
          Forgot Password ?
        </Heading1>
        <BodyMediumMedium
          className={cn(
            "text-center",
            "text-placeholder",
            "dark:text-placeholder-dark"
          )}
        >
          No worries, we’ll send you reset instructions
        </BodyMediumMedium>
      </div>
      <div className="w-full flex flex-col gap-6 items-center">
        <EmailInput
          required
          value={getter}
          onChange={(e) => setter(e.target.value)}
          label="Email"
          helperText="Your email"
        />
        <div className="w-full flex flex-col items-start gap-4">
          <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
            By creating an account, you agree to our Privacy Policy
          </BodySmallMedium>
          <Button
            type="submit"
            variant="primary"
            disabled={getter === ""}
            className=" w-full  rounded-full hover:bg-primary/80 duration-300 py-"
          >
            <BodySmallMedium className="">Reset Password</BodySmallMedium>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepI;
