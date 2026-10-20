"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classnames from "classnames";
import { AiFillBug } from "react-icons/ai";

function NavBar() {
  const currentPath = usePathname();

  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-10 border-b h-14 items-center px-7 mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-7">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}>
            {link.lable}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
