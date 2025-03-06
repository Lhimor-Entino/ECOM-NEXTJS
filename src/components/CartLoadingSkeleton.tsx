"use client";

import { Table } from "flowbite-react";

import Skeleton from "@mui/material/Skeleton";
export default function CartLoadingSkeleton() {
  return (
    <div className="flex h-screen ">
      <div className="overflow-x-auto  w-3/5 pl-4 pr-2">
        <div className="w-fit flex items-center mt-14 mb-6 ml-5">
          <div className="flex items-center text-teal-900">
            {/* <TfiShoppingCartFull size={20} /> */}
            <Skeleton
              variant="circular"
              width={30}
              height={30}
              className="mr-2"
            />
            {/* <h2 className="text-md ml-2 mr-2 font-extrabold">Shopping Cart</h2> */}
            <Skeleton
              variant="rectangular"
              width={150}
              height={30}
              className="mr-2 rounded-sm"
            />
          </div>
          <Skeleton
            variant="rectangular"
            className="rounded-lg"
            width={80}
            height={30}
          />
        </div>

        <Table hoverable className="drop-shadow-none">
          <Table.Body>
            <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-50">
              <Table.Cell className="p-4">
                <Skeleton
                  variant="rectangular"
                  className="rounded-md"
                  width={20}
                  height={20}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className="flex">
                  <Skeleton
                    variant="rectangular"
                    className="rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className="ml-3">
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg"
                      width={200}
                      height={20}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg mt-2"
                      width={150}
                      height={20}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg mt-2"
                      width={125}
                      height={20}
                    />
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Skeleton
                  variant="rectangular"
                  className="rounded-lg mt-2"
                  width={50}
                  height={20}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-50">
              <Table.Cell className="p-4">
                <Skeleton
                  variant="rectangular"
                  className="rounded-md"
                  width={20}
                  height={20}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className="flex">
                  <Skeleton
                    variant="rectangular"
                    className="rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className="ml-3">
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg"
                      width={200}
                      height={20}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg mt-2"
                      width={150}
                      height={20}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg mt-2"
                      width={125}
                      height={20}
                    />
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Skeleton
                  variant="rectangular"
                  className="rounded-lg mt-2"
                  width={50}
                  height={20}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-50">
              <Table.Cell className="p-4">
                <Skeleton
                  variant="rectangular"
                  className="rounded-md"
                  width={20}
                  height={20}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className="flex">
                  <Skeleton
                    variant="rectangular"
                    className="rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className="ml-3">
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg"
                      width={200}
                      height={20}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg mt-2"
                      width={150}
                      height={20}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="rounded-lg mt-2"
                      width={125}
                      height={20}
                    />
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Skeleton
                  variant="rectangular"
                  className="rounded-lg mt-2"
                  width={50}
                  height={20}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className=" w-2/5 bg-gray-100 rounded pl-10 pr-10">
        {/* COSTUMER ADDRESS */}
        <div className="flex items-start justify-between p-2 mt-8 ">
          <div>
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={200}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={150}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md"
              width={100}
              height={20}
            />
          </div>
          <button className="text-teal-700 font-bold text-xs ">
            {" "}
            <Skeleton
              variant="rectangular"
              className="rounded-md"
              width={50}
              height={20}
            />
          </button>
        </div>

        {/* PAYMENT METHOD */}
        <div className="flex items-start justify-between p-2 mt-8 ">
          <div>
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={200}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={150}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md"
              width={100}
              height={20}
            />
          </div>
          <button className="text-teal-700 font-bold text-xs ">
            {" "}
            <Skeleton
              variant="rectangular"
              className="rounded-md"
              width={50}
              height={20}
            />
          </button>
        </div>

        {/* DISCOUNT VOUCHER INPUT */}
        <div className="flex items-start justify-between p-2 mt-8  ">
          <div className=" w-full">
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={200}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={250}
              height={20}
            />
            <div className="flex min-w-fullrounded-none mt-3 justify-between">
              <Skeleton
                variant="rectangular"
                className="rounded-md mb-1"
                width={250}
                height={35}
              />
              <Skeleton
                variant="rectangular"
                className="rounded-md"
                width={68}
                height={35}
              />
            </div>
          </div>
        </div>

        {/* TOTAL AMOUT */}
        <div className="flex items-start justify-between p-2 mt-8 flex-col ">
          <div className="flex justify-between w-full mb-1">
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={150}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={80}
              height={20}
            />
          </div>
          <div className="flex justify-between w-full mb-1">
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={100}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={60}
              height={20}
            />
          </div>
          <div className="flex justify-between w-full">
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={90}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md"
              width={60}
              height={20}
            />
          </div>
        </div>

        {/* CHECKOUT  */}
        <div className="flex items-start justify-between p-2 mt-8  ">
          <div>
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={80}
              height={20}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md mb-1"
              width={60}
              height={20}
            />
          </div>
          <Skeleton
            variant="rectangular"
            className="rounded-md mb-1"
            width={120}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
