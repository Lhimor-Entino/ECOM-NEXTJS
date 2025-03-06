"use client";
import { LiaClipboardListSolid } from "react-icons/lia";
import { Button, Checkbox, Table, Tooltip } from "flowbite-react";
import { Badge } from "flowbite-react";
import Image from "next/image";
import { IoBagCheckOutline } from "react-icons/io5";
import { TfiShoppingCartFull } from "react-icons/tfi";

import { useAppSelector } from "@/app/redux/store";
import { useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { removeToCart } from "@/app/redux/features/cart-slice";

import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";
export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state) => state.cartSlice);
  const [selectedCartItems, setSelectedCartItems] = useState<string[]>([]);

  const handleSelectCartItems = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      setSelectedCartItems([...selectedCartItems, id]);
    } else {
      setSelectedCartItems(selectedCartItems.filter((item) => item !== id));
    }
  };
  const handleRemoveItems = () => {
    setSelectedCartItems(
      selectedCartItems.filter((item) => !selectedCartItems.includes(item))
    );
    dispatch(removeToCart(selectedCartItems));
  };

  const getTotalAmount = () => {
    let totalAmount: number = 0;

    cartItems.map((item) => {
      totalAmount += item.price * item.quantity;
    });

    return totalAmount;
  };
  return (
    <>
      <div className="flex h-screen ">
        <div className="overflow-x-auto  w-3/5 pl-4 pr-2">
          <div className="w-fit flex items-center mt-14 mb-6 ml-5">
            <div className="flex items-center text-teal-900">
              <TfiShoppingCartFull size={20} />
              <h2 className="text-md ml-2 mr-2 font-extrabold">
                Shopping Cart
              </h2>
            </div>

            <Badge icon={LiaClipboardListSolid}>
              {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
            </Badge>
          </div>
          {selectedCartItems.length > 0 && cartItems.length > 0 ? (
            <Button
              onClick={() => handleRemoveItems()}
              size={"xs"}
              color={"light"}
              className="focus:ring-0 border-0"
            >
              <div className="flex items-center">
                <MdOutlineRemoveShoppingCart className="text-red-500 ml-2 font-semibold" />
                <p className="text-red-500 text-xs ml-2 font-semibold">
                  Remove {selectedCartItems.length > 1 ? "Items" : "Item"}
                </p>
              </div>
            </Button>
          ) : (
            ""
          )}

          <Table hoverable className="drop-shadow-none">
            <Table.Body>
              {cartItems.map((item, index) => (
                <Table.Row key={index} className="bg-white  dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-50">
                  <Table.Cell className="p-4">
                    <Checkbox
                      className="rounded"
                      onChange={(e) => handleSelectCartItems(e, item.id)}
                      checked={selectedCartItems.includes(item.id)}
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="flex">
                      <Image
                        width={80}
                        height={80}
                        src={item.img}
                        alt={`ALT${item.id}`}
                      />
                      <div className="ml-3">
                        <p className="text-teal-800 text-sm font-bold mb-1">
                          {item.desc}
                        </p>
                        <p className="text-teal-800 text-xs font-bold mb-1">
                          Size :
                          <span className="text-xs font-semibold ">
                            {item.size}
                          </span>
                        </p>
                        <Tooltip
                          content={
                            <div>
                              <p className="text-teal-800 text-sm font-semibold">
                                Edit quantity
                              </p>
                              <div className="flex justify-between mt-2 items-center">
                                <Button
                                  gradientMonochrome="teal"
                                  size={"sm"}
                                  className="p-0"
                                >
                                  +
                                </Button>
                                <p className="text-teal-800 pl-1 pr-1 text-xs">
                                  {item.quantity}
                                </p>
                                <Button
                                  gradientMonochrome="failure"
                                  size={"sm"}
                                  className="p-0 bg-red-500 w-fit"
                                >
                                  -
                                </Button>
                              </div>
                            </div>
                          }
                          placement="left"
                          className="text-xs bg-white border-2 border-teal-700"
                          style="dark"
                        >
                          <p className="hover:cursor-pointer text-teal-800 text-xs font-semibold ">
                            Price :{" "}
                            <span className="text-xs">{item.price}</span>
                          </p>
                          <p className="hover:cursor-pointer text-teal-800 text-xs font-semibold ">
                            Quantity :{" "}
                            <span className="text-xs">{item.quantity}</span>
                          </p>
                        </Tooltip>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="font-extrabold text-teal-900 text-xs">
                      ₱ {item.quantity * item.price}.00
                    </p>
                  </Table.Cell>
                </Table.Row>
              ))}

              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-50 border-t-2 border-b-2 border-gray-200">
                <Table.Cell className="p-4"></Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <p className="text-right text-teal-800 text-sm font-bold ">
                    Total Amount :
                  </p>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <p className="font-extrabold text-teal-900 text-xs">
                    ₱ {getTotalAmount()}.00
                  </p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <div className=" w-2/5 bg-gray-100 rounded pl-10 pr-10">
          {/* COSTUMER ADDRESS */}
          <div className="flex items-start justify-between p-2 mt-8 ">
            <div>
              <p className="font-extrabold text-teal-900 text-sm">
                Juan Dela Cruz
              </p>
              <p className="text-teal-800 text-xs font-light mt-1 ">
                84 Small Horshoe Drive
              </p>
              <p className="text-teal-800 text-xs font-light mt-1 ">
                Quezon City
              </p>
            </div>
            <button className="text-teal-700 font-bold text-xs ">Edit</button>
          </div>

          {/* PAYMENT METHOD */}
          <div className="flex items-start justify-between p-2 mt-8  ">
            <div>
              <p className="font-extrabold text-teal-900 text-sm">
                Payment Method
              </p>
              <p className="text-teal-800 text-xs font-light mt-1 ">Gcash</p>
              <p className="text-teal-800 text-xs font-light mt-1 ">
                0923 *** **44
              </p>
            </div>
            <button className="text-teal-700 font-bold text-xs ">Edit</button>
          </div>

          {/* DISCOUNT VOUCHER INPUT */}
          <div className="flex items-start justify-between p-2 mt-8  ">
            <div className=" w-full">
              <p className="font-extrabold text-teal-900 text-sm">
                Do you have any voucher code?
              </p>
              <p className="text-teal-900 text-xs font-semibold mt-1 ">
                1 voucher code can be applied per purchase
              </p>
              <div className="flex min-w-fullrounded-none mt-3 justify-between">
                <input
                  placeholder="Your code here"
                  value={""}
                  className="outline-none w-3/4 rounded-sm pl-2 text-xs text-teal-900 border-2 border-gray-200"
                />
                <Button
                  size={"sm"}
                  color={"dark"}
                  className=" w-1/5  border text-xs rounded-sm bg-gray-700"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>

          {/* TOTAL AMOUT */}
          <div className="flex items-start justify-between p-2 mt-8 flex-col ">
            <div className="flex justify-between w-full mb-1">
              <p className="text-teal-900 text-xs">Sub Total (3 Items)</p>
              <p className="text-teal-900 text-xs">₱ 600.00</p>
            </div>
            <div className="flex justify-between w-full mb-1">
              <p className="text-teal-900 text-xs">Shipping Fee</p>
              <p className="text-teal-900 text-xs font-bold">FREE!</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-teal-900 text-xs">Discount</p>
              <p className="text-teal-900 text-xs">-</p>
            </div>
          </div>

          {/* CHECKOUT  */}
          <div className="flex items-start justify-between p-2 mt-8  ">
            <div>
              <p className="font-normal text-teal-900 text-xs">
                Total(incl. VAT)
              </p>
              <p className="text-teal-900 text-xs font-extrabold mt-1 ">
                ₱ 600.00
              </p>
            </div>
            <Button size={"sm"} className="bg-none outline-none">
              <IoBagCheckOutline className="mr-2 h-5 w-5" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
