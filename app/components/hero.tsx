"use client";

import { socialLinks } from "../constants/social-links";
import { techStack } from "../constants/tech-stack";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-[120px] pb-[80px] bg-gray-50 flex items-center overflow-hidden"
    >
      <div className="flex gap-[10rem] flex-col app-container relative">
        {/* Abstract background shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />

        <div className="flex justify-between max-[835px]:pt-10 max-[835px]:flex-col-reverse items-center gap-12 relative z-10">
          <div className="flex gap-8 max-w-[60rem] flex-col">
            <h1 className="text-6xl md:text-8xl leading-tight font-black text-gray-900 tracking-tighter">
              Full-Stack <span className="text-blue-600">Developer</span>
            </h1>
            <h4 className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed">
              Specializing in{" "}
              <span className="text-gray-900 font-bold">
                High-Performance Frontend
              </span>
              ,{" "}
              <span className="text-gray-900 font-bold">
                Cross-Platform Mobile
              </span>
              , and{" "}
              <span className="text-gray-900 font-bold">Scalable Backends</span>
              .
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  className="p-3 bg-white shadow-sm border border-gray-100 rounded-2xl transition-all hover:scale-110 hover:shadow-md hover:text-blue-600 duration-300 text-[2.5rem] text-gray-700"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] rotate-6 blur-sm opacity-50" />
            <div className="w-[30rem] h-[30rem] md:w-[35rem] md:h-[35rem] hero-img relative z-10 shadow-2xl border-8 border-white" />
          </div>
        </div>

        <div className="flex items-center gap-[4rem] flex-wrap relative z-10">
          <p className="font-black text-lg uppercase tracking-widest text-gray-400 whitespace-nowrap pr-8 border-r-2 border-gray-200">
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center gap-8">
            {techStack.map((item, idx) => (
              <div
                key={idx}
                className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              >
                <Image
                  width={60}
                  height={35}
                  className="h-[3.5rem] md:h-[4.5rem] w-auto cursor-pointer"
                  src={item}
                  alt="skill-icon"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
