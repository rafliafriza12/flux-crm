"use client";

import PrivateLayout from "./(private)/layout";
import DashboardTemplate from "@/components/templates/Dashboard/Dashboard";

export default function HomePage() {
  return (
    <PrivateLayout>
      <DashboardTemplate />
    </PrivateLayout>
  );
}
