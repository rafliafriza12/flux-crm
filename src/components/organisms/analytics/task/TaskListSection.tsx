"use client";

import { useState } from "react";
import { Icon, Avatar, Badge, Button } from "@/components/atoms";
import {
  BodyMediumMedium,
  BodyMediumRegular,
} from "@/components/atoms/Text/Typography";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  taskName: string;
  project: string;
  assignee: {
    name: string;
    avatar?: string;
  };
  dueDate: string;
  status: "Done" | "In Progress" | "To Do";
}

const TaskListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Customer" | "Task">(
    "Task"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [contextMenuTask, setContextMenuTask] = useState<string | null>(null);

  // Mock data based on the image
  const tasks: Task[] = [
    {
      id: "#1201290",
      taskName: "Create UI E-Commerce",
      project: "Shopnest",
      assignee: { name: "Fajar Firmansyah", avatar: "/avatar/1.png" },
      dueDate: "12 May, 2024",
      status: "Done",
    },
    {
      id: "#1201291",
      taskName: "Slicing Landing Page",
      project: "LP",
      assignee: { name: "Aulia" },
      dueDate: "02 June, 2024",
      status: "Done",
    },
    {
      id: "#1201293",
      taskName: "Create About Page for Comp...",
      project: "Company Profile",
      assignee: { name: "Irwansyah" },
      dueDate: "09 May, 2024",
      status: "In Progress",
    },
    {
      id: "#1201292",
      taskName: "Create UI Stock Mobile",
      project: "Stock App",
      assignee: { name: "Sir Robert" },
      dueDate: "17 December, 2024",
      status: "Done",
    },
    {
      id: "#1201295",
      taskName: "Usability Testing POS Mobile Apps",
      project: "Mobile App",
      assignee: { name: "Paquito" },
      dueDate: "12 May, 2024",
      status: "In Progress",
    },
    {
      id: "#1201294",
      taskName: "Design Home UI Resto",
      project: "LP",
      assignee: { name: "Miya" },
      dueDate: "12 May, 2024",
      status: "In Progress",
    },
    {
      id: "#1201296",
      taskName: "Create User Interface Design...",
      project: "Dashboard",
      assignee: { name: "Charles" },
      dueDate: "12 May, 2024",
      status: "Done",
    },
    {
      id: "#1201254",
      taskName: "Create UI E-Commerce",
      project: "Shopnest",
      assignee: { name: "Christoper" },
      dueDate: "17 December, 2024",
      status: "Done",
    },
    {
      id: "#1201214",
      taskName: "Slicing Landing Page",
      project: "LP",
      assignee: { name: "Diyana" },
      dueDate: "12 May, 2024",
      status: "Done",
    },
    {
      id: "#1201291",
      taskName: "Create UI Stock Mobile",
      project: "+628912097238",
      assignee: { name: "Nurul Ilmi" },
      dueDate: "12 May, 2024",
      status: "In Progress",
    },
    {
      id: "#1201290",
      taskName: "Create About Page for Comp...",
      project: "Company Profile",
      assignee: { name: "Boy Dicky" },
      dueDate: "17 December, 1990",
      status: "Done",
    },
    {
      id: "#1201256",
      taskName: "Design Home UI Resto",
      project: "Company Profile",
      assignee: { name: "Siti Amalia" },
      dueDate: "12 May, 2024",
      status: "Done",
    },
    {
      id: "#1201245",
      taskName: "Create UI Stock Mobile",
      project: "Stock App",
      assignee: { name: "Claw Kun" },
      dueDate: "12 May, 2024",
      status: "To Do",
    },
    {
      id: "#1201280",
      taskName: "Create UI E-Commerce",
      project: "Shopnest",
      assignee: { name: "Kim Nu Soek" },
      dueDate: "12 May, 2024",
      status: "In Progress",
    },
  ];

  const filteredTasks = tasks.filter(
    (task) =>
      task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  const getStatusStyles = (status: Task["status"]) => {
    switch (status) {
      case "Done":
        return "bg-primary text-black";
      case "In Progress":
        return "bg-[#FBBF24] text-black";
      case "To Do":
        return "bg-[#60A5FA] text-black";
      default:
        return "bg-gray-200 text-black";
    }
  };

  const isDateOverdue = (dateString: string) => {
    // Dates like "12 May, 2024" in red in the image
    const dates = ["12 May, 2024", "02 June, 2024"];
    return dates.includes(dateString);
  };

  return (
    <div className="w-full space-y-6">    
      {/* Main Table Section */}
      <div className="w-full bg-background dark:bg-background-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-2xl py-6">
        {/* Header */}
        <div className="flex flex-col ipad-vertical:flex-row ipad-vertical:items-center ipad-vertical:justify-between gap-4 mb-6 px-6">
          <div className="flex items-center gap-2">
            <BodyMediumMedium className="dark:text-white text-black text-2xl!">
              List Task
            </BodyMediumMedium>
            <span className="text-neutral-text text-sm leading-[160%]">
              1200
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full ipad-vertical:w-[300px]">
              <Icon
                name="search-line"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text"
                size="lg"
              />
              <input
                type="text"
                placeholder="Search task"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none"
              />
            </div>

            <Button variant="primary" className="rounded-full px-4 py-3">
              <Icon name="share-line" className="mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-4 py-3 bg-secound dark:bg-secound text-white"
            >
              <Icon name="settings-3-line" className="mr-2" />
              Setting
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-greyscale-50-light dark:bg-greyscale-50-dark">
                <th className="text-left py-4 px-4">
                  <BodyMediumRegular className="text-black dark:text-white font-medium">
                    Task ID
                  </BodyMediumRegular>
                </th>
                <th className="text-left py-4 px-4">
                  <BodyMediumRegular className="text-black dark:text-white font-medium">
                    Task Name
                  </BodyMediumRegular>
                </th>
                <th className="text-left py-4 px-4">
                  <BodyMediumRegular className="text-black dark:text-white font-medium">
                    Project
                  </BodyMediumRegular>
                </th>
                <th className="text-left py-4 px-4">
                  <BodyMediumRegular className="text-black dark:text-white font-medium">
                    Assignee
                  </BodyMediumRegular>
                </th>
                <th className="text-left py-4 px-4">
                  <BodyMediumRegular className="text-black dark:text-white font-medium">
                    Due Date
                  </BodyMediumRegular>
                </th>
                <th className="text-left py-4 px-4">
                  <BodyMediumRegular className="text-black dark:text-white font-medium">
                    Status
                  </BodyMediumRegular>
                </th>
                <th className="py-4 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {currentTasks.map((task, index) => (
                <tr
                  key={`${task.id}-${index}`}
                  className={`${
                    index % 2 === 0
                      ? "bg-white dark:bg-black"
                      : "bg-greyscale-250-light dark:bg-greyscale-25-dark"
                  } dark:text-white text-black relative`}
                >
                  <td className="py-4 px-4">
                    <BodyMediumRegular>{task.id}</BodyMediumRegular>
                  </td>
                  <td className="py-4 px-4">
                    <BodyMediumRegular>{task.taskName}</BodyMediumRegular>
                  </td>
                  <td className="py-4 px-4">
                    <BodyMediumRegular>{task.project}</BodyMediumRegular>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={task.assignee.avatar}
                        name={task.assignee.name}
                        size="sm"
                      />
                      <BodyMediumRegular>
                        {task.assignee.name}
                      </BodyMediumRegular>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <BodyMediumRegular
                      className={cn(
                        isDateOverdue(task.dueDate) && "text-[#EF4444]"
                      )}
                    >
                      {task.dueDate}
                    </BodyMediumRegular>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      className={cn(
                        "px-4 py-1.5 rounded-full text-sm font-medium",
                        getStatusStyles(task.status)
                      )}
                    >
                      {task.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="relative">
                      <button
                        className="text-neutral-text hover:text-black dark:hover:text-white duration-200"
                        onClick={() =>
                          setContextMenuTask(
                            contextMenuTask === task.id ? null : task.id
                          )
                        }
                      >
                        <Icon name="more-2-fill" size="lg" />
                      </button>

                      {/* Context Menu */}
                      {contextMenuTask === task.id && (
                        <div className="absolute right-0 top-full mt-2 bg-greyscale-50-dark border border-greyscale-100-dark rounded-lg shadow-lg z-10 min-w-[120px] overflow-hidden">
                          <button className="w-full px-4 py-2.5 text-left text-white hover:bg-greyscale-25-dark flex items-center gap-2 transition-colors">
                            <Icon name="edit-line" size="sm" />
                            <span className="text-sm">Edit</span>
                          </button>
                          <button className="w-full px-4 py-2.5 text-left text-[#EF4444] hover:bg-greyscale-25-dark flex items-center gap-2 transition-colors">
                            <Icon name="delete-bin-line" size="sm" />
                            <span className="text-sm">Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-6">
          <div className="text-neutral-text text-sm">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                name="arrow-left-s-line"
                className="text-neutral-text"
                size="lg"
              />
            </button>

            {[...Array(Math.min(3, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={cn(
                    "min-w-[40px] h-[40px] rounded-lg font-medium text-sm transition-colors",
                    currentPage === pageNum
                      ? "bg-primary text-black"
                      : "text-neutral-text hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark"
                  )}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                name="arrow-right-s-line"
                className="text-neutral-text"
                size="lg"
              />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-text text-sm">Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white border border-greyscale-100-light dark:border-greyscale-100-dark rounded-lg px-3 py-2 text-sm focus:outline-none"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListSection;
