import ProductLoadingSkeleton from "@/components/ProductLoadingSkeleton";
import ProductSidebarLoadingSkeleton from "@/components/ProductSidebarLoadingSkeleton";
import React from "react";

export default function ProductTypeLoading() {
  return (
    <div className="flex">
      <div className="w-40  mr-2">
        <ProductSidebarLoadingSkeleton />
      </div>
      <div className="w-full">
        <ProductLoadingSkeleton />
      </div>
    </div>
  );
}
