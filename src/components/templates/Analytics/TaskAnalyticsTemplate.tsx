"use client";

import { useState } from "react";
import Container from "@/components/atoms/container/Container";
import HeadingAnalytics from "@/components/organisms/analytics/HeadingAnalytics";
import TaskListSection from "@/components/organisms/analytics/task/TaskListSection";

const TaskAnalyticsTemplate: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <HeadingAnalytics variant="task" onAddNewTask={() => setIsCreateModalOpen(true)} />
      <TaskListSection 
        openCreateModal={isCreateModalOpen} 
        onCreateModalClose={() => setIsCreateModalOpen(false)} 
      />
    </Container>
  );
};

export default TaskAnalyticsTemplate;
