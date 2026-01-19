"use client";

import { useState } from "react";
import Container from "@/components/atoms/container/Container";
import { Heading1, Icon, Avatar, Badge, Button } from "@/components/atoms";
import { BodyMediumMedium, BodyMediumRegular } from "@/components/atoms/Text/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import CustomerHeadingButtonList from "@/components/molecules/analytics/CustomerHeadingButtonList";
import Modal2 from "@/components/molecules/Modal/Modal2";

interface PaymentHistory {
  id: string;
  name: string;
  category: string;
  price: number;
}

interface CustomerDetail {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  status: "Member" | "Guest";
  avatar?: string;
  memberPoint: number;
  paymentHistory: PaymentHistory[];
}

// Dummy customer data
const dummyCustomers: Record<string, CustomerDetail> = {
  "1201290": {
    id: "#1201290",
    firstName: "Aulia",
    lastName: "Rahma",
    email: "aulia@gmail.com",
    dateOfBirth: "July 01, 2004",
    phoneNumber: "+628912903120",
    status: "Member",
    avatar: "/avatar/1.png",
    memberPoint: 9800,
    paymentHistory: [
      { id: "1", name: "Premium Analytics Suite", category: "Business Software", price: 199 },
      { id: "2", name: "CRM Pro Subscription", category: "Software Services", price: 99 },
      { id: "3", name: "Revenue Forecast Add-On", category: "Business Software", price: 59 },
      { id: "4", name: "Automated Reporting Pro", category: "Analytics Software", price: 89 },
    ],
  },
  "1201291": {
    id: "#1201291",
    firstName: "Fajar",
    lastName: "Firmansyah",
    email: "fajar@gmail.com",
    dateOfBirth: "May 12, 2001",
    phoneNumber: "+628912903120",
    status: "Member",
    avatar: "/avatar/1.png",
    memberPoint: 5400,
    paymentHistory: [
      { id: "1", name: "CRM Pro Subscription", category: "Software Services", price: 99 },
      { id: "2", name: "Revenue Forecast Add-On", category: "Business Software", price: 59 },
    ],
  },
  "1201293": {
    id: "#1201293",
    firstName: "Irwan",
    lastName: "Syah",
    email: "irwansyah@gmail.com",
    dateOfBirth: "May 09, 2001",
    phoneNumber: "+628912903091",
    status: "Guest",
    memberPoint: 0,
    paymentHistory: [],
  },
};

interface DetailCustomerTemplateProps {
  customerId: string;
}

