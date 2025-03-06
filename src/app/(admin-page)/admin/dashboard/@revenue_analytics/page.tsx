"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Label, Select } from "flowbite-react";
import { Suspense } from "react";
const data: any[] = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    color: "bg-red-400",
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    color: "bg-green-300",
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    color: "bg-yellow-400",
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    color: "bg-blue-400",
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    color: "bg-teal-400",
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    color: "bg-orange-400",
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    color: "bg-lime-400",
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    color: "bg-lime-400",
  },
];

export default function Page() {
  return (
    <div className="mt-5">
      <div className="flex items-center">
        <div className="flex flex-col  w-4/5">
          <p className="text-teal-800 text-md font-bold">Revenue Analytics</p>
          <div className="grid grid-cols-10 grid-flow-col gap-1 mt-2 mb-2 w-4/5">
            {data.map((dt, index) => (
              <div key={index} className="flex items-center mt-2">
                <div
                  className={`text-white text-xs text-center rounded-sm  w-3 h-3 ${dt.color}`}
                ></div>
                <p className="ml-2 text-xs text-teal-800 font-bold">
                  {dt.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end w-1/5">
          <Select
            id="countries"
            size={1}
            className="text-xs p-0 focus:ring-0"
            required
          >
            <option>Month</option>
            <option>Yearly</option>
          </Select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300} className="mt-5">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,

            bottom: 5,
          }}
          className="text-xs font-semibold text-teal-800"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            color="red"
            style={{ color: "transparent" }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
