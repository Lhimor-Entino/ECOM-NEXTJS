import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
import { product_data } from "@/data/product";
import Image from "next/image";

import { Badge } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";
export default function Page() {
  return (
    <div className="flex flex-col pl-3 pr-3 pt-2 bg-teal-50 rounded">
      <div className="flex justify-between items-center">
        <p className="text-teal-800 font-bold text-md">Top 5 Products</p>
        <Link href="#" className="p-1 text-teal-500 text-xs ">
          View details
        </Link>
      </div>

      <div className="overflow-x-auto mt-2">
        <Table className="bg-teal-50">
          <TableBody className="divide-y">
            {product_data.map((product, index) =>
              index <= 4 ? (
                <TableRow key={index} className="bg-transparent dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap text-xs font-bold text-teal-800 dark:text-white">
                    <div className="flex items-center">
                      <p style={{ fontSize: ".6rem" }}>{index + 1}.&nbsp;</p>
                      <Image
                        width={35}
                        height={35}
                        src={product.img}
                        alt={product.product_name}
                      />
                      <div className="ml-2">
                        <p style={{ fontSize: ".7rem" }} className="font-bold">
                          {product.product_name}
                        </p>
                        <p
                          style={{ fontSize: ".6rem" }}
                          className="text-gray-500"
                        >
                          {product.desc}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-teal-800 font-normal">
                    {product.price}
                  </TableCell>
                </TableRow>
              ) : (
                ""
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
