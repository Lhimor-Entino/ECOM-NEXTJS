"use client";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Label, Select } from "flowbite-react";
import { product_data } from "@/data/product";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import Link from "next/link";
export default function page() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex flex-col w-full pl-5 pr-5 mt-2">
      {/* <div>
        <Paper
          component="form"
          className="border border-1 border-gray-200 "
          elevation={0}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "70%",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
            }}
            placeholder="Search Products"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div> */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3">
          <Select
            id="category"
            className="text-teal-800 text-xs"
            required
            style={{ paddingTop: "7px", paddingBottom: "7px" }}
          >
            <option>Category</option>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
          <Select
            id="status"
            className="text-teal-800 text-xs"
            style={{ paddingTop: "7px", paddingBottom: "7px" }}
            required
          >
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </Select>
          <Select
            id="price"
            className="text-teal-800 text-xs"
            style={{ paddingTop: "7px", paddingBottom: "7px" }}
            required
          >
            <option>Price</option>
            <option> 100 & Below</option>
            <option> 500 & Below</option>
            <option> 500 & Up</option>
            <option>Inactive</option>
          </Select>
        </div>
        <div>
          <Button size={"sm"}>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Add Product
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto w-full mt-5">
        <Table hoverable>
          <TableHead>
            <TableHeadCell className="p-4">
              <Checkbox />
            </TableHeadCell>
            <TableHeadCell className="text-teal-800">
              Product name
            </TableHeadCell>
            <TableHeadCell className="text-teal-800">Size</TableHeadCell>
            <TableHeadCell className="text-teal-800">Category</TableHeadCell>
            <TableHeadCell className="text-teal-800">Price</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {product_data.map((dt, index) => (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="p-4">
                  <Checkbox />
                </TableCell>
                <TableCell className="whitespace-nowrap text-xs font-medium text-teal-800 dark:text-white">
                  {dt.product_name} {dt.desc}
                </TableCell>
                <TableCell className="text-teal-800 text-xs font-medium">
                  Small
                </TableCell>
                <TableCell className="text-teal-800 text-xs font-medium">
                  {dt.productType}
                </TableCell>
                <TableCell className="text-teal-800 text-xs font-medium">
                  ${dt.price}.00
                </TableCell>
                <TableCell>
                  <Link href={`products/${dt.id}`}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex overflow-x-auto justify-end w-full mt-2">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
