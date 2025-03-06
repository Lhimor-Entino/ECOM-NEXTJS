"use client";
import { SVGProps } from "react";
import { ListGroup } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Badge, { BadgeProps } from "@mui/material/Badge";

import { styled } from "@mui/material/styles";
import { GiDoubleFish } from "react-icons/gi";

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

interface ProductPurchaseOptionObject {
  option: string;
  sizes: { size: string; quantity: number }[];
  sell_info: string;
  product_type: string;
  product_name: string;
  icon: React.FC<SVGProps<SVGSVGElement>> | null; // Define icon type correctly
}

export default function ProductPurchaseOptionSidebar({
  product_name,
}: {
  product_name: string;
}) {
  const pathName = usePathname();

  const optionList: ProductPurchaseOptionObject[] = [
    {
      option: "Per Kilo",
      sizes: [
        { size: "Medium", quantity: 234 },
        { size: "Large", quantity: 234 },
        { size: "XL", quantity: 234 },
      ],
      sell_info: "Per kilo (5 kg min) / Per bundle",
      product_type: "seafoods",
      product_name: "bangus",
      icon: GiDoubleFish,
    },
    {
      option: "Bundle",
      sizes: [
        { size: "Medium", quantity: 234 },
        { size: "Large", quantity: 234 },
        { size: "XL", quantity: 234 },
      ],
      product_type: "seafoods",
      product_name: "bangus",
      sell_info: "Bundle",

      icon: GiDoubleFish,
    },

    {
      option: "Per Tray",
      sizes: [
        { size: "XS", quantity: 231 },
        { size: "Small", quantity: 123 },
        { size: "Medium", quantity: 100 },
        { size: "Large", quantity: 41 },
        { size: "XL", quantity: 123 },
      ],
      sell_info: "Per kilo (5 kg min) / Per bundle",
      product_type: "seafoods",
      product_name: "eggs",
      icon: GiDoubleFish,
    },
    {
      option: "Bundle",
      sizes: [
        { size: "XS", quantity: 231 },
        { size: "Small", quantity: 123 },
        { size: "Medium", quantity: 100 },
        { size: "Large", quantity: 41 },
        { size: "XL", quantity: 123 },
      ],
      product_name: "eggs",
      product_type: "seafoods",
      sell_info: "Bundle",
      icon: GiDoubleFish,
    },
  ];

  return (
    <div>
      <ListGroup className="w-{full outline-none border-none">
        {optionList.map((option, index) =>
          product_name === option.product_name.toLowerCase() ? (
            <Link href={"#"}>
              <ListGroup.Item
                icon={option.icon || undefined}
                className={`text-xs mt-2  ${
                  pathName.includes("#") ? active : not_active
                }`}
              >
                <Tooltip
                  content={option.sell_info}
                  placement="left"
                  className="text-xs bg-teal-800 text-white"
                  style="dark"
                >
                  <StyledBadge badgeContent={10} max={999}>
                    <p className="p-1"> {option.option}</p>
                  </StyledBadge>
                </Tooltip>
              </ListGroup.Item>
            </Link>
          ) : (
            ""
          )
        )}
      </ListGroup>
    </div>
  );
}
