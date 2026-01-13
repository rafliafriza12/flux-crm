import {
  BodyMediumMedium,
  BodySmallMedium,
  Button,
  Heading1,
  PasswordInput,
} from "@/components/atoms";
import { cn } from "@/lib";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

const StepIII: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <Modal
        type="success"
        title="Password updated successfully"
        subtitle="Your password has been successfully updated, 
please log in first"
        buttonText="Login Now"
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        action={() => (router.replace("/login"), setIsOpen(false))}
      />
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
          Set New Password
        </Heading1>
        <BodyMediumMedium
          className={cn(
            "text-center",
            "text-placeholder",
            "dark:text-placeholder-dark"
          )}
        >
          Must be at least 8 characters
        </BodyMediumMedium>
      </div>
      <div className="w-full flex flex-col gap-6 items-center">
        <PasswordInput
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          label="New Password"
          helperText="Your new password"
        />
        <PasswordInput
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
          label="Confirm Password"
          helperText="Input your password to confirm"
        />
        <div className="w-full flex flex-col items-start gap-4">
          <Button
            type="button"
            variant="primary"
            onClick={() => setIsOpen(true)}
            disabled={
              newPassword === "" ||
              newPassword.length < 8 ||
              confirmNewPassword === "" ||
              confirmNewPassword.length < 8 ||
              newPassword !== confirmNewPassword
            }
            className=" w-full  rounded-full hover:bg-primary/80 duration-300 py-"
          >
            <BodySmallMedium className="">Reset Password</BodySmallMedium>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepIII;
