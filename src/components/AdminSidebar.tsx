"use client";

import { Sidebar } from "flowbite-react";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { IoBasketOutline } from "react-icons/io5";
import { BsReceiptCutoff } from "react-icons/bs";
import { PiHandCoinsFill } from "react-icons/pi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdSettingsSuggest } from "react-icons/md";
import { CiInboxIn } from "react-icons/ci";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
export default function AdminSidebar() {
  const isLoggedIn = false;
  const router = useRouter();

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example ">
      <Sidebar.Logo
        href="#"
        onClick={() => router.push("/admin")}
        img="https://flowbite.com/docs/images/logo.svg"
        imgAlt="Flowbite logo"
      >
        <p className=" text-base font-bold text-teal-900"> AgriHive</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={() => router.push("/admin/dashboard")}
            icon={RxDashboard}
            className="text-teal-600 text-sm font-semibold"
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => router.push("/admin/products")}
            icon={IoBasketOutline}
            className="text-teal-600 text-sm font-semibold"
          >
            Products
          </Sidebar.Item>

          <Sidebar.Item
            icon={BsReceiptCutoff}
            className="text-teal-600 text-sm font-semibold"
          >
            Orders
          </Sidebar.Item>
          <Sidebar.Item
            icon={PiHandCoinsFill}
            className="text-teal-600 text-sm font-semibold"
          >
            Finances
          </Sidebar.Item>
          <Sidebar.Item
            icon={TbDeviceDesktopAnalytics}
            className="text-teal-600 text-sm font-semibold"
          >
            Analytics
          </Sidebar.Item>

          {isLoggedIn ? (
            <Sidebar.Item
              icon={HiArrowSmRight}
              className="text-teal-600 text-xs font-semibold"
            >
              Profile
            </Sidebar.Item>
          ) : (
            <Sidebar.Item
              onClick={() => router.push("/login")}
              icon={HiArrowSmRight}
              className="text-teal-600 text-sm font-semibold"
            >
              Sign In
            </Sidebar.Item>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
