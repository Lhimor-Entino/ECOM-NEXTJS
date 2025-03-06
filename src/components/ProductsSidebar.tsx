"use client";
import { SVGProps } from "react";
import { ListGroup } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Badge, { BadgeProps } from "@mui/material/Badge";

import { styled } from "@mui/material/styles";
import { GiDoubleFish } from "react-icons/gi";
import { FaFish } from "react-icons/fa6";
import { FaEgg } from "react-icons/fa6";
import { GiSadCrab } from "react-icons/gi";
import { GiShrimp } from "react-icons/gi";
import { GiChicken } from "react-icons/gi";
import { GiRoastChicken } from "react-icons/gi";

import { Button, Tooltip } from "flowbite-react";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -15,
    top: 1,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: ".6rem",
    backgroundColor: "#006d77",
    color: "#fff",
  },
}));

const active = "text-teal-600 font-bold border-b-2 border-teal-600 "; //  classes
const not_active = "text-gray-500 font-semiBold"; //  classes

interface ProductObject {
  product: string;
  quantity: number;
  sell_info: string;
  link: string;
  icon: React.FC<SVGProps<SVGSVGElement>> | null; // Define icon type correctly
}
export default function ProductsSidebar() {
  const pathName = usePathname();

  const seafoodList: ProductObject[] = [
    {
      product: "Bangus",
      quantity: 150,
      sell_info: "Per kilo (5 kg min) / Per bundle",
      link: "/products/seafoods/bangus",
      icon: GiDoubleFish,
    },
    {
      product: "Tilapia",
      quantity: 100,
      sell_info: "Per kilo  / Per bundle",
      link: "/products/seafoods/tilapia",
      icon: FaFish,
    },
    {
      product: "Alimasag",
      quantity: 90,
      sell_info: "Per kilo  / Per bundle",
      link: "/products/seafoods/alimasag",
      icon: GiSadCrab,
    },
    {
      product: "Sugpo",
      quantity: 200,
      sell_info: "Per kilo  / Per bundle",
      link: "/products/seafoods/sugpo",
      icon: GiShrimp,
    },
  ];
  const poultryList: ProductObject[] = [
    {
      product: "Eggs",
      quantity: 129,
      sell_info: "Per Tray / 1/2 Tray",
      link: "/products/poultry/eggs",
      icon: FaEgg,
    },
    {
      product: "RTL",
      quantity: 201,
      sell_info: "Min purchase 10",
      link: "/products/poultry/rtl",
      icon: GiChicken,
    },
    {
      product: "For Consume",
      quantity: 100,
      sell_info: "Per kilo",
      link: "/products/poultry/consumeable",
      icon: GiRoastChicken,
    },
  ];

  const [productList, setProductList] = useState<ProductObject[]>([]);

  useEffect(() => {
    if (pathName.includes("/products/poultry")) {
      setProductList(poultryList);
    } else {
      setProductList(seafoodList);
    }
  }, [pathName, poultryList, seafoodList]);

  return (
    <div>
      <ListGroup className="w-full outline-none border-none">
        {productList?.map((product, index) => (
          <Link href={product.link} key={index}>
            <ListGroup.Item
              icon={product.icon || undefined}
              className={`text-xs mt-2  ${pathName.includes(product.link) ? active : not_active
                }`}
            >
              <Tooltip
                content={product.sell_info}
                placement="left"
                className="text-xs bg-teal-800 text-white"
                style="dark"
              >
                <StyledBadge badgeContent={product.quantity} max={999}>
                  <p className="p-1"> {product.product}</p>
                </StyledBadge>
              </Tooltip>
            </ListGroup.Item>
          </Link>
        ))}

        {/* <Link href={"/products/seafoods/tilapia"}>
          <ListGroup.Item
            icon={HiOutlineAdjustments}
            className={`text-xs  ${
              pathName.includes("/products/seafoods/tilapia")
                ? active
                : not_active
            }`}
          >
            Tilapia
          </ListGroup.Item>
        </Link>

        <Link href={"/products/seafoods/alimasag"}>
          <ListGroup.Item
            icon={HiInbox}
            className={`text-xs  ${
              pathName.includes("/products/seafoods/alimasag")
                ? active
                : not_active
            }`}
          >
            {" "}
            Alimasag
          </ListGroup.Item>
        </Link>
        <Link href={"/products/seafoods/sugpo"}>
          <ListGroup.Item
            icon={HiCloudDownload}
            className={`text-xs  ${
              pathName.includes("/products/seafoods/sugpo")
                ? active
                : not_active
            }`}
          >
            Sugpo
          </ListGroup.Item>
        </Link> */}
      </ListGroup>
    </div>
  );
}
