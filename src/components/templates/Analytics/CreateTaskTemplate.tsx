"use client";

import { useState } from "react";
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

const CreateTaskTemplate: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<TaskFormData>({
    taskName: "",
    project: "",
    assigneeName: "",
    dueDate: "",
    status: "To Do",
  });

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

    // Simulate API call with dummy data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Task created:", formData);

    // Navigate back to task list
    router.push("/analytics/task");
  };

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
            Add New Task
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
                  Creating...
                </>
              ) : (
                "Create Task"
              )}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CreateTaskTemplate;
