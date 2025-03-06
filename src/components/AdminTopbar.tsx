"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdSettingsSuggest } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { RiNotification2Line } from "react-icons/ri";
import { TbSettings2 } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
export default function AdminTopbar() {
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    if (pathName.includes("products")) {
      setCurrentPage("Products");
    } else if (pathName.includes("dashboard")) {
      setCurrentPage("Dashboard");
    } else if (pathName.includes("orders")) {
      setCurrentPage("Orders");
    } else if (pathName.includes("finances")) {
      setCurrentPage("Finances");
    } else {
      setCurrentPage("Analytics");
    }
  }, [pathName]);

  return (
    <div className="pt-3">
      {" "}
      <div className="flex justify-between  items-center">
        <p className="font-bold text-teal-800 text-xl">{currentPage}</p>
        <div className="flex items-center w-1/6 justify-end">
          <TbSettings2 className="text-teal-800 text-4xl mr-2 hover:cursor-pointer hover:bg-teal-100 p-2 rounded-full" />
          <TiMessages className="text-teal-800 text-4xl mr-2 hover:cursor-pointer hover:bg-teal-100 p-2 rounded-full" />
          <RiNotification2Line className="text-teal-800 text-4xl hover:cursor-pointer hover:bg-teal-100 p-2 rounded-full" />
        </div>
      </div>{" "}
    </div>
  );
}
