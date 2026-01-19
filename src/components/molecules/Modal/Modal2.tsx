import Container from "@/components/atoms/container/Container";
interface IModalProps {
  close: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}
const Modal2: React.FC<IModalProps> = ({
  isOpen,
  children
}) => {
  return (
    <Container
      className={`w-full h-svh bg-[#1B1B1B]/50 backdrop-blur-[10px] fixed z-1000 inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className=" w-full relative z-0 ipad-vertical:max-w-125 flex flex-col p-6 items-center justify-center gap-5 rounded-[20px] bg-white dark:bg-black ">
        {children}
      </div>
    </Container>
  );
};

export default Modal2;
