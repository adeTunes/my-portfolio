import { socialLinks } from "../constants/social-links";
import { techStack } from "../constants/tech-stack";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen py-[80px] bg-tunes-hero flex items-center"
    >
      <section className="flex gap-[10rem] flex-col app-container">
        <div className="flex justify-between max-[835px]:pt-10 max-[835px]:flex-col-reverse items-center gap-4">
          <div className="flex gap-6 max-w-[55rem] flex-col">
            <h1 className="text-hero leading-[1.2] font-bold">
              Software Engineer 👋
            </h1>
            <h4 className="text-tunes-subheading font-medium text-primary leading-[1.6]">
              Hi, I&apos;m Babatunde Adekunle. A passionate Software Engineer
              based in Lagos, Nigeria. 📍
            </h4>
            <div className="flex items-center gap-[1.3rem]">
              {socialLinks.map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  className="transition-all cursor-pointer hover:text-tunes-link duration-[0.2s] text-[3rem] text-tunes-heading"
                >
                  <Icon size={32} />
                </a>
              ))}
            </div>
          </div>
          <div className=" max-[500px]:w-full max-[500px]:h-auto max-[500px]:aspect-[1/1] hero-img"></div>
        </div>
        <div className="flex items-center gap-[3rem] flex-wrap text-primary text-tunes-paragraph">
          <p className="font-semibold whitespace-nowrap pr-[2rem] text-tunes-heading border-r-2 border-r-tunes-border">
            Tech Stack
          </p>
          {techStack.map((item, idx) => (
            <span key={idx}>
              <Image
                width={90}
                height={50}
                className="h-[5rem] cursor-pointer hover:translate-y-[-1rem] w-[9rem] duration-[0.3s] ease-in-out transition-all"
                src={item}
                alt="skill-icon"
                loading="lazy"
              />
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Hero;
