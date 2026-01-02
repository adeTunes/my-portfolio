"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "../constants/navlist";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";
import { cn } from "../lib/utils";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "flex fixed z-[100] w-full top-0 items-center px-6 md:px-12 py-5 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex w-full items-center justify-between max-w-[120rem] mx-auto">
        <h3 className="font-bold text-[20px] text-tunes-heading cursor-pointer">
          <a href="#home">
            <span className="text-2xl font-black tracking-tighter text-blue-600">
              BA.
            </span>
          </a>
        </h3>
        <ul className="flex max-[520px]:hidden items-center gap-[3rem]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="text-gray-700 hover:text-blue-600 text-[16px] font-bold transition-all duration-300"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
