"use client";

import { Icon, Button } from "@/components/atoms";
import { BodyMediumMedium, Heading2 } from "@/components/atoms/Text/Typography";
import { useScrollLock } from "@/hooks";

interface TaskSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "create" | "update";
}

const TaskSuccessModal: React.FC<TaskSuccessModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  // Lock scroll when modal is open
  useScrollLock(isOpen);
  
  if (!isOpen) return null;

  const title = type === "create" ? "Task added successfully" : "Task updated successfully";
  const description = type === "create" 
    ? "Task has been successfully added, please check again" 
    : "Task has been successfully updated, please check again";

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1B1B1B]/50 backdrop-blur-[10px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-100 flex flex-col p-6 items-center justify-center gap-5 rounded-2xl bg-white dark:bg-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black dark:text-white hover:opacity-70 transition-opacity"
        >
          <Icon name="close-line" size="xl" />
        </button>

        {/* Icon */}
        <div className="w-25 h-25 flex justify-center items-center rounded-full bg-success">
          <Icon name="check-fill" className="text-white text-[42px]" />
        </div>

        {/* Content */}
        <Heading2 className="font-semibold! text-center text-black dark:text-white">
          {title}
        </Heading2>
        <BodyMediumMedium className="text-center text-placeholder dark:text-placeholder-dark">
          {description}
        </BodyMediumMedium>

        {/* Button */}
        <Button
          onClick={onClose}
          type="button"
          variant="primary"
          className="w-full rounded-full hover:bg-primary/80 duration-300"
        >
          <BodyMediumMedium>Check Now</BodyMediumMedium>
        </Button>
      </div>
    </div>
  );
};

export default TaskSuccessModal;
