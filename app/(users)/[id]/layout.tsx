'use client';

import Header from "@/components/header/Header";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    const navigation = useRouter();

    return (
        <div>
            <Header>
                <button onClick={() => navigation.back()}>
                    Back to Users List
                </button>
            </Header>
            {children}
        </div>
    );
};
