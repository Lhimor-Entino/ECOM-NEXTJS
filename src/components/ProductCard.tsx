"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { FaCartFlatbed } from "react-icons/fa6";
import {
  addToCart,
  updateCart,
  removeToCart,
} from "@/app/redux/features/cart-slice";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/redux/store";
interface Props {
  id: string;
  productType: string;
  product_name: string;
  img: string;
  price: number;
  desc: string;
  size: number;
  purchase_option: number;
}

export function ProductCard({ info, link }: { info: Props; link: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state) => state.cartSlice);
  const getSize = (size: number, product_type: string) => {
    if (product_type.toLocaleLowerCase() === "poultry") {
      if (size === 1) {
        return "Xs";
      } else if (size === 2) {
        return "Small";
      } else if (size === 3) {
        return "Medium";
      } else if (size === 4) {
        return "Large";
      } else if (size === 5) {
        return "Xl";
      }
    } else if (product_type.toLocaleLowerCase() === "seafoods") {
      if (size === 1) {
        return "Meduim";
      } else if (size === 2) {
        return "Large";
      } else if (size === 3) {
        return "Xl";
      } else if (size === 4) {
        return "Bundle(can choose size)";
      }
    }
  };

  const isItemExistInCart = () => {
    const findIndex = cartItems.findIndex((item) => item.id == info.id);

    if (findIndex >= 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddToCart = () => {
    // const findIndex = cartItems.findIndex((item) => item.id == info.id);

    // // IF EXIST UPDATE QUANTITY ELSE ADD
    // if (findIndex >= 0) {
    //   // const existing_cart_item = cartItems[findIndex];
    //   // const existing_cart_item_quantity = existing_cart_item.quantity;

    //   // const updatedCartItem = {
    //   //   id: info.id,
    //   //   productType: info.productType,
    //   //   product_name: info.product_name,
    //   //   img: info.img,
    //   //   price: info.price,
    //   //   desc: info.desc,
    //   //   size: info.size,
    //   //   purchase_option: info.purchase_option,
    //   //   quantity: existing_cart_item_quantity + 1,
    //   //   cartIndex: findIndex,
    //   // };

    //   dispatch(removeToCart(findIndex));
    // } else {
    const newCartItem = {
      id: info.id,
      productType: info.productType,
      product_name: info.product_name,
      img: info.img,
      price: info.price,
      desc: info.desc,
      size: info.size,
      purchase_option: info.purchase_option,
      quantity: 1,
    };
    dispatch(addToCart(newCartItem));
    // }
  };
  return (
    // <Link href={`${pathname + "/" + link}`}>
    <>
      <Card
        key={info?.id}
        className="w-62"
        renderImage={() => (
          <Image
            width={200}
            height={200}
            src={info?.img}
            alt={info?.productType}
            className="m-auto"
          />
        )}
      >
        <p className="text-sm font-bold tracking-tight text-gray-700 dark:text-white">
          {info?.desc} ( {getSize(info?.size, info?.productType)} )
        </p>

        <p className="text-sm font-serif font-semibold text-teal-800">
          ₱ {info?.price}.00
        </p>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-end">
          {isItemExistInCart() ? (
            <Button
              as={Link}
              href="/cart"
              size={"xs"}
              className=" focus:ring-0  text-xs bg-white hover:bg-teal-800 hover:text-white text-teal-800 border-2 border-teal-800 hover:border-0 hover:p-1"
            >
              <div className="flex items-center">
                <FaCartFlatbed className="mr-2 h-5 w-5" />
                View basket
              </div>
            </Button>
          ) : (
            <Button
              onClick={() => handleAddToCart()}
              size={"xs"}
              className=" focus:ring-0  text-xs bg-white hover:text-white text-teal-800 border-2 border-teal-800 hover:border-0 hover:p-1"
            >
              <div className="flex items-center">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Add to basket
              </div>
            </Button>
          )}
        </div>
      </Card>
    </>

    //    </Link>
  );
}
