import { Card } from "flowbite-react";
import { FaPesoSign } from "react-icons/fa6";
import { BiShowAlt } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { FaRegCalendar } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { BsCashCoin } from "react-icons/bs";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { BsCartCheckFill } from "react-icons/bs";
export default function Page() {
  return (
    <div className="grid grid-cols-1 grid-flow-col sm:grid-cols-3 gap-3">
      {/* <div
        className=" p-2 rounded-md relative"
        style={{ border: "1px solid #e0eef1" }}
      >
        <div className="flex items-center justify-center">
          <div className="bg-teal-50 p-3">
            <FaPesoSign className="text-teal-800 text-md" />
          </div>

          <div className="ml-4">
            <h5 className=" flex items-center tracking-tight text-sm font-bold text-teal-800">
              <FaPesoSign className="text-sm text-teal-800" />
              &nbsp; 1,254,245.6
            </h5>

            <p className="text-xs text-teal-500 font-light  mt-1">
              Total revenue + 7.7%
            </p>
          </div>
        </div>
        <div className=" absolute  top-1 right-1 text-teal-800 ">
          <FaRegCalendar className="text-xs hover:cursor-pointer" />
        </div>
      </div>
      <div
        className=" p-2 rounded-md relative"
        style={{ border: "1px solid #e0eef1" }}
      >
        <div className=" flex items-center  justify-center">
          <div className="bg-teal-50 p-3">
            <BiShowAlt className="text-teal-800 text-md" />
          </div>
          <div className="ml-4">
            <h5 className=" flex items-center font-bold tracking-tight text-sm text-teal-800">
              7,297
            </h5>
            <p className="text-xs text-teal-500 font-light  mt-1">
              Site visitors -45
            </p>
          </div>
        </div>
        <div className=" absolute  top-1 right-1 text-teal-800 ">
          <FaRegCalendar className="text-xs hover:cursor-pointer" />
        </div>
      </div>
      <div
        className=" p-2 rounded-md relative"
        style={{ border: "1px solid #e0eef1" }}
      >
        <div className="flex items-center  justify-center">
          <div className="bg-teal-50 p-3">
            <RxLapTimer className="text-teal-800 text-md" />
          </div>
          <div className="ml-4">
            <h5 className=" flex items-center font-bold tracking-tight text-sm text-teal-800">
              1m 30s
            </h5>
            <p className="text-xs text-teal-500 font-light  mt-1">
              Visit duration + 7.7%
            </p>
          </div>
        </div>
        <div className=" absolute  top-1 right-1 text-teal-800 ">
          <FaRegCalendar className="text-xs hover:cursor-pointer" />
        </div>
      </div> */}

      <div className="bg-teal-50 p-3 rounded">
        <div className="flex flex-row justify-between items-center pb-4  border-b border-dashed border-gray-300">
          <div className="flex flex-row items-center">
            <VscGraph className="text-red-400" />
            <p className="text-teal-600 text-xs font-semibold ml-2">
              Total Sales
            </p>
          </div>
          <div>
            <MdOutlineMoreHoriz />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-teal-600 font-bold">$9140.20</p>
          <div className="flex flex-col">
            <div className="flex justify-center items-center text-green-500">
              <HiMiniArrowTrendingUp className="text-lg" />
              <p className="ml-2 text-xs font-semibold">+3%</p>
            </div>
            <p className="text-xs font-semibold text-teal-600 ">Last 7 days</p>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 p-3 rounded">
        <div className="flex flex-row justify-between items-center pb-4  border-b border-dashed border-gray-300">
          <div className="flex flex-row items-center">
            <BsCashCoin className="text-yellow-400" />
            <p className="text-teal-600 text-xs font-semibold ml-2">
              Total Earning
            </p>
          </div>
          <div>
            <MdOutlineMoreHoriz />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-teal-600 font-bold">$4203.20</p>
          <div className="flex flex-col">
            <div className="flex justify-center items-center text-red-500">
              <HiMiniArrowTrendingDown className="text-lg" />
              <p className="ml-2 text-xs font-semibold">-10%</p>
            </div>
            <p className="text-xs font-semibold text-teal-600">Last 7 days</p>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 p-3 rounded">
        <div className="flex flex-row justify-between items-center pb-4  border-b border-dashed border-gray-300">
          <div className="flex flex-row items-center">
            <BsCartCheckFill className="text-green-500" />
            <p className="text-teal-600 text-xs font-semibold ml-2">
              Total Orders
            </p>
          </div>
          <div>
            <MdOutlineMoreHoriz />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-teal-600 font-bold">150</p>
          <div className="flex flex-col">
            <div className="flex justify-center items-center text-green-400">
              <HiMiniArrowTrendingUp className="text-lg" />
              <p className="ml-2 text-xs font-bold">+30%</p>
            </div>
            <p className="text-xs font-semibold text-teal-600">Last 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
