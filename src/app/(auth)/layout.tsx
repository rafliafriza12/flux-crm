import AuthLayoutProvider from "@/providers/AuthLayoutProvider";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthLayoutProvider>
      <div className="relative z-0 w-full overflow-hidden">
        <div className="w-full h-svh left-0 bottom-0 absolute z-[-1] bg-linear-to-t from-black/80 to-transparent "></div>
        <div className="w-full h-svh fixed z-[-2] inset-0 opacity-80">
          <Image
            src={"/images/auth-background.jpg"}
            alt="FluxCRM"
            fill
            className=" object-cover scale-[1.3] object-top-right"
          />
        </div>
        {children}
      </div>
    </AuthLayoutProvider>
  );
};

export default AuthLayout;
