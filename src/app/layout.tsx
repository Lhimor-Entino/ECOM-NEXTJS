import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import AnnouncementBanner from "@/components/Banner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MyProvider } from "./redux/myProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriHive - Home",
  description: "home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <MyProvider>
          <div className="flex">
            <div className="w-full">
              <div className="min-h-screen">
                <div>{children}</div>
              </div>
            </div>
          </div>
        </MyProvider>
      </body>
    </html>
  );
}
