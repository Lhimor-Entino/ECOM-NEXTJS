"use client";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
const data = [
  { name: "Online", value: 400, fill: "#52b788" },
  { name: "Store", value: 300, fill: "#f49f0a" },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g style={{ outline: "none" }}>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-md font-bold"
      >
        {payload.name}
      </text>
      <Sector
        style={{ outline: "none" }}
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="0"
      />
      <Sector
        style={{ outline: "none" }}
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        stroke="0"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={fill}
        fontSize={".6rem"}
        fontWeight={600}
      >{`Orders ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={fill}
        fontSize={".6rem"}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: any) => {
    setActiveIndex(index);
  };
  return (
    <div className="pl-3 pr-3 pt-2 bg-teal-50 rounded">
      <div className="flex items-center justify-between">
        <p className="text-teal-800 text-md font-bold">Mode of Order</p>
        <div>
          <MdOutlineMoreHoriz className="text-teal-800" />
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height={250}
        style={{ outline: "none" }}
      >
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape} // Ensure this function is defined
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#007a7b"
            dataKey="value"
            onMouseEnter={onPieEnter}
            style={{ outline: "none", border: "none" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-evenly">
        <div className="flex items-center">
          <RiCheckboxBlankFill style={{ color: "#52b788" }} />
          <p className="text-teal-800 text-xs font-semibold ml-2">Online</p>
        </div>
        <div className="flex items-center">
          <RiCheckboxBlankFill style={{ color: "#f49f0a" }} />
          <p className="text-teal-800 text-xs font-semibold ml-2">Store</p>
        </div>
      </div>
    </div>
  );
}
