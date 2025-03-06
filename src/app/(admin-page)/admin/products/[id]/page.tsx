"use client";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Image from "next/image";
interface StatusIF {
  id: number;
  status: number; // 1 is on sale
  price: number;
  freebies: string;
}
export default function page({ params }: { params: { id: string } }) {
  const [isEdit, setIsEdit] = useState(false);
  const [sizeArr, setSizeArr] = useState<String[]>(["XS", "S", "M", "L", "XL"]);
  const [statusArr, setStatusArr] = useState<StatusIF[]>([
    { id: 2, status: 1, price: 90, freebies: "Half Tray of Egg White (xs)" },
  ]);
  return (
    <div className="mt-2 ">
      <div className="grid md:grid-cols-1 gap-5 lg:grid-cols-3  ">
        <div className="col-span-2 p-6">
          <div className="flex items-center ">
            <HiInformationCircle className=" text-xl text-teal-600" />
            <p className="ml-1 text-teal-600 text-md font-bold">
              General Information
            </p>
          </div>
          <div className="mt-5">
            <p className=" text-teal-600 text-xs font-semibold">
              {" "}
              Product Name
            </p>
            {isEdit ? (
              <input
                value={"1 Tray Egg White (xs)"}
                style={{ outline: "none" }}
                className="w-full bg-teal-50 text-teal-800 text-xs p-4 mt-3 font-normal rounded-lg "
              />
            ) : (
              <p className="bg-teal-50 text-teal-800 text-xs p-4 mt-3 font-normal rounded-lg">
                1 Tray Egg White (xs)
              </p>
            )}
          </div>
          <div className="mt-5">
            <p className=" text-teal-600 text-xs font-semibold">
              {" "}
              Product Description
            </p>
            {isEdit ? (
              <input
                value={"1 Tray Egg White (xs)"}
                style={{ outline: "none" }}
                className="w-full bg-teal-50 text-teal-800 text-xs p-4 mt-3 font-normal rounded-lg "
              />
            ) : (
              <textarea
                className="w-full mt-3 border-none bg-teal-50 rounded-lg outline-none"
                rows={5}
                style={{ outline: "none !important" }}
              />
            )}
          </div>

          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div>
              <p className="text-teal-800 font-bold text-sm">Size</p>
              <p className="text-teal-600 text-xs mt-2">Pick Available size</p>
              <div className="grid grid-cols-5 w-3/4 ">
                {sizeArr.map((size, index) => (
                  <div
                    className={`mt-3  w-8 h-8 rounded-md flex items-center justify-center mr-1 ${
                      index == 2 ? "bg-teal-600" : "bg-teal-100"
                    }`}
                  >
                    <p
                      className={`text-xs  ${
                        index == 2 ? "text-white" : "text-teal-700"
                      }`}
                    >
                      {size}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-teal-800 font-bold text-sm">Status</p>
              <p className="text-teal-600 text-xs mt-2">
                Current product status
              </p>
              <div className="grid grid-cols-5 gap-2">
                {statusArr.map((status, index) => (
                  <div className=" w-full mt-2">
                    <FormGroup className=" w-28">
                      <FormControlLabel
                        className=" w-full"
                        control={<Switch defaultChecked />}
                        label={
                          status.status === 1 ? (
                            <p className="text-sm text-teal-800">On sale</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </FormGroup>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 w-full">
            <p className="text-teal-800 font-bold text-sm">Stocks & Pricing</p>
            <div>
              <div className="grid grid-flow-col grid-cols-2 gap-2">
                <div>
                  <p className="text-teal-800 font-semibold text-xs mt-3">
                    Price
                  </p>
                  <p className="bg-teal-50 text-teal-800 text-xs p-3 mt-2 font-normal rounded-lg">
                    P1,000.00
                  </p>
                </div>
                <div>
                  <p className="text-teal-800 font-semibold text-xs mt-3">
                    Stocks
                  </p>
                  <p className="bg-teal-50 text-teal-800 text-xs p-3 mt-2 font-normal rounded-lg">
                    1,209
                  </p>
                </div>
              </div>

              <div className="grid grid-flow-col grid-cols-2 gap-2">
                <div>
                  <p className="text-teal-800 font-semibold text-xs mt-3">
                    Discount
                  </p>
                  <p className="bg-teal-50 text-teal-800 text-xs p-3 mt-2 font-normal rounded-lg">
                    10%
                  </p>
                </div>
                <div>
                  <p className="text-teal-800 font-semibold text-xs mt-3">
                    Discount Type
                  </p>
                  <p className="bg-teal-50 text-teal-800 text-xs p-3 mt-2 font-normal rounded-lg">
                    Mother's Day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-6">
          <div className=" pb-10">
            <p className=" text-teal-600 font-bold">Uploaded Image</p>
          </div>
          <div className="flex justify-center">
            <Image
              src={
                "https://m.media-amazon.com/images/I/61hhmtxRULL._AC_SX466_.jpg"
              }
              width={350}
              height={350}
              alt="p"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-teal-700 font-semibold text-md">Category</h3>
            <p className="leading-10">Product Category</p>
            <p className=" bg-teal-50 p-2 text-teal-800 rounded-lg ">Jacket</p>
          </div>
        </div>
      </div>
    </div>
  );
}
