'use client';

import Link from "next/link";
import type { UserType } from "@/types";
import "./user.css";

export default function User({ user }: { user: UserType }) {
    return (
        <Link href={`/user/${user.id}`}>
            <div className='user-row'>{user.email}</div>
        </Link>
    )
};
