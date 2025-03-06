import Breadcrumbs from "@/components/Breadcrumbs";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
}
