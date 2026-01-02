"use client";

import AboutIllustrator from "@/public/about-illustrator.svg";
import AboutBg from "@/public/about-img.webp";
import { Mulish } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const mulish = Mulish({ subsets: ["latin"] });

function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="app-container flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 relative">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2 scale-105 opacity-50 transition-transform group-hover:rotate-0" />
            <Image
              src={AboutBg}
              className="relative z-10 w-full h-[30rem] md:h-[40rem] rounded-3xl object-cover shadow-xl"
              alt="about section background"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white p-2 shadow-2xl overflow-hidden"
            >
              <Image
                src={AboutIllustrator}
                className="w-full h-full object-contain"
                alt="about section illustration"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-blue-600 font-black tracking-widest text-lg uppercase border-b-4 border-blue-600 w-fit pb-1">
              ABOUT ME
            </h3>
            <h4 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              A Seasoned Expert in Modern <br />
              <span className="text-gray-400">Web & Mobile Engineering 🌐</span>
            </h4>
            <p
              className={`text-lg md:text-xl text-gray-600 text-justify font-medium leading-relaxed ${mulish.className}`}
            >
              With over 5 years of extensive experience, I specialize in
              architecting dynamic, high-performance web applications using{" "}
              <span className="text-blue-600 font-bold">
                TypeScript, React, and Next.js
              </span>
              . My expertise extends deep into mobile development, where I build
              seamless cross-platform experiences with{" "}
              <span className="text-gray-900 font-bold">
                React Native & Expo
              </span>
              . On the backend, I leverage the power of{" "}
              <span className="text-gray-900 font-bold">Node.js</span> and the{" "}
              <span className="text-blue-600 font-bold">NestJS framework</span>{" "}
              to create scalable, enterprise-grade APIs and microservices. I
              bridge the gap between user-centric frontends and robust
              server-side logic to deliver complete, production-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="block text-3xl font-black text-blue-600 mb-1">
                5+
              </span>
              <span className="text-gray-500 font-bold text-sm uppercase tracking-wider">
                Years Experience
              </span>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="block text-3xl font-black text-blue-600 mb-1">
                50+
              </span>
              <span className="text-gray-500 font-bold text-sm uppercase tracking-wider">
                Projects Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
