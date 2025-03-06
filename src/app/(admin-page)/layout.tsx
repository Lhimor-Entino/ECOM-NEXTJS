import AnnouncementBanner from "@/components/Banner";
import AdminSidebar from "@/components/AdminSidebar";
import AdminTopbar from "@/components/AdminTopbar";

export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <div className="flex-row">
          <AdminSidebar />
        </div>

        <div className="w-full">
          <div className="min-h-screen">
            <div className=" pr-4 pl-2">
              <AdminTopbar />
            </div>
            <div className="mt-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
