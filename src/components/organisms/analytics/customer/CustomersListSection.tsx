"use client";

import { useState } from "react";
import { Icon, Avatar, Badge } from "@/components/atoms";
import { BodyMediumMedium, BodyMediumRegular } from "@/components/atoms/Text/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Modal2 from "@/components/molecules/Modal/Modal2";

interface Customer {
  id: string;
  name: string;
  status: "Member" | "Guest";
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  avatar?: string;
}

const CustomersListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contextMenuCustomer, setContextMenuCustomer] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mock data based on the image
  const customers: Customer[] = [
    {
      id: "#1201290",
      name: "Fajar Firmansyah",
      status: "Member",
      email: "fajar@gmail.com",
      dateOfBirth: "12 May, 2001",
      phoneNumber: "+628912903120",
      avatar: "/avatar/1.png",
    },
    {
      id: "#1201291",
      name: "Aulia",
      status: "Member",
      email: "aulia@gmail.com",
      dateOfBirth: "02 June, 2005",
      phoneNumber: "+628912903123",
    },
    {
      id: "#1201293",
      name: "Irwansyah",
      status: "Guest",
      email: "irwansyah@gmail.com",
      dateOfBirth: "09 May, 2001",
      phoneNumber: "+628912903091",
    },
    {
      id: "#1201292",
      name: "Sir Robert",
      status: "Member",
      email: "robert@gmail.com",
      dateOfBirth: "17 December, 2002",
      phoneNumber: "+628912990191",
    },
    {
      id: "#1201295",
      name: "Paquito",
      status: "Guest",
      email: "paquito@gmail.com",
      dateOfBirth: "12 May, 2024",
      phoneNumber: "+628912092199",
    },
    {
      id: "#1201294",
      name: "Miya",
      status: "Guest",
      email: "miya@gmail.com",
      dateOfBirth: "12 May, 2024",
      phoneNumber: "+628912098826",
    },
    {
      id: "#1201296",
      name: "Charles",
      status: "Member",
      email: "charles@gmail.com",
      dateOfBirth: "12 May, 2024",
      phoneNumber: "+628912097182",
    },
    {
      id: "#1201254",
      name: "Christoper",
      status: "Member",
      email: "christoper@gmail.com",
      dateOfBirth: "17 December, 2004",
      phoneNumber: "+628912097912",
    },
    {
      id: "#1201214",
      name: "Diyana",
      status: "Member",
      email: "diyana@gmail.com",
      dateOfBirth: "12 May, 2024",
      phoneNumber: "+628912097898",
    },
    {
      id: "#1201291",
      name: "Nurul Ilmi",
      status: "Guest",
      email: "nurul@gmail.com",
      dateOfBirth: "12 May, 2024",
      phoneNumber: "+628912097238",
    },
    {
      id: "#1201290",
      name: "Boy Dicky",
      status: "Member",
      email: "boy@gmail.com",
      dateOfBirth: "17 December, 1990",
      phoneNumber: "+628912097245",
    },
    {
      id: "#1201256",
      name: "Siti Amalia",
      status: "Member",
      email: "amalia@gmail.com",
      dateOfBirth: "12 May, 2024",
      phoneNumber: "+628912097849",
    },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (customer: Customer) => {
    setCustomerToDelete(customer);
    setIsDeleteModalOpen(true);
    setContextMenuCustomer(null);
  };

  const handleConfirmDelete = async () => {
    if (!customerToDelete) return;
    
    setIsDeleting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Customer deleted:", customerToDelete.id);
    setIsDeleting(false);
    setIsDeleteModalOpen(false);
    setCustomerToDelete(null);
    // Here you would normally refetch the data or remove from state
  };

  return (
    <div className="w-full bg-background dark:bg-background-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-2xl py-6">
      {/* Header */}
      <div className="flex flex-col ipad-vertical:flex-row ipad-vertical:items-center ipad-vertical:justify-between gap-4 mb-6 px-6">
        <div className="flex items-center gap-2">
          <BodyMediumMedium className="dark:text-white text-black text-2xl!">
            List Customers
          </BodyMediumMedium>
          <span className="text-neutral-text text-sm leading-[160%]">1200</span>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full ipad-vertical:w-100">
          <Icon
            name="search-line"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text"
            size="lg"
          />
          <input
            type="text"
            placeholder="Search customer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-greyscale-0-light dark:bg-greyscale-0-dark text-black dark:text-white placeholder:text-neutral-text rounded-full pl-12 pr-4 py-3 border border-greyscale-100-light dark:border-greyscale-100-dark focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-greyscale-50-light dark:bg-greyscale-50-dark">
              <th className="text-left py-4 px-4">
                <BodyMediumRegular className="text-black dark:text-white font-medium">
                  Customer ID
                </BodyMediumRegular>
              </th>
              <th className="text-left py-4 px-4">
                <BodyMediumRegular className="text-black dark:text-white font-medium">
                  Customer Name
                </BodyMediumRegular>
              </th>
              <th className="text-left py-4 px-4">
                <BodyMediumRegular className="text-black dark:text-white font-medium">
                  Status
                </BodyMediumRegular>
              </th>
              <th className="text-left py-4 px-4">
                <BodyMediumRegular className="text-black dark:text-white font-medium">
                  Email
                </BodyMediumRegular>
              </th>
              <th className="text-left py-4 px-4">
                <BodyMediumRegular className="text-black dark:text-white font-medium">
                  Date Of Birth
                </BodyMediumRegular>
              </th>
              <th className="text-left py-4 px-4">
                <BodyMediumRegular className="text-black dark:text-white font-medium">
                  Phone Number
                </BodyMediumRegular>
              </th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr
                key={`${customer.id}-${index}`}
                className={`${index % 2 === 0 ? "bg-white dark:bg-black" : "bg-greyscale-250-light dark:bg-greyscale-25-dark"} dark:text-white text-black cursor-pointer hover:bg-greyscale-50-light dark:hover:bg-greyscale-50-dark transition-colors`}
                onClick={() => window.location.href = `/analytics/customer/${customer.id.replace("#", "")}`}
              >
                <td className="py-4 px-4">
                  <BodyMediumRegular>
                    {customer.id}
                  </BodyMediumRegular>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={customer.avatar}
                      name={customer.name}
                      size="sm"
                    />
                    <BodyMediumRegular>
                      {customer.name}
                    </BodyMediumRegular>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium",
                      customer.status === "Member"
                        ? "bg-primary text-black"
                        : "bg-[#D4A574] text-black"
                    )}
                  >
                    {customer.status}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <BodyMediumRegular>
                    {customer.email}
                  </BodyMediumRegular>
                </td>
                <td className="py-4 px-4">
                  <BodyMediumRegular>
                    {customer.dateOfBirth}
                  </BodyMediumRegular>
                </td>
                <td className="py-4 px-4">
                  <BodyMediumRegular>
                    {customer.phoneNumber}
                  </BodyMediumRegular>
                </td>
                <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <button
                      className="text-neutral-text hover:text-black dark:hover:text-white duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setContextMenuCustomer(
                          contextMenuCustomer === `${customer.id}-${index}` ? null : `${customer.id}-${index}`
                        );
                      }}
                    >
                      <Icon name="more-2-fill" size="lg" />
                    </button>

                    {/* Context Menu */}
                    {contextMenuCustomer === `${customer.id}-${index}` && (
                      <div className="absolute right-0 top-full mt-2 bg-greyscale-50-light dark:bg-greyscale-50-dark border border-greyscale-100-light dark:border-greyscale-100-dark rounded-lg shadow-lg z-10 min-w-[120px] overflow-hidden">
                        <Link
                          href={`/analytics/customer/${customer.id.replace("#", "")}`}
                          className="w-full px-4 py-2.5 text-left text-black dark:text-white hover:opacity-50 duration-200 flex items-center gap-2"
                        >
                          <Icon name="eye-line" size="sm" />
                          <span className="text-sm">Detail</span>
                        </Link>
                        <Link
                          href={`/analytics/customer/${customer.id.replace("#", "")}/edit`}
                          className="w-full px-4 py-2.5 text-left text-black dark:text-white hover:opacity-50 duration-200 flex items-center gap-2"
                        >
                          <Icon name="edit-line" size="sm" />
                          <span className="text-sm">Edit</span>
                        </Link>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(customer);
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
              {customerToDelete?.name}
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
    </div>
  );
};

export default CustomersListSection;
