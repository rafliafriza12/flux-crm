"use client";
import {
  BodyMediumMedium,
  BodyMediumRegular,
  BodySmallMedium,
  Button,
  EmailInput,
  Heading1,
  Input,
  PasswordInput,
} from "@/components";
import Modal from "@/components/molecules/Modal/Modal";
import { cn } from "@/lib";
import { useAuth } from "@/providers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const RegisterForm: React.FC = () => {
  const { register, isLoading } = useAuth();
  const router = useRouter();
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await register({
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      email: formInput.email,
      password: formInput.password,
    });

    if (result.success) {
      setIsOpen(true);
    } else {
      setError(result.message);
    }
  };

  const handleModalAction = () => {
    setIsOpen(false);
    router.push("/login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        " w-full h-auto ipad-horizontal:h-full rounded-[20px]  p-4 ipad-vertical:py-8 ipad-vertical:px-20 flex flex-col gap-6 items-center justify-center",
        "bg-background text-text",
        "dark:bg-background-dark dark:text-text-dark dark:shadow-[inset_0_-4px_24px_#B0B0B040]"
      )}
    >
      <Modal
        type="success"
        title="Congratulations, You're In"
        subtitle="Let's get started and take your customer engagement to 
the next level!"
        buttonText="Get Started"
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        action={handleModalAction}
      />
      <div className="flex flex-col gap-3 items-center">
        <Heading1 className="tracking-[-1px] ipad-vertical:text-[32px]!">
          Create Your Account
        </Heading1>
        <BodyMediumMedium
          className={cn(
            "text-center",
            "text-placeholder",
            "dark:text-placeholder-dark"
          )}
        >
          Please input to your account
        </BodyMediumMedium>
      </div>
      <div className="w-full flex flex-col gap-6 items-center">
        {error && (
          <div className="w-full p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
            {error}
          </div>
        )}
        <div className="w-full grid grid-cols-1 ipad-horizontal:grid-cols-2 gap-6 ipad-horizontal:gap-3">
          <Input
            value={formInput.firstName}
            onChange={(e) =>
              setFormInput((prev) => ({ ...prev, firstName: e.target.value }))
            }
            label="First Name"
            type="text"
            required
            icon="user-3-line"
            helperText="Input your first name"
          />
          <Input
            value={formInput.lastName}
            onChange={(e) =>
              setFormInput((prev) => ({ ...prev, lastName: e.target.value }))
            }
            label="Last Name"
            type="text"
            required
            icon="user-3-line"
            helperText="Input your Last name"
          />
        </div>
        <EmailInput
          required
          value={formInput.email}
          onChange={(e) =>
            setFormInput((prev) => ({ ...prev, email: e.target.value }))
          }
          label="Email"
          helperText="Your email"
        />
        <PasswordInput
          value={formInput.password}
          onChange={(e) =>
            setFormInput((prev) => ({ ...prev, password: e.target.value }))
          }
          required
          label="Password"
          helperText="Your password"
        />
        <div className="w-full flex flex-col items-start gap-4">
          <Button
            type="submit"
            variant="primary"
            disabled={
              formInput.email === "" || formInput.password === "" || isLoading
            }
            className=" w-full  rounded-full hover:bg-primary/80 duration-300 py-"
          >
            <BodySmallMedium>
              {isLoading ? "Loading..." : "Register"}
            </BodySmallMedium>
          </Button>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center relative z-0">
        <p
          className={cn(
            "absolute z-2 text-xs font-medium  px-3",
            "text-placeholder bg-background",
            "dark:text-placeholder-dark dark:bg-background-dark"
          )}
        >
          Or Sign up with
        </p>
        <div className="w-full absolute z-1 h-px border-t border-border dark:border-border-dark"></div>
      </div>
      <div className="w-full grid grid-cols-1 ipad-vertical:grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full dark:text-text-dark!"
        >
          <Image
            src={"/icon/google.png"}
            alt="FluxCRM"
            width={24}
            height={24}
          />
          <BodyMediumRegular>Sign up with Google</BodyMediumRegular>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full dark:text-text-dark!"
        >
          <Image
            src={"/icon/apple.png"}
            alt="FluxCRM"
            width={24}
            height={24}
            className="dark:invert-[1]"
          />
          <BodyMediumRegular>Sign up with Apple</BodyMediumRegular>
        </Button>
      </div>
      <BodySmallMedium className=" flex items-center gap-1">
        Already have an account?
        <Link href={"/login"}>
          <span className="text-primary">Sign in</span>
        </Link>
      </BodySmallMedium>
    </form>
  );
};

export default RegisterForm;
