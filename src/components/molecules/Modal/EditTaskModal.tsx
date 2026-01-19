"use client";

import { useState, useEffect } from "react";
import { Icon, Avatar, Badge } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks";

interface Attachment {
  id: string;
  name: string;
  size: string;
  preview?: string;
}

interface TaskData {
  id: string;
  taskName: string;
  createdAt: string;
  status: "To do" | "In Progress" | "Completed";
  dueDate: string;
  timeEstimate: string;
  assignee: {
    name: string;
    avatar?: string;
  };
  project: string;
  priority: "Low" | "Medium" | "High";
  detail: string;
  attachments: Attachment[];
  breadcrumb?: {
    folder: string;
    group: string;
  };
}

interface EditTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskData | null;
  onSuccess: () => void;
  onShare: () => void;
  onDelete: () => void;
}

type Status = "To do" | "In Progress" | "Completed";
type Priority = "Low" | "Medium" | "High";

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  onClose,
  task,
  onSuccess,
  onShare,
  onDelete,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form data from task prop
  const initialFormData = task ? {
    taskName: task.taskName,
    status: task.status,
    dueDate: task.dueDate,
    timeEstimate: task.timeEstimate,
    assignee: task.assignee,
    project: task.project,
    priority: task.priority,
    detail: task.detail,
    attachments: task.attachments,
  } : {
    taskName: "",
    status: "To do" as Status,
    dueDate: "",
    timeEstimate: "",
    assignee: { name: "", avatar: "" },
    project: "",
    priority: "Medium" as Priority,
    detail: "",
    attachments: [],
  };

  const [formData, setFormData] = useState<Omit<TaskData, "id" | "createdAt" | "breadcrumb">>(initialFormData);

  // Dropdown states
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);

  // Reset form when modal opens with new task
  useEffect(() => {
    if (isOpen && task) {
      setFormData({
        taskName: task.taskName,
        status: task.status,
        dueDate: task.dueDate,
        timeEstimate: task.timeEstimate,
        assignee: task.assignee,
        project: task.project,
        priority: task.priority,
        detail: task.detail,
        attachments: task.attachments,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, task?.id]);
  
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  if (!isOpen || !task) return null;

  const handleSubmit = async () => {
    if (!formData.taskName) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Task updated:", { id: task.id, ...formData });
    setIsSubmitting(false);
    onSuccess();
  };

  const getStatusStyles = (status: Status) => {
    switch (status) {
      case "Completed":
        return "bg-success text-white";
      case "In Progress":
        return "bg-[#FBBF24] text-white";
      case "To do":
        return "bg-[#60A5FA] text-white";
      default:
        return "bg-gray-200 text-white";
    }
  };

  const removeAttachment = (attachmentId: string) => {
    setFormData({
      ...formData,
      attachments: formData.attachments.filter(a => a.id !== attachmentId),
    });
  };

  const removeProject = () => {
    setFormData({ ...formData, project: "" });
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
            <Icon name="edit-line" className="text-primary" size="lg" />
            <span className="text-lg font-semibold text-black dark:text-white">
              Edit Task
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm text-neutral-text">
              <Icon name="time-line" size="sm" />
              <span>Created on {task.createdAt}</span>
            </div>
            <button
              onClick={onShare}
              className="px-4 py-2 rounded-full border border-greyscale-100-light dark:border-greyscale-100-dark text-black dark:text-white text-sm font-medium hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark transition-colors"
            >
              Share
            </button>
            <button className="text-neutral-text hover:text-black dark:hover:text-white transition-colors">
              <Icon name="star-line" size="lg" />
            </button>
            <button
              onClick={onDelete}
              className="text-neutral-text hover:text-error transition-colors"
            >
              <Icon name="delete-bin-line" size="lg" />
            </button>
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
                  "px-3 py-1 rounded-sm text-sm font-medium flex items-center gap-1 ",
                  getStatusStyles(formData.status)
                )}
              >
                {formData.status}
                <Icon name="arrow-down-s-line" className="text-white" size="sm" />
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
              <div className="flex items-center gap-2">
                <Avatar
                  src={formData.assignee.avatar}
                  name={formData.assignee.name}
                  size="sm"
                />
                <span className="text-black dark:text-white text-sm">{formData.assignee.name}</span>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center gap-3">
              <Icon name="calendar-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Due Date</span>
              <input
                type="text"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="text-sm text-black dark:text-white bg-transparent border-none outline-none"
              />
            </div>

            {/* Project */}
            <div className="flex items-center gap-3">
              <Icon name="folder-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Project</span>
              {formData.project ? (
                <Badge className="px-3 py-1 rounded-sm text-sm font-medium bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white flex items-center gap-2">
                  {formData.project}
                  <button onClick={removeProject} className="hover:text-error">
                    <Icon name="close-line" size="sm" />
                  </button>
                </Badge>
              ) : (
                <input
                  type="text"
                  value=""
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder="Empty"
                  className="text-sm text-black dark:text-white bg-transparent border-none outline-none placeholder:text-neutral-text"
                />
              )}
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
                className="px-3 py-1 rounded-sm text-sm font-medium bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white border border-greyscale-100-light dark:border-greyscale-100-dark"
              >
                {formData.priority}
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

          {/* Detail Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Detail</h3>
            <textarea
              value={formData.detail}
              onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
              placeholder="Add task detail..."
              rows={6}
              className="w-full bg-transparent text-neutral-text text-sm leading-relaxed border-none outline-none resize-none"
            />
          </div>

          {/* Attachments Section */}
          {formData.attachments.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Attachments</h3>
              <div className="flex flex-wrap gap-4">
                {formData.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-greyscale-100-light dark:border-greyscale-100-dark bg-greyscale-50-light dark:bg-greyscale-50-dark min-w-50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-greyscale-100-light dark:bg-greyscale-100-dark flex items-center justify-center">
                      <Icon name="image-line" className="text-neutral-text" size="lg" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-black dark:text-white font-medium truncate">
                        {attachment.name}
                      </p>
                      <p className="text-xs text-neutral-text">{attachment.size}</p>
                    </div>
                    <button
                      onClick={() => removeAttachment(attachment.id)}
                      className="text-neutral-text hover:text-error transition-colors"
                    >
                      <Icon name="delete-bin-line" size="lg" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-greyscale-100-light dark:border-greyscale-100-dark">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.taskName}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors disabled:opacity-50"
          >
            <Icon name="edit-line" size="sm" className="text-black" />
            <span className="text-sm font-medium">
              {isSubmitting ? "Saving..." : "Save Task"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
