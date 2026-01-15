import { cn } from "@/lib";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        " p-3 ipad-vertical:p-5 lg:p-10 font-parkinsans",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
