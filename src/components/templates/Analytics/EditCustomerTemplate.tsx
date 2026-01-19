"use client";

import { useState, useEffect } from "react";
import Container from "@/components/atoms/container/Container";
import {
  BodyMediumMedium,
  Button,
  Heading1,
  Heading2,
  Icon,
} from "@/components/atoms";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal2 from "@/components/molecules/Modal/Modal2";

interface CustomerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  customerType: "Member" | "Guest";
  dateOfBirth: string;
}

// Dummy customer data for editing
const dummyCustomers: Record<string, CustomerFormData & { id: string }> = {
  "1201290": {
    id: "#1201290",
    firstName: "Aulia",
    lastName: "Rahma",
    email: "aulia@gmail.com",
    phoneNumber: "+628912903120",
    customerType: "Member",
    dateOfBirth: "2004-07-01",
  },
  "1201291": {
    id: "#1201291",
    firstName: "Fajar",
    lastName: "Firmansyah",
    email: "fajar@gmail.com",
    phoneNumber: "+628912903120",
    customerType: "Member",
    dateOfBirth: "2001-05-12",
  },
  "1201293": {
    id: "#1201293",
    firstName: "Irwan",
    lastName: "Syah",
    email: "irwansyah@gmail.com",
    phoneNumber: "+628912903091",
    customerType: "Guest",
    dateOfBirth: "2001-05-09",
  },
};

interface EditCustomerTemplateProps {
  customerId: string;
}

const EditCustomerTemplate: React.FC<EditCustomerTemplateProps> = ({
  customerId,
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<CustomerFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    customerType: "Guest",
    dateOfBirth: "",
  });

  useEffect(() => {
    // Simulate fetching customer data
    const fetchCustomer = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const customer = dummyCustomers[customerId];
      if (customer) {
        setFormData({
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
          phoneNumber: customer.phoneNumber,
          customerType: customer.customerType,
          dateOfBirth: customer.dateOfBirth,
        });
      }
      setIsLoading(false);
    };

    fetchCustomer();
  }, [customerId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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

    console.log("Customer updated:", { id: customerId, ...formData });

    setIsSubmitting(false);
    setIsModalOpen(true);    
  };

  if (isLoading) {
    return (
      <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
        <div className="w-full flex items-center justify-center py-20">
          <Icon
            name="loader-4-line"
            className="animate-spin text-primary"
            size="xl"
          />
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
            <Icon name="arrow-left-line" className="text-secound" size="xl" />
          </button>
          <Heading1 className="text-[22px]! ipad-horizontal:text-4xl!">
            Edit Customer
          </Heading1>
        </div>
      </div>

      {/* Form */}
      <div className="w-full bg-white dark:bg-black border border-greyscale-100-light dark:border-greyscale-100-dark rounded-2xl p-6 ipad-vertical:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black dark:text-white font-medium">
                First Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon
                    name="user-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Input your first name"
                  required
                  className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3.5 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black dark:text-white font-medium">
                Last Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon
                    name="user-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Input your last name"
                  required
                  className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3.5 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black dark:text-white font-medium">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon
                    name="mail-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Input your email address"
                  required
                  className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3.5 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black dark:text-white font-medium">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon
                    name="phone-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Input your phone number"
                  required
                  className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3.5 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Customer Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black dark:text-white font-medium">
                Customer Type
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon
                    name="refresh-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
                <select
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white rounded-xl pl-12 pr-10 py-3.5 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary appearance-none cursor-pointer"
                >
                  <option value="Member">Member</option>
                  <option value="Guest">Guest</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon
                    name="arrow-down-s-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black dark:text-white font-medium">
                Date of Birth
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon
                    name="calendar-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-greyscale-50-light dark:bg-greyscale-50-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3.5 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none focus:border-primary appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon
                    name="arrow-down-s-line"
                    className="text-neutral-text"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-greyscale-100-light dark:border-greyscale-100-dark"></div>

          {/* Actions */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors disabled:opacity-50"
            >
              <Icon name="edit-line" size="sm" className="text-black" />
              <span className="font-medium">
                {isSubmitting ? "Updating..." : "Update Customer"}
              </span>
            </button>
          </div>
        </form>
      </div>

      <Modal2 close={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <>
          <div
            onClick={() => router.push("/analytics/customer")}
            className="absolute z-1 top-6 right-6 cursor-pointer"
          >
            <Icon
              name="close-line"
              size="xl"
              className="text-black dark:text-white"
            />
          </div>
          <div
            className={`w-25 h-25 flex justify-center items-center rounded-full bg-success`}
          >
            <Icon name="check-fill" className="text-white text-[42px]" />
          </div>
          <Heading2 className="font-semibold! text-center text-black dark:text-white">
            User Updated Successfully
          </Heading2>
          <BodyMediumMedium className="text-center text-placeholder dark:text-placeholder-dark">
            Customer has been successfully updated, please check again
          </BodyMediumMedium>
          <Button
            onClick={() => router.push("/analytics/customer")}
            type="button"
            variant="primary"
            className=" w-full  rounded-full hover:bg-primary/80 duration-300 "
          >
            <BodyMediumMedium>Check Now</BodyMediumMedium>
          </Button>
        </>
      </Modal2>
    </Container>
  );
};

export default EditCustomerTemplate;
