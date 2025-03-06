import ProductNavBar from "@/components/ProductNavBar";
import ProductsSidebar from "@/components/ProductsSidebar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AgriHive - Products",
  description: "Products",
};
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <ProductNavBar />
      <div className="flex mt-4">
        <div className=" w-full">{children}</div>
      </div>
    </div>
  );
}
