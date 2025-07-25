'use client';

import Link from "next/link";
import type { UserType } from "@/types";
import "./user.css";

export default function User({ user }: { user: UserType }) {

    return (
        <Link href={`/${user.id}?name=${user.name}`}>
            <div className='user-row'>
                <div>
                    {user.name} | <span className="text-xs text-blue-500">@{user.username}</span>
                </div>

                <div className="text-sm">
                    {user.phone} | {user.email}
                </div>
            </div>
        </Link>
    )
};
