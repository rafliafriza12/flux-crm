import { cn } from "@/lib";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-384 mx-auto p-5 ipad-vertical:px-7.5 ipad-vertical:py-7.5 lg:px-20 lg:py-20 font-parkinsans",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
