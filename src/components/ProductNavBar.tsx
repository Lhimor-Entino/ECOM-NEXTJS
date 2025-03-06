"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import EggRoundedIcon from "@mui/icons-material/EggRounded";
import SetMealRoundedIcon from "@mui/icons-material/SetMealRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
const active = "text-teal-600 font-bold border-b-2 border-teal-600 "; //  classes
const not_active = "text-gray-500 font-semiBold"; //  classes

export default function ProductNavBar() {
  const pathName = usePathname();
  return (
    <Navbar fluid rounded>
      <Navbar.Collapse>
        <Link
          href="/products"
          className={`flex items-center text-xs ${
            pathName === "/products" ? active : not_active
          }`}
        >
          <CategoryRoundedIcon className="mr-1" />
          All
        </Link>

        <Link
          href="/products/seafoods"
          className={`flex items-center text-xs ${
            pathName.includes("/products/seafoods") ? active : not_active
          }`}
        >
          {" "}
          <SetMealRoundedIcon className="mr-1" />
          Seafoods
        </Link>

        <Link
          href="/products/poultry"
          className={`flex items-center text-xs ${
            pathName.includes("/products/poultry") ? active : not_active
          }`}
        >
          <EggRoundedIcon className="mr-1" />
          Poultry
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
