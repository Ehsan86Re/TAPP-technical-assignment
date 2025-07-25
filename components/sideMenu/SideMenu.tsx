'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./side-menu.css";

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div onClick={onClick} className={isOpen ? "side-button hidden" : "side-button"}>
                <div className="font-extrabold text-2xl">{isOpen ? '<' : '>'}</div>
            </div>
            <aside className={isOpen ? "side-style qqq" : "side-style"}>
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                    <div onClick={onClick} className="close-button">x</div>
                </div>
                <ul>
                    <li className="item">
                        <Image src="/images/users.png" alt="Description of my image" width={25} height={20}/>
                        <Link onClick={onClick} className="w-full" href="/users">Users</Link>
                    </li>
                    <li className="item">
                        <Image src="/images/add-user.png" alt="Description of my image" width={25} height={20}/>
                        <Link className="w-full" href="/create">Create User</Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
};
