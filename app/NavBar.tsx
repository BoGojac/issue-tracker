import React from "react";
import Link from "next/link";
import {AiFillBug} from 'react-icons/ai'

function NavBar() {
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issue" },
  ];
  return (
      <nav className="flex space-x-10 border-b h-14 items-center px-7 mb-5">
          <Link href="/"><AiFillBug /></Link>
          <ul className="flex space-x-7">
              {links.map(link => <Link key={link.href} className="text-zinc-400 hover:text-zinc-800 transition-colors" href={link.href}>{ link.lable}</Link>)}
          </ul>
    </nav>
  );
}

export default NavBar;
