import { BodyMediumMedium, Button, Heading2, Icon } from "@/components/atoms";
import Container from "@/components/atoms/container/Container";
interface IModalProps {
  type: "success" | "failed" | "warning" | "delete";
  title: string;
  subtitle: string;
  buttonText: string;
  close: () => void;
  action: () => void;
  isOpen: boolean;
}
const Modal: React.FC<IModalProps> = ({
  type,
  action,
  buttonText,
  close,
  subtitle,
  title,
  isOpen,
}) => {
  const getIcon = (): string => {
    switch (type) {
      case "success":
        return "check-line";
      case "delete":
        return "delete-bin-line";
      case "failed":
        return "close-line";
      case "warning":
        return "error-warning-line";

      default:
        return "check-line";
    }
  };

  const getBackgroundIcon = (): string => {
    switch (type) {
      case "success":
        return "bg-[#40C4AA]";
      case "delete":
        return "bg-[#DF1C41]";
      case "failed":
        return "bg-[#DF1C41]";
      case "warning":
        return "bg-[#FAEDCC]";

      default:
        return "bg-[#40C4AA]";
    }
  };
  return (
    <Container
      className={`w-full h-svh bg-[#1B1B1B]/50 backdrop-blur-[10px] fixed z-1000 inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className=" w-full relative z-0 ipad-vertical:max-w-125 flex flex-col p-6 items-center justify-center gap-5 rounded-[20px] bg-white dark:bg-black ">
        <div
          onClick={close}
          className="absolute z-1 top-6 right-6 cursor-pointer"
        >
          <Icon
            name="close-line"
            size="xl"
            className="text-black dark:text-white"
          />
        </div>
        <div
          className={`w-25 h-25 flex justify-center items-center rounded-full ${getBackgroundIcon()}`}
        >
          <Icon name={getIcon()} className="text-white text-[42px]" />
        </div>
        <Heading2 className="font-semibold! text-center text-black dark:text-white">
          {title}
        </Heading2>
        <BodyMediumMedium className="text-center text-placeholder dark:text-placeholder-dark">
          {subtitle}
        </BodyMediumMedium>
        <Button
          onClick={action}
          type="button"
          variant="primary"
          className=" w-full  rounded-full hover:bg-primary/80 duration-300 "
        >
          <BodyMediumMedium>{buttonText}</BodyMediumMedium>
        </Button>
      </div>
    </Container>
  );
};

export default Modal;
