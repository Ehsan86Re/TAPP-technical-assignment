'user client';

import Link from "next/link";
import Image from "next/image";
import "./side-menu.css";

export default function SideMenu() {
  return (
    <aside className="side-style">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="item">
          <Image src="/images/users.png" alt="Description of my image" width={25} height={20}/>
          <Link className="w-full" href="/users">Users</Link>
        </li>
        <li className="item">
          <Image src="/images/add-user.png" alt="Description of my image" width={25} height={20}/>
          <Link className="w-full" href="/users">Create User</Link>
        </li>
      </ul>
    </aside>
  )
};
