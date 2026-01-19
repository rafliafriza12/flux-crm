"use client";

import { EditCustomerTemplate } from "@/components/templates/Analytics";
import { use } from "react";

interface EditCustomerPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditCustomerPage({ params }: EditCustomerPageProps) {
  const { id } = use(params);
  return <EditCustomerTemplate customerId={id} />;
}
