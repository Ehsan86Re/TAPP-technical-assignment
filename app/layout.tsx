import type { Metadata } from "next";
import "./globals.css";

import SideMenu from "@/components/sideMenu/SideMenu";

export const metadata: Metadata = {
  title: "TAPP Sample App",
  description: "A simple description for this sample app",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
      <body className="flex flex-row h-screen">
        <SideMenu />
        <main className="w-full p-4">{children}</main>
      </body>
    </html>
  );
}
