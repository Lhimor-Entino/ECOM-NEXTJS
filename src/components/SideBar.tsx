"use client";

import { Sidebar } from "flowbite-react";

import { useRouter } from "next/navigation";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

const SideBar = () => {
  const isLoggedIn = false;
  const router = useRouter();

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example ">
      <Sidebar.Logo
        href="#"
        onClick={() => router.push("/")}
        img="https://flowbite.com/docs/images/logo.svg"
        imgAlt="Flowbite logo"
      >
        AgriHive
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={() => router.push("/products")}
            icon={HiChartPie}
          >
            Products
          </Sidebar.Item>

          <Sidebar.Collapse icon={HiShoppingBag} label="Transactions">
            <Sidebar.Item onClick={() => router.push("/orders")}>
              Orders
            </Sidebar.Item>
            <Sidebar.Item onClick={() => router.push("/refunds")}>
              Refunds
            </Sidebar.Item>
            <Sidebar.Item onClick={() => router.push("/shipping")}>
              Shipping
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item
            onClick={() => router.push("/harvesting-schedule")}
            icon={HiUser}
          >
            Harvest Schedules
          </Sidebar.Item>
          <Sidebar.Item onClick={() => router.push("/pricing")} icon={HiUser}>
            Pricing
          </Sidebar.Item>
          <Sidebar.Item onClick={() => router.push("/inbox")} icon={HiInbox}>
            Inbox
          </Sidebar.Item>

          {isLoggedIn ? (
            <Sidebar.Item
              onClick={() => router.push("/profile")}
              icon={HiArrowSmRight}
            >
              Profile
            </Sidebar.Item>
          ) : (
            <Sidebar.Item
              onClick={() => router.push("/login")}
              icon={HiArrowSmRight}
            >
              Sign In
            </Sidebar.Item>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
