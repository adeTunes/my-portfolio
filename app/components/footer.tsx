import { socialLinks } from "../constants/social-links";
import React from "react";

function Footer() {
  return (
    <footer className="bg-tunes-heading py-[5rem]">
      <div className="app-container flex max-[405px]:flex-col max-[405px]:gap-8 items-center justify-between">
        <h3 className="text-primary text-white text-center font-bold">
          Copyright &copy; 2024. All rights are reserved
        </h3>
        <span className="flex items-center gap-[2rem]">
          {socialLinks.map(({ Icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              style={{ transition: "all .2s ease-in-out" }}
              className="cursor-pointer text-white hover:scale-[1.2] text-[2.3rem]"
            >
              <Icon size={36} />
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
