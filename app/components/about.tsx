import AboutIllustrator from "@/public/about-illustrator.svg";
import AboutBg from "@/public/about-img.webp";
import { Mulish } from "next/font/google";
import Image from "next/image";
import React from "react";

const mulish = Mulish({ subsets: ["latin"] });

function About() {
  return (
    <section id="about" className="py-[15rem] bg-white">
      <div className="app-container max-[800px]:flex-col max-[800px]:gap-6 flex items-center">
        <div className="flex-1 relative">
          <Image
            src={AboutBg}
            className="w-[80%] max-[800px]:w-full h-[35rem] rounded-[1.7rem] object-cover"
            alt="about section background"
          />
          <span className="w-[19rem] h-[19rem] bottom-[-33px] shadow-sm right-[30px] rounded-[50%] bg-white absolute">
            <Image
              src={AboutIllustrator}
              className="about-image"
              alt="about section illustration"
            />
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-[10px]">
            <h3 className="section-heading">ABOUT ME</h3>
            <h4 className="section-subheading">
              Passionate Software Engineer Maestro
              <br />
              <span>Thriving in Lagos, Nigeria 🌐</span>
            </h4>
            <p
              className={`text-primary text-justify text-tunes-paragraph font-medium leading-[1.5] ${mulish.className}`}
            >
              With over 5 years of experience as a dedicated Sofware Engineer, I
              excel in crafting dynamic web applications using TypeScript,
              React, and NextJs. My comprehensive understanding of backend
              technologies like NodeJs, Express, and NestJS enables me to create
              more efficient and well-integrated frontend solutions. I leverage
              my full-stack knowledge to build seamless, high-performing
              applications that offer a robust user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
