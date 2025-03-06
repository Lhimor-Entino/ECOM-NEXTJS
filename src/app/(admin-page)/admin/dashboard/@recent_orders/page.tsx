"use client";
import { Checkbox, Table } from "flowbite-react";
import { product_data } from "@/data/product";
import Image from "next/image";
import { Badge } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";
// Define the type for an order object
interface Order {
  transactionNo: string;
  date: string; // Could also be a Date type
  customer: string;
  status: string;
  total: number;
}

// Create an array of 5 order objects
// STATUS
// 0 is processing
// 1 is pending
// 2 is completed
// 3 is shipped
// 4 is cancelled
const orders: Order[] = [
  {
    transactionNo: "TRX001",
    date: "2024-04-23",
    customer: "John Doe",
    status: "2",
    total: 150.25,
  },
  {
    transactionNo: "TRX002",
    date: "2024-04-24",
    customer: "Jane Smith",
    status: "1",
    total: 300.75,
  },
  {
    transactionNo: "TRX003",
    date: "2024-04-25",
    customer: "Mike Johnson",
    status: "3",
    total: 200.5,
  },
  {
    transactionNo: "TRX004",
    date: "2024-04-26",
    customer: "Emily Davis",
    status: "4",
    total: 75.0,
  },
  {
    transactionNo: "TRX005",
    date: "2024-04-27",
    customer: "Chris Brown",
    status: "0",
    total: 120.0,
  },
];

export default function Page() {
  const getStatusColor = (status: string) => {
    if (status == "0") {
      return "text-blue-600";
    } else if (status == "1") {
      return "text-yellow-600";
    } else if (status == "2") {
      return "text-green-600";
    } else if (status == "3") {
      return "text-orange-600";
    } else if (status == "4") {
      return "text-red-600";
    }
  };

  const getStatus = (status: string) => {
    if (status == "0") {
      return "Processing";
    } else if (status == "1") {
      return "Pending";
    } else if (status == "2") {
      return "Completed";
    } else if (status == "3") {
      return "Shipped";
    } else if (status == "4") {
      return "Cancelled";
    }
  };
  return (
    <div className="overflow-x-auto mt-2">
      <p className="text-teal-800 text-md font-bold">Recent oders</p>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell className="text-xs text-gray-400 font-semibold">
            Product
          </Table.HeadCell>

          <Table.HeadCell className="text-xs text-gray-400 font-semibold">
            Customer
          </Table.HeadCell>
          <Table.HeadCell className="text-xs text-gray-400 font-semibold">
            {" "}
            Status
          </Table.HeadCell>
          <Table.HeadCell className="text-xs text-gray-400 font-semibold">
            Total
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {product_data.map((order, index) =>
            index > 9 ? (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-xs text-xs text-teal-800 dark:text-white font-semibold">
                  <div className="flex items-center">
                    <Image
                      width={40}
                      height={40}
                      src={order.img}
                      alt={order.product_name}
                    />
                    <div className="ml-2">
                      <p style={{ fontSize: ".7rem" }} className="font-bold">
                        {order.product_name} ({order.desc})
                      </p>
                      <Badge
                        icon={index % 2 !== 0 ? HiCheck : HiClock}
                        className="bg-transparent"
                        style={{ fontSize: ".6rem", padding: " 5px 0" }}
                      >
                        {index % 2 !== 0 ? "Just now" : `${index} mins ago`}
                      </Badge>
                    </div>
                  </div>
                  {order.transactionNo}
                </Table.Cell>

                <Table.Cell className="text-xs text-teal-800 font-semibold">
                  {orders[index - 9]?.customer}
                </Table.Cell>
                <Table.Cell
                  className={`text-xs font-bold  ${getStatusColor(
                    orders[index - 9]?.status
                  )}`}
                >
                  {getStatus(orders[index - 9]?.status)}
                </Table.Cell>
                <Table.Cell className="text-xs text-teal-800 font-semibold">
                  {orders[index - 9]?.total}
                </Table.Cell>
              </Table.Row>
            ) : (
              ""
            )
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
