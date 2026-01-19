"use client";

import { useState } from "react";
import { Icon, Avatar, Badge } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks";

interface Attachment {
  id: string;
  name: string;
  size: string;
  preview?: string;
}

interface TaskDetailData {
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

interface TaskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskDetailData | null;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  isOpen,
  onClose,
  task,
  onEdit,
  onDelete: _onDelete, // eslint-disable-line @typescript-eslint/no-unused-vars
  onShare,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  if (!isOpen || !task) return null;

  const getStatusStyles = (status: TaskDetailData["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-success dark:bg-success text-white dark:text-white";
      case "In Progress":
        return "bg-[#FBBF24] text-black";
      case "To do":
        return "bg-[#60A5FA] text-black";
      default:
        return "bg-gray-200 text-black";
    }
  };

  const getPriorityStyles = (priority: TaskDetailData["priority"]) => {
    switch (priority) {
      case "High":
        return "bg-error/10 text-error border border-error";
      case "Medium":
        return "bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white border border-greyscale-100-light dark:border-greyscale-100-dark";
      case "Low":
        return "bg-primary/10 text-primary border border-primary";
      default:
        return "bg-gray-200 text-black";
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
          "relative bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden",
          isFullscreen
            ? "w-full h-full rounded-none"
            : "w-full max-w-250 max-h-[90vh]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-greyscale-100-light dark:border-greyscale-100-dark">
          <div className="flex items-center gap-2 text-sm text-neutral-text">
            {task.breadcrumb && (
              <>
                <span>{task.breadcrumb.folder}</span>
                <span>/</span>
                <span>{task.breadcrumb.group}</span>
              </>
            )}
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
              onClick={onEdit}
              className="text-neutral-text hover:text-black dark:hover:text-white transition-colors"
            >
              <Icon name="edit-line" size="lg" />
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Task Title */}
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            {task.taskName}
          </h2>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
            {/* Status */}
            <div className="flex items-center gap-3">
              <Icon name="settings-3-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Status</span>
              <Badge className={cn("px-3 py-1 rounded-sm text-sm font-medium flex items-center gap-1", getStatusStyles(task.status))}>
                {task.status}
                <Icon name="arrow-down-s-line" size="sm" />
              </Badge>
            </div>

            {/* Assignees */}
            <div className="flex items-center gap-3">
              <Icon name="user-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Assignees</span>
              <div className="flex items-center gap-2">
                <Avatar
                  src={task.assignee.avatar}
                  name={task.assignee.name}
                  size="sm"
                />
                <span className="text-black dark:text-white text-sm">{task.assignee.name}</span>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center gap-3">
              <Icon name="calendar-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Due Date</span>
              <span className="text-black dark:text-white text-sm">{task.dueDate}</span>
            </div>

            {/* Project */}
            <div className="flex items-center gap-3">
              <Icon name="folder-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Project</span>
              <span className="text-black dark:text-white text-sm">{task.project}</span>
            </div>

            {/* Time Estimate */}
            <div className="flex items-center gap-3">
              <Icon name="time-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Time Estimate</span>
              <span className="text-black dark:text-white text-sm">{task.timeEstimate}</span>
            </div>

            {/* Priority */}
            <div className="flex items-center gap-3">
              <Icon name="flag-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-24">Priority</span>
              <Badge className={cn("px-3 py-1 rounded-full text-sm font-medium", getPriorityStyles(task.priority))}>
                {task.priority}
              </Badge>
            </div>
          </div>

          {/* Detail Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Detail</h3>
            <div className="text-neutral-text text-sm leading-relaxed whitespace-pre-wrap">
              {task.detail}
            </div>
          </div>

          {/* Attachments Section */}
          {task.attachments.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Attachments</h3>
              <div className="flex flex-wrap gap-4">
                {task.attachments.map((attachment) => (
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
                    <button className="text-neutral-text hover:text-error transition-colors">
                      <Icon name="delete-bin-line" size="lg" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailModal;
