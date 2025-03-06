"use client";
import { notFound } from "next/navigation";
import product_data from "@/data/product";

import { HiEye, HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Button } from "flowbite-react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Badge } from "flowbite-react";
import { Suspense } from "react";
import ProductLoadingSkeleton from "@/components/ProductLoadingSkeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default function SpecificProductPage({
  params,
}: {
  params: { specific_prod: string };
}) {
  const pathName = usePathname();
  if (
    params.specific_prod !== "bangus" &&
    params.specific_prod !== "tilapia" &&
    params.specific_prod !== "alimasag" &&
    params.specific_prod !== "sugpo" &&
    params.specific_prod !== "eggs" &&
    params.specific_prod !== "rtl" &&
    params.specific_prod !== "consumeable"
  ) {
    return notFound();
  }

  const hasAvailableStock = () => {
    const findIndex = product_data?.findIndex(
      (dt) => dt?.product_name.toLocaleLowerCase() === params.specific_prod
    );

    if (findIndex < 0) {
      // MEANS NO PRODUCT AVAILABLE
      return false;
    }
    return true;
  };

  return (
    <div className="flex">
      {hasAvailableStock() ? (
        <>
          {" "}
          {/* <div className="w-56  mr-2">
            <ProductPurchaseOptionSidebar product_name={params.specific_prod} />
          </div> */}
          <div className="w-full mt-1">
            <div className="w-fit mb-1">
              <Badge color="info" className="text-sm font-semibold">
                <div className=" flex items-center">
                  <BiSolidPurchaseTag className="mr-2" />
                  <p>{params.specific_prod.toUpperCase()}</p>
                </div>
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-2 place-items-center">
              {product_data.length > 0
                ? product_data?.map((pd, index) =>
                  pd?.product_name.toLowerCase() === params.specific_prod ? (
                    <Link key={pd?.id} href={`${pathName + "/" + pd?.id}`}>
                      <ProductCard info={pd} />
                    </Link>
                  ) : (
                    ""
                  )
                )
                : ""}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center  w-full m-20">
          <Alert
            additionalContent={
              <div>
                <p className="text-cyan-700 font-semibold mb-5">
                  {" "}
                  Click on details button to stay updated, on when the product
                  will have a stock.
                </p>
                <Link
                  href={"/harvesting-schedule"}
                  className="p-2 pl-5 pr-5 bg-teal-700 rounded-md text-white"
                >
                  Details
                </Link>
              </div>
            }
            color="success"
            icon={HiInformationCircle}
            rounded
          >
            <span className="font-medium">Product information!</span> Appologies
            this product is out of stock as of now.
          </Alert>
        </div>
      )}
    </div>
  );
}
