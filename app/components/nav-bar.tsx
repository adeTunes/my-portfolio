import { navItems } from "../constants/navlist";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <nav className="flex fixed z-10 w-full top-0 items-center shadow-sm px-10 py-[25px] bg-white text-primary justify-between">
      <h3 className="font-bold text-[20px] text-tunes-heading cursor-pointer">
        <a href="#home">
          <Image
            src="/logo.svg"
            width={83}
            height={23}
            className="w-[96px] h-[23px]"
            alt="logo"
          />
        </a>
      </h3>
      <ul className="flex max-[520px]:hidden items-center gap-[2rem]">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="text-tunes-heading text-[17px] font-semibold transition-all duration-[.23s]"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <MobileSidebar />
    </nav>
  );
}

export default NavBar;
