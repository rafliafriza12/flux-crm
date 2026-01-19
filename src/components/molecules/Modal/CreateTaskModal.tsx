"use client";

import { useState } from "react";
import { Icon } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type Status = "To do" | "In Progress" | "Completed" | "";
type Priority = "Low" | "Medium" | "High" | "";

interface TaskFormData {
  taskName: string;
  status: Status;
  dueDate: string;
  timeEstimate: string;
  assignee: string;
  project: string;
  priority: Priority;
  description: string;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<TaskFormData>({
    taskName: "",
    status: "",
    dueDate: "",
    timeEstimate: "",
    assignee: "",
    project: "",
    priority: "",
    description: "",
  });

  // Dropdown states
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!formData.taskName) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Task created:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      taskName: "",
      status: "",
      dueDate: "",
      timeEstimate: "",
      assignee: "",
      project: "",
      priority: "",
      description: "",
    });
    
    onSuccess();
  };

  const getStatusStyles = (status: Status) => {
    switch (status) {
      case "Completed":
        return "bg-primary text-black";
      case "In Progress":
        return "bg-[#FBBF24] text-black";
      case "To do":
        return "bg-[#60A5FA] text-black";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1B1B1B]/50 backdrop-blur-[10px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden flex flex-col",
          isFullscreen
            ? "w-full h-full rounded-none"
            : "w-full max-w-250 max-h-[90vh]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-greyscale-100-light dark:border-greyscale-100-dark">
          <div className="flex items-center gap-2">
            <Icon name="add-box-line" className="text-primary" size="lg" />
            <span className="text-lg font-semibold text-black dark:text-white">
              Create New Task
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-neutral-text hover:text-black dark:hover:text-white transition-colors"
            >
              <Icon name={isFullscreen ? "fullscreen-exit-line" : "fullscreen-line"} size="lg" />
            </button>
            <button
              onClick={onClose}
              className="text-neutral-text hover:text-black dark:hover:text-white transition-colors"
            >
              <Icon name="close-line" size="lg" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Task Name */}
          <input
            type="text"
            value={formData.taskName}
            onChange={(e) => setFormData({ ...formData, taskName: e.target.value })}
            placeholder="Task Name"
            className="text-2xl font-semibold text-black dark:text-white bg-transparent border-none outline-none w-full mb-6 placeholder:text-greyscale-100-light dark:placeholder:text-greyscale-100-dark"
          />

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
            {/* Status */}
            <div className="flex items-center gap-3 relative">
              <Icon name="settings-3-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Status</span>
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  formData.status ? getStatusStyles(formData.status) : "text-neutral-text"
                )}
              >
                {formData.status || "Empty"}
              </button>
              {showStatusDropdown && (
                <div className="absolute left-28 top-full mt-1 bg-white dark:bg-greyscale-50-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-lg shadow-lg z-10 overflow-hidden">
                  {(["To do", "In Progress", "Completed"] as Status[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setFormData({ ...formData, status });
                        setShowStatusDropdown(false);
                      }}
                      className="w-full px-4 py-2.5 text-left text-black dark:text-white hover:bg-greyscale-50-light dark:hover:bg-greyscale-25-dark flex items-center gap-2 transition-colors"
                    >
                      <Icon
                        name={status === "To do" ? "list-check" : status === "In Progress" ? "settings-3-line" : "check-line"}
                        size="sm"
                      />
                      <span className="text-sm">{status}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Assignees */}
            <div className="flex items-center gap-3">
              <Icon name="user-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Assignees</span>
              <input
                type="text"
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                placeholder="Empty"
                className="text-sm text-black dark:text-white bg-transparent border-none outline-none placeholder:text-neutral-text"
              />
            </div>

            {/* Due Date */}
            <div className="flex items-center gap-3">
              <Icon name="calendar-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Due Date</span>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="text-sm text-black dark:text-white bg-transparent border-none outline-none"
              />
            </div>

            {/* Project */}
            <div className="flex items-center gap-3">
              <Icon name="folder-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Project</span>
              <input
                type="text"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                placeholder="Empty"
                className="text-sm text-black dark:text-white bg-transparent border-none outline-none placeholder:text-neutral-text"
              />
            </div>

            {/* Time Estimate */}
            <div className="flex items-center gap-3">
              <Icon name="time-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Time Estimate</span>
              <input
                type="text"
                value={formData.timeEstimate}
                onChange={(e) => setFormData({ ...formData, timeEstimate: e.target.value })}
                placeholder="Empty"
                className="text-sm text-black dark:text-white bg-transparent border-none outline-none placeholder:text-neutral-text"
              />
            </div>

            {/* Priority */}
            <div className="flex items-center gap-3 relative">
              <Icon name="flag-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Priority</span>
              <button
                onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
                className="text-sm text-neutral-text"
              >
                {formData.priority || "Empty"}
              </button>
              {showPriorityDropdown && (
                <div className="absolute left-28 top-full mt-1 bg-white dark:bg-greyscale-50-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-lg shadow-lg z-10 overflow-hidden">
                  {(["Low", "Medium", "High"] as Priority[]).map((priority) => (
                    <button
                      key={priority}
                      onClick={() => {
                        setFormData({ ...formData, priority });
                        setShowPriorityDropdown(false);
                      }}
                      className="w-full px-4 py-2.5 text-left text-black dark:text-white hover:bg-greyscale-50-light dark:hover:bg-greyscale-25-dark flex items-center gap-2 transition-colors"
                    >
                      <span className="text-sm">{priority}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-black dark:text-white mb-3">Add Description</h3>
            <textarea
              value={formData.description}
              onChange={(e) => {
                if (e.target.value.length <= 200) {
                  setFormData({ ...formData, description: e.target.value });
                }
              }}
              placeholder="Placeholder"
              rows={4}
              className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-xl px-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary resize-none"
            />
            <p className="text-xs text-neutral-text mt-1">
              {formData.description.length}/200
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-greyscale-100-light dark:border-greyscale-100-dark">
          <button className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
            <Icon name="attachment-2" className="text-primary" size="lg" />
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.taskName}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors disabled:opacity-50"
          >
            <Icon name="edit-line" size="sm" className="text-black" />
            <span className="text-sm font-medium">
              {isSubmitting ? "Creating..." : "Create Task"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
