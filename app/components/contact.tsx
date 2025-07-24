import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

function Contact() {
  return (
    <section id="contact" className="py-[11rem] bg-white">
      <div className="app-container flex gap-[6rem] flex-col">
        <div className="flex flex-col gap-[1rem]">
          <h3 className="section-heading">CONTACT</h3>
          <p className="section-subheading">Hit me up! 👇</p>
        </div>
        <div className="flex items-center gap-[8rem] flex-wrap">
          <div className="flex items-center gap-[1.5rem]">
            <span className="w-[5rem] bg-white shadow-lg text-tunes-link rounded-full h-[5rem] flex items-center justify-center">
              <TbMapSearch size={30} />
            </span>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-tunes-heading font-bold text-primary">
                Location
              </h3>
              <p className="text-tunes-paragraph text-primary">
                Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[1.5rem]">
            <span className="w-[5rem] bg-white shadow-lg text-tunes-link rounded-full h-[5rem] flex items-center justify-center">
              <MdOutlineEmail size={30} />
            </span>
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="text-tunes-heading font-bold text-primary">
                Mail
              </h3>
              <a
                href="mailto:babatundeadebowale1998@gmail.com"
                target="_blank"
                className="text-tunes-paragraph hover:text-tunes-link text-primary"
                style={{ wordBreak: "break-word" }}
              >
                babatundeadebowale1998@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
