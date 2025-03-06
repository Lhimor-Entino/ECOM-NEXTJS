"use client";
import { ProductCard } from "@/components/ProductCard";
import { product_data } from "@/data/product";

export default function ProductPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-2  place-items-center">
      {product_data.length > 0
        ? product_data?.map((pd, index) => (
          <ProductCard
            info={pd}
            key={index}
          // link={`/products/${pd.productType.toLowerCase()}/${pd.product_name.toLowerCase()}/${pd.id}`}
          />
        ))
        : ""}
    </div>
  );
};

