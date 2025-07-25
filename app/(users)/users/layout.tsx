import Header from "@/components/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users List",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

    return (
        <div>
            <Header>
                <h1 className="font-extrabold">Users List</h1>
            </Header>
            {children}
        </div>
    );
};