const DetailCustomerTemplate: React.FC<DetailCustomerTemplateProps> = ({ customerId }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const customer = dummyCustomers[customerId];

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Customer deleted:", customerId);
    setIsDeleteModalOpen(false);
    router.push("/analytics/customer");
  };

  if (!customer) {
    return (
      <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
        <div className="w-full flex items-center justify-center py-20">
          <BodyMediumMedium className="text-neutral-text">Customer not found</BodyMediumMedium>
        </div>
      </Container>
    );
  }

  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark transition-colors"
          >
            <Icon name="arrow-left-line" className="text-secound dark:text-primary" size="xl" />
          </button>
          <Heading1 className="text-[22px]! ipad-horizontal:text-4xl!">
            Detail Customer
          </Heading1>
        </div>

        {/* Header Buttons */}
        <div className="flex items-center gap-3">
          <div className="h-12 px-6 rounded-full flex items-center justify-center gap-2.5 bg-foreground dark:bg-foreground-dark cursor-pointer hover:opacity-80 transition-opacity">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <BodyMediumMedium className="hidden ipad-vertical:block text-white">
              Export
            </BodyMediumMedium>
          </div>
          <Link
            href="/analytics/customer/create"
            className="h-12 p-1 pr-4 rounded-full flex items-center justify-center gap-2.5 bg-[#204E4D] hover:bg-[#2a6665] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex justify-center items-center">
              <Icon name="add-line" className="text-black" size="lg" />
            </div>
            <BodyMediumMedium className="text-white hidden ipad-vertical:block">
              Add New Customer
            </BodyMediumMedium>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left - Customer Info Card */}
        <div className="bg-background dark:bg-background-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-2xl p-6">
          {/* Avatar and Name */}
          <div className="flex items-center gap-4 mb-6">
            <Avatar
              src={customer.avatar}
              name={`${customer.firstName} ${customer.lastName}`}
              size="lg"
              className="w-16 h-16"
            />
            <BodyMediumMedium className="text-xl text-black dark:text-white">
              {customer.firstName} {customer.lastName}
            </BodyMediumMedium>
          </div>

          {/* Customer Details */}
          <div className="space-y-4">
            {/* Customer ID */}
            <div className="flex items-center gap-3">
              <Icon name="profile-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-28">Customer ID</span>
              <span className="text-black dark:text-white">{customer.id}</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <Icon name="loader-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-28">Status</span>
              <Badge
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  customer.status === "Member"
                    ? "bg-primary text-black"
                    : "bg-[#D4A574] text-black"
                )}
              >
                {customer.status}
              </Badge>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Icon name="mail-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-28">Email</span>
              <span className="text-black dark:text-white">{customer.email}</span>
            </div>

            {/* Date of Birth */}
            <div className="flex items-center gap-3">
              <Icon name="calendar-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-28">Date of Birth</span>
              <span className="text-black dark:text-white">{customer.dateOfBirth}</span>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-3">
              <Icon name="phone-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text min-w-28">Phone Number</span>
              <span className="text-black dark:text-white">{customer.phoneNumber}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handleDeleteClick}
              disabled={isDeleting}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500 text-red-500 hover:bg-red-500/10 transition-colors disabled:opacity-50"
            >
              <Icon name="delete-bin-line" size="sm" className="text-red-500" />
              <span className="text-sm font-medium">Delete Customer</span>
            </button>
            <Link
              href={`/analytics/customer/${customerId}/edit`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors"
            >
              <Icon name="edit-line" size="sm" className="text-black" />
              <span className="text-sm font-medium">Edit Detail</span>
            </Link>
          </div>
        </div>

        {/* Right - Payment History */}
        <div className="bg-background dark:bg-background-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-2xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <BodyMediumMedium className="text-lg text-black dark:text-white">
              Payment History
            </BodyMediumMedium>
            <div className="flex items-center gap-2">
              <Icon name="coin-line" className="text-neutral-text" size="lg" />
              <span className="text-neutral-text">Member Point</span>
              <Badge className="px-3 py-1 rounded-full text-sm font-medium bg-transparent border border-primary text-primary">
                {customer.memberPoint.toLocaleString()}
              </Badge>
            </div>
          </div>

          {/* Payment List */}
          <div className="space-y-4">
            {customer.paymentHistory.length > 0 ? (
              customer.paymentHistory.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Icon name="file-text-line" className="text-black" size="lg" />
                    </div>
                    <div>
                      <BodyMediumMedium className="text-black dark:text-white">
                        {payment.name}
                      </BodyMediumMedium>
                      <span className="text-sm text-neutral-text">{payment.category}</span>
                    </div>
                  </div>
                  <BodyMediumMedium className="text-black dark:text-white">
                    ${payment.price}
                  </BodyMediumMedium>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-neutral-text">
                No payment history
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal2 close={() => setIsDeleteModalOpen(false)} isOpen={isDeleteModalOpen}>
        <>
          <div
            onClick={() => setIsDeleteModalOpen(false)}
            className="absolute z-1 top-6 right-6 cursor-pointer"
          >
            <Icon
              name="close-line"
              size="xl"
              className="text-black dark:text-white"
            />
          </div>
          <div className="w-25 h-25 flex justify-center items-center rounded-full bg-error">
            <Icon name="delete-bin-fill" className="text-white text-[42px]" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Delete Customer ?
            </h2>
            <p className="text-neutral-text">
              Are you sure want to delete customer ?
            </p>
            <p className="text-black dark:text-white font-medium mt-1">
              {customer.firstName} {customer.lastName}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              type="button"
              className="flex-1 px-6 py-3 rounded-full border border-greyscale-100-light dark:border-greyscale-100-dark text-black dark:text-white hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark transition-colors"
            >
              <BodyMediumMedium>Cancel</BodyMediumMedium>
            </button>
            <button
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              type="button"
              className="flex-1 px-6 py-3 rounded-full bg-alert-error-25 text-error hover:opacity-75 duration-200 disabled:opacity-50"
            >
              <BodyMediumMedium>{isDeleting ? "Deleting..." : "Yes, Delete"}</BodyMediumMedium>
            </button>
          </div>
        </>
      </Modal2>
    </Container>
  );
};

export default DetailCustomerTemplate;
