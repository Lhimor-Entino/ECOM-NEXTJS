import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
export default function ProductSidebarLoadingSkeleton() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Skeleton variant="circular" width={25} height={25} />
        <Skeleton animation="wave" height={40} width="82%" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton variant="circular" width={25} height={25} />
        <Skeleton animation="wave" height={40} width="82%" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton variant="circular" width={25} height={25} />
        <Skeleton animation="wave" height={40} width="82%" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton variant="circular" width={25} height={25} />
        <Skeleton animation="wave" height={40} width="82%" />
      </div>
    </div>
  );
}
