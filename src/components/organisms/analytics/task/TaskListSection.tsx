"use client";

import { useState } from "react";
import { Icon, Avatar, Badge, Button } from "@/components/atoms";
import {
  BodyMediumMedium,
  BodyMediumRegular,
} from "@/components/atoms/Text/Typography";
import { cn } from "@/lib/utils";
import TaskDetailModal from "@/components/molecules/Modal/TaskDetailModal";
import CreateTaskModal from "@/components/molecules/Modal/CreateTaskModal";
import EditTaskModal from "@/components/molecules/Modal/EditTaskModal";
import DeleteTaskModal from "@/components/molecules/Modal/DeleteTaskModal";
import ShareModal from "@/components/molecules/Modal/ShareModal";
import TaskSuccessModal from "@/components/molecules/Modal/TaskSuccessModal";

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

interface TaskListSectionProps {
  openCreateModal?: boolean;
  onCreateModalClose?: () => void;
}

const TaskListSection: React.FC<TaskListSectionProps> = ({ 
  openCreateModal = false,
  onCreateModalClose 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [contextMenuTask, setContextMenuTask] = useState<string | null>(null);

  // Modal states
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(openCreateModal);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [successModalType, setSuccessModalType] = useState<"create" | "update" | null>(null);
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

  // Full task data with all details
  const tasksData: TaskData[] = [
    {
      id: "#1201290",
      taskName: "Create UI E-Commerce",
      createdAt: "2 March, 2024",
      status: "Completed",
      dueDate: "28 March, 2024",
      timeEstimate: "1 Month",
      assignee: { name: "You", avatar: "/avatar/1.png" },
      project: "Shopnest",
      priority: "High",
      detail: `Design an intuitive and visually appealing user interface for our upcoming e-commerce platform. Focus on creating a seamless shopping experience that guides users from product discovery to checkout."

Key Objectives:
• Home Page: Design an engaging homepage with featured products, categories, and promotions.
• Product Pages: Create product pages with clear images, detailed descriptions, and easy-to-use purchase options.
• Checkout Process: Design a streamlined checkout flow that minimizes friction and maximizes conversion.
• Mobile Responsiveness: Ensure the design is fully responsive across all devices.`,
      attachments: [
        { id: "1", name: "Home Page 1.png", size: "2 MB" },
        { id: "2", name: "Home Page 1.png", size: "2 MB" },
      ],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Team Daily Task",
      },
    },
    {
      id: "#1201291",
      taskName: "Slicing Landing Page",
      createdAt: "5 March, 2024",
      status: "Completed",
      dueDate: "02 June, 2024",
      timeEstimate: "2 Weeks",
      assignee: { name: "Aulia" },
      project: "LP",
      priority: "Medium",
      detail: "Convert the approved landing page design into responsive HTML/CSS code with smooth animations.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Team Daily Task",
      },
    },
    {
      id: "#1201293",
      taskName: "Create About Page for Company Profile",
      createdAt: "10 March, 2024",
      status: "In Progress",
      dueDate: "09 May, 2024",
      timeEstimate: "3 Weeks",
      assignee: { name: "Irwansyah" },
      project: "Company Profile",
      priority: "Medium",
      detail: "Design and develop a professional about page showcasing company history, team, and values.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Team Daily Task",
      },
    },
    {
      id: "#1201292",
      taskName: "Create UI Stock Mobile",
      createdAt: "15 March, 2024",
      status: "Completed",
      dueDate: "17 December, 2024",
      timeEstimate: "2 Months",
      assignee: { name: "Sir Robert" },
      project: "Stock App",
      priority: "High",
      detail: "Design mobile app UI for stock management application with inventory tracking features.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Mobile Team",
      },
    },
    {
      id: "#1201295",
      taskName: "Usability Testing POS Mobile Apps",
      createdAt: "20 March, 2024",
      status: "In Progress",
      dueDate: "12 May, 2024",
      timeEstimate: "1 Week",
      assignee: { name: "Paquito" },
      project: "Mobile App",
      priority: "High",
      detail: "Conduct usability testing sessions for the POS mobile application and compile feedback report.",
      attachments: [],
      breadcrumb: {
        folder: "QA Testing",
        group: "Mobile Team",
      },
    },
    {
      id: "#1201294",
      taskName: "Design Home UI Resto",
      createdAt: "22 March, 2024",
      status: "In Progress",
      dueDate: "12 May, 2024",
      timeEstimate: "2 Weeks",
      assignee: { name: "Miya" },
      project: "LP",
      priority: "Low",
      detail: "Create modern and appetizing home page design for restaurant landing page.",
      attachments: [],
      breadcrumb: {
        folder: "Design Tasks",
        group: "UI Team",
      },
    },
    {
      id: "#1201296",
      taskName: "Create User Interface Design Dashboard",
      createdAt: "25 March, 2024",
      status: "Completed",
      dueDate: "12 May, 2024",
      timeEstimate: "3 Weeks",
      assignee: { name: "Charles" },
      project: "Dashboard",
      priority: "Medium",
      detail: "Design comprehensive dashboard interface with analytics charts and data visualization.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Dashboard Team",
      },
    },
    {
      id: "#1201254",
      taskName: "Create UI E-Commerce Mobile",
      createdAt: "1 April, 2024",
      status: "Completed",
      dueDate: "17 December, 2024",
      timeEstimate: "2 Months",
      assignee: { name: "Christoper" },
      project: "Shopnest",
      priority: "High",
      detail: "Design mobile version of e-commerce application with native app feel.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Mobile Team",
      },
    },
    {
      id: "#1201214",
      taskName: "Slicing Homepage Landing Page",
      createdAt: "5 April, 2024",
      status: "Completed",
      dueDate: "12 May, 2024",
      timeEstimate: "1 Week",
      assignee: { name: "Diyana" },
      project: "LP",
      priority: "Low",
      detail: "Slice approved homepage design into responsive code with pixel-perfect accuracy.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Frontend Team",
      },
    },
    {
      id: "#12012910",
      taskName: "Create Mobile Stock UI",
      createdAt: "10 April, 2024",
      status: "In Progress",
      dueDate: "12 May, 2024",
      timeEstimate: "3 Weeks",
      assignee: { name: "Nurul Ilmi" },
      project: "Stock App",
      priority: "Medium",
      detail: "Design mobile interface for stock tracking with real-time updates.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Mobile Team",
      },
    },
    {
      id: "#12012901",
      taskName: "Create About Page Company",
      createdAt: "12 April, 2024",
      status: "Completed",
      dueDate: "17 December, 1990",
      timeEstimate: "2 Weeks",
      assignee: { name: "Boy Dicky" },
      project: "Company Profile",
      priority: "Low",
      detail: "Design and implement about page for company profile website.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Web Team",
      },
    },
    {
      id: "#1201256",
      taskName: "Design Home UI Restaurant",
      createdAt: "15 April, 2024",
      status: "Completed",
      dueDate: "12 May, 2024",
      timeEstimate: "2 Weeks",
      assignee: { name: "Siti Amalia" },
      project: "Company Profile",
      priority: "Medium",
      detail: "Create elegant home page design for restaurant company profile.",
      attachments: [],
      breadcrumb: {
        folder: "Design Tasks",
        group: "UI Team",
      },
    },
    {
      id: "#1201245",
      taskName: "Create Stock UI Mobile App",
      createdAt: "18 April, 2024",
      status: "To do",
      dueDate: "12 May, 2024",
      timeEstimate: "1 Month",
      assignee: { name: "Claw Kun" },
      project: "Stock App",
      priority: "High",
      detail: "Design complete mobile app UI for stock management system.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "Mobile Team",
      },
    },
    {
      id: "#1201280",
      taskName: "Create E-Commerce UI V2",
      createdAt: "20 April, 2024",
      status: "In Progress",
      dueDate: "12 May, 2024",
      timeEstimate: "6 Weeks",
      assignee: { name: "Kim Nu Soek" },
      project: "Shopnest",
      priority: "High",
      detail: "Design version 2 of e-commerce UI with improved UX and new features.",
      attachments: [],
      breadcrumb: {
        folder: "Development Stuff",
        group: "E-commerce Team",
      },
    },
  ];

  const filteredTasks = tasksData.filter(
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

  const getStatusStyles = (status: TaskData["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-primary text-black";
      case "In Progress":
        return "bg-[#FBBF24] text-black";
      case "To do":
        return "bg-[#60A5FA] text-black";
      default:
        return "bg-gray-200 text-black";
    }
  };

  const isDateOverdue = (dateString: string) => {
    const dates = ["12 May, 2024", "02 June, 2024"];
    return dates.includes(dateString);
  };

  // Modal handlers
  const handleRowClick = (task: TaskData) => {
    setSelectedTask(task);
    setIsDetailModalOpen(true);
    setContextMenuTask(null);
  };

  const handleEditClick = (task: TaskData) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
    setContextMenuTask(null);
  };

  const handleDeleteClick = (task: TaskData) => {
    setSelectedTask(task);
    setIsDeleteModalOpen(true);
    setContextMenuTask(null);
  };

  const handleCreateSuccess = () => {
    setIsCreateModalOpen(false);
    setSuccessModalType("create");
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    setSuccessModalType("update");
  };

  const handleDeleteConfirm = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Task deleted:", selectedTask?.id);
    setIsDeleteModalOpen(false);
    setSelectedTask(null);
  };

  const handleCreateModalClose = () => {
    setIsCreateModalOpen(false);
    onCreateModalClose?.();
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
              {filteredTasks.length}
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

            <Button 
              variant="primary" 
              className="rounded-full px-4 py-3"
              onClick={() => setIsShareModalOpen(true)}
            >
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
                  onClick={() => handleRowClick(task)}
                  className={`${
                    index % 2 === 0
                      ? "bg-white dark:bg-black"
                      : "bg-greyscale-250-light dark:bg-greyscale-25-dark"
                  } dark:text-white text-black relative cursor-pointer hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark transition-colors`}
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
                      {task.status === "Completed" ? "Done" : task.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                      <button
                        className="text-neutral-text hover:text-black dark:hover:text-white duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          setContextMenuTask(
                            contextMenuTask === `${task.id}-${index}` ? null : `${task.id}-${index}`
                          );
                        }}
                      >
                        <Icon name="more-2-fill" size="lg" />
                      </button>

                      {/* Context Menu */}
                      {contextMenuTask === `${task.id}-${index}` && (
                        <div className="absolute right-0 top-full mt-2 bg-greyscale-50-light dark:bg-greyscale-50-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-lg shadow-lg z-10 min-w-[120px] overflow-hidden">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRowClick(task);
                            }}
                            className="w-full px-4 py-2.5 text-left text-black dark:text-white hover:opacity-50 duration-200 flex items-center gap-2"
                          >
                            <Icon name="eye-line" size="sm" />
                            <span className="text-sm">Detail</span>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClick(task);
                            }}
                            className="w-full px-4 py-2.5 text-left text-black dark:text-white hover:opacity-50 duration-200 flex items-center gap-2"
                          >
                            <Icon name="edit-line" size="sm" />
                            <span className="text-sm">Edit</span>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteClick(task);
                            }}
                            className="w-full px-4 py-2.5 text-left text-[#EF4444] hover:opacity-50 duration-200 flex items-center gap-2"
                          >
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

      {/* Modals */}
      <TaskDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedTask(null);
        }}
        task={selectedTask}
        onEdit={() => {
          setIsDetailModalOpen(false);
          setIsEditModalOpen(true);
        }}
        onDelete={() => {
          setIsDetailModalOpen(false);
          setIsDeleteModalOpen(true);
        }}
        onShare={() => {
          setIsDetailModalOpen(false);
          setIsShareModalOpen(true);
        }}
      />

      <CreateTaskModal
        isOpen={isCreateModalOpen || openCreateModal}
        onClose={handleCreateModalClose}
        onSuccess={handleCreateSuccess}
      />

      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTask(null);
        }}
        task={selectedTask}
        onSuccess={handleEditSuccess}
        onShare={() => {
          setIsEditModalOpen(false);
          setIsShareModalOpen(true);
        }}
        onDelete={() => {
          setIsEditModalOpen(false);
          setIsDeleteModalOpen(true);
        }}
      />

      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedTask(null);
        }}
        taskName={selectedTask?.taskName || ""}
        onConfirm={handleDeleteConfirm}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <TaskSuccessModal
        isOpen={successModalType !== null}
        onClose={() => setSuccessModalType(null)}
        type={successModalType || "create"}
      />
    </div>
  );
};

export default TaskListSection;
