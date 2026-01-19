"use client";

import { BodyMediumMedium, Icon } from "@/components/atoms";
import { DropdownButton } from "@/components/atoms/DropdownButton/DropdownButton";

interface TaskHeadingButtonListProps {
  onAddNewTask?: () => void;
}

const TaskHeadingButtonList: React.FC<TaskHeadingButtonListProps> = ({ onAddNewTask }) => {
  return (
    <div className="flex items-center gap-1 ipad-vertical:gap-3 h-10.5 ipad-vertical:h-14">
      <DropdownButton defaultOption="Monthly" options={["Daily", "Monthly"]} />
      <div className="h-full w-10.5 ipad-vertical:w-auto ipad-vertical:px-6 rounded-full flex items-center justify-center gap-2.5 bg-foreground dark:bg-foreground-dark cursor-pointer hover:opacity-80 transition-opacity">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <BodyMediumMedium className="hidden ipad-vertical:block">
          Export
        </BodyMediumMedium>
      </div>
      <button
        onClick={onAddNewTask}
        className="h-full ipad-vertical:p-1 ipad-vertical:pr-4 rounded-full flex items-center justify-center gap-2.5 bg-[#204E4D] hover:bg-[#2a6665] transition-colors"
      >
        <div className="h-full w-10.5 ipad-vertical:w-12 ipad-vertical:h-12 rounded-full bg-primary flex justify-center items-center">
          <Icon name="add-line" className="text-black" size="lg" />
        </div>
        <BodyMediumMedium className="text-white hidden ipad-vertical:block">
          Add New Task
        </BodyMediumMedium>
      </button>
    </div>
  );
};

export default TaskHeadingButtonList;
