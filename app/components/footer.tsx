import { socialLinks } from "../constants/social-links";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="app-container flex flex-col md:flex-row items-center justify-between gap-8">
        <h3 className="text-gray-400 text-center font-bold text-lg">
          Copyright &copy; 2026. All rights reserved.
        </h3>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ Icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              className="p-3 bg-gray-800 rounded-2xl text-white hover:text-blue-500 transition-all hover:scale-110 duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
