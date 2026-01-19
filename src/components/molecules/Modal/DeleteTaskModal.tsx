"use client";

import { useState } from "react";
import { Icon } from "@/components/atoms";
import { BodyMediumMedium } from "@/components/atoms/Text/Typography";
import { useScrollLock } from "@/hooks";

interface DeleteTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName: string;
  onConfirm: () => Promise<void>;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  isOpen,
  onClose,
  taskName,
  onConfirm,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const handleDelete = async () => {
    setIsDeleting(true);
    await onConfirm();
    setIsDeleting(false);
  };

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
        <div className="w-25 h-25 flex justify-center items-center rounded-full bg-error">
          <Icon name="delete-bin-fill" className="text-white text-[42px]" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Delete Task ?
          </h2>
          <p className="text-neutral-text">
            Are you sure want to delete task ?
          </p>
          <p className="text-black dark:text-white font-medium mt-1">
            {taskName}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 w-full">
          <button
            onClick={onClose}
            type="button"
            className="flex-1 px-6 py-3 rounded-full border border-greyscale-100-light dark:border-greyscale-100-dark text-black dark:text-white hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark transition-colors"
          >
            <BodyMediumMedium>Cancel</BodyMediumMedium>
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            type="button"
            className="flex-1 px-6 py-3 rounded-full bg-alert-error-25 text-error hover:opacity-75 duration-200 disabled:opacity-50"
          >
            <BodyMediumMedium>
              {isDeleting ? "Deleting..." : "Yes, Delete"}
            </BodyMediumMedium>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
