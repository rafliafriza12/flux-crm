"use client";

import { useState, useEffect } from "react";
import Container from "@/components/atoms/container/Container";
import { Heading1, Icon, Button } from "@/components/atoms";
import { BodyMediumMedium } from "@/components/atoms/Text/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TaskFormData {
  taskName: string;
  project: string;
  assigneeName: string;
  dueDate: string;
  status: "Done" | "In Progress" | "To Do";
}

// Dummy task data for editing
const dummyTasks: Record<string, TaskFormData & { id: string }> = {
  "1201290": {
    id: "#1201290",
    taskName: "Create UI E-Commerce",
    project: "Shopnest",
    assigneeName: "Fajar Firmansyah",
    dueDate: "2024-05-12",
    status: "Done",
  },
  "1201291": {
    id: "#1201291",
    taskName: "Slicing Landing Page",
    project: "LP",
    assigneeName: "Aulia",
    dueDate: "2024-06-02",
    status: "Done",
  },
  "1201293": {
    id: "#1201293",
    taskName: "Create About Page for Company Profile",
    project: "Company Profile",
    assigneeName: "Irwansyah",
    dueDate: "2024-05-09",
    status: "In Progress",
  },
};

interface EditTaskTemplateProps {
  taskId: string;
}

const EditTaskTemplate: React.FC<EditTaskTemplateProps> = ({ taskId }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<TaskFormData>({
    taskName: "",
    project: "",
    assigneeName: "",
    dueDate: "",
    status: "To Do",
  });

  useEffect(() => {
    // Simulate fetching task data
    const fetchTask = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const task = dummyTasks[taskId];
      if (task) {
        setFormData({
          taskName: task.taskName,
          project: task.project,
          assigneeName: task.assigneeName,
          dueDate: task.dueDate,
          status: task.status,
        });
      }
      setIsLoading(false);
    };

    fetchTask();
  }, [taskId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Task updated:", { id: taskId, ...formData });

    // Navigate back to task list
    router.push("/analytics/task");
  };

  if (isLoading) {
    return (
      <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
        <div className="w-full flex items-center justify-center py-20">
          <Icon name="loader-4-line" className="animate-spin text-primary" size="xl" />
        </div>
      </Container>
    );
  }

  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/analytics/task"
            className="w-12 h-12 rounded-full bg-greyscale-50-light dark:bg-greyscale-50-dark flex items-center justify-center hover:bg-greyscale-100-light dark:hover:bg-greyscale-100-dark transition-colors"
          >
            <Icon name="arrow-left-line" className="text-black dark:text-white" size="lg" />
          </Link>
          <Heading1 className="text-[22px]! ipad-horizontal:text-5xl!">
            Edit Task
          </Heading1>
        </div>
      </div>

      {/* Form */}
      <div className="w-full bg-background dark:bg-background-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Task Name */}
            <div className="space-y-2">
              <BodyMediumMedium className="text-black dark:text-white">
                Task Name <span className="text-red-500">*</span>
              </BodyMediumMedium>
              <input
                type="text"
                name="taskName"
                value={formData.taskName}
                onChange={handleInputChange}
                placeholder="Enter task name"
                required
                className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white placeholder:text-neutral-text rounded-xl px-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
              />
            </div>

            {/* Project */}
            <div className="space-y-2">
              <BodyMediumMedium className="text-black dark:text-white">
                Project <span className="text-red-500">*</span>
              </BodyMediumMedium>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="Enter project name"
                required
                className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white placeholder:text-neutral-text rounded-xl px-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
              />
            </div>

            {/* Assignee Name */}
            <div className="space-y-2">
              <BodyMediumMedium className="text-black dark:text-white">
                Assignee <span className="text-red-500">*</span>
              </BodyMediumMedium>
              <input
                type="text"
                name="assigneeName"
                value={formData.assigneeName}
                onChange={handleInputChange}
                placeholder="Enter assignee name"
                required
                className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white placeholder:text-neutral-text rounded-xl px-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
              />
            </div>

            {/* Due Date */}
            <div className="space-y-2">
              <BodyMediumMedium className="text-black dark:text-white">
                Due Date <span className="text-red-500">*</span>
              </BodyMediumMedium>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                required
                className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white placeholder:text-neutral-text rounded-xl px-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <BodyMediumMedium className="text-black dark:text-white">
                Status <span className="text-red-500">*</span>
              </BodyMediumMedium>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white rounded-xl px-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Link href="/analytics/task">
              <Button
                type="button"
                variant="outline"
                className="px-6 py-3 rounded-full"
              >
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-full"
            >
              {isSubmitting ? (
                <>
                  <Icon name="loader-4-line" className="animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditTaskTemplate;
