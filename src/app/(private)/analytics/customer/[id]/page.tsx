"use client";

import { DetailCustomerTemplate } from "@/components/templates/Analytics";
import { use } from "react";

interface DetailCustomerPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DetailCustomerPage({ params }: DetailCustomerPageProps) {
  const { id } = use(params);
  return <DetailCustomerTemplate customerId={id} />;
}
