import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { product_data } from "@/data/product";
import { ProductCard } from "@/components/ProductCard";
import ProductSidebarLoadingSkeleton from "@/components/ProductSidebarLoadingSkeleton";
import ProductsSidebar from "@/components/ProductsSidebar";

// DYNAMIC METADATA
export async function generateMetadata({
  params,
}: {
  params: { type: string };
}): Promise<Metadata> {
  // read route params
  const type = params.type;

  return {
    title: `AgriHive - Products (${type.toUpperCase()})`,
    description: "Products",
  };
}
const ProducTypePage = ({ params }: { params: { type: string } }) => {
  if (params.type !== "seafoods" && params.type !== "poultry") {
    return notFound();
  }

  return (
    <div className="flex">
      <div className="w-56  mr-2">
        <ProductsSidebar />
      </div>
      <div className=" w-full mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-2 border-2 border-red-50 place-items-center">
          {product_data?.map((pd, index) =>
            pd?.productType.toLowerCase() === params.type ? (
              <ProductCard
                info={pd}
                link={pd.product_name.toLocaleLowerCase() + "/" + pd?.id}
                key={index}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProducTypePage;
