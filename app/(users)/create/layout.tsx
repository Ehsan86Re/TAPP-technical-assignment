import Header from "@/components/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create New User",
    description: "Create New User Form",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

    return (
        <div>
            <Header>
                <h1 className="font-extrabold">Create User</h1>
            </Header>
            {children}
        </div>
    );
};
