import SideBar from "@/components/SideBar";
import AnnouncementBanner from "@/components/Banner";
export default function UserPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <div className="flex-row">
          <SideBar />
        </div>

        <div className="w-full">
          <AnnouncementBanner />

          <div className="min-h-screen">
            <div className="mt-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
