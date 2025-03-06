"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { Button } from "flowbite-react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "@/app/redux/store";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 1,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: ".7rem",
    fontWeight: "bold",
    backgroundColor: "#fff",
    color: "#006d77",
  },
}));

interface SegmentObject {
  link: string;
  name: string;
}
export default function Breadcrumbs() {
  const pathname = usePathname();

  const cartItems = useAppSelector((state) => state.cartSlice);
  const [segments, setSegments] = useState<SegmentObject[]>([]);

  useEffect(() => {
    const url_segments = pathname.split("/");

    let i: number = 0;
    const formatted = url_segments.map((s, index) => {
      i++;
      return {
        link: pathname.split("/", i).join("/"), // CONVERT THE ARRAY TO STRING USING JOIN AND FORMAT IT TO (segment1/segment2/segment3)
        name: s,
      };
    });
    console.log(formatted);
    setSegments(formatted);
  }, [pathname]);

  return (
    <div className="bg-teal-50 p-2 rounded flex justify-between pr-5 items-center">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item icon={HiHome}>
          <Link href={"/"}>AgriHive </Link>
        </Breadcrumb.Item>
        {segments?.map((segment, index) =>
          index !== 0 && isNaN(Number(segment.name)) ? (
            <Breadcrumb.Item href="" key={index}>
              {" "}
              <Link
                href={segment.link}
                className=" hover:text-teal-900 hover:underline"
              >
                {segment.name}
              </Link>
            </Breadcrumb.Item>
          ) : (
            ""
          )
        )}
      </Breadcrumb>
      <div>
        <Link href={"/cart"}>
          <Button gradientDuoTone="greenToBlue" size={"sm"}>
            <div className="flex items-center">
              <p className="text-xs mr-1"> My Cart</p>
              <StyledBadge badgeContent={cartItems.length} max={999}>
                <BsCart4 className="text-white h-5 w-5" />
              </StyledBadge>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
