import ProductSidebarLoadingSkeleton from "@/components/ProductSidebarLoadingSkeleton";
import ProductsSidebar from "@/components/ProductsSidebar";
import { Suspense } from "react";

export default function ProductTypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
