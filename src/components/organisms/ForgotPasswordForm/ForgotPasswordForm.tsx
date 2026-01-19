"use client";
import { Icon } from "@/components";
import StepI from "@/components/molecules/forgot-password/StepI";
import StepII from "@/components/molecules/forgot-password/StepII";
import StepIII from "@/components/molecules/forgot-password/StepIII";
import { cn } from "@/lib";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ForgotPasswordForm: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [formInput, setFormInput] = useState<string>("");

  const getStepInterface = () => {
    switch (step) {
      case 1:
        return <StepI setter={setFormInput} getter={formInput} />;
      case 2:
        return <StepII getter={formInput} />;
      case 3:
        return <StepIII />;

      default:
        return <StepI setter={setFormInput} getter={formInput} />;
    }
  };

  useEffect(() => {}, [step]);

  return (
    <form
      action={() => setStep(step + 1)}
      className={cn(
        " w-full h-auto ipad-horizontal:h-full rounded-[20px]  p-4 ipad-vertical:py-8 ipad-vertical:px-20 flex flex-col gap-6 items-center justify-center",
        "bg-background text-text",
        "dark:bg-background-dark dark:text-text-dark dark:shadow-[inset_0_-4px_24px_#B0B0B040]"
      )}
    >
      <div className="relative z-0 w-full h-auto flex flex-col gap-6 items-center justify-center">
        <div
          onClick={() => router.back()}
          className={cn(
            "absolute z-1 inset-0 border  py-2.5 px-4 rounded-full w-12.5 h-9.5 flex items-center justify-center cursor-pointer",
            "border-[#A4ACB9]",
            "dark:border-[#818898]"
          )}
        >
          <Icon
            name="arrow-left-s-line"
            size="lg"
            className="text-secound dark:text-primary"
          />
        </div>
        {getStepInterface()}
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
