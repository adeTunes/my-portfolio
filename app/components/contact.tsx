import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-gray-50/30">
      <div className="app-container flex gap-12 md:gap-24 flex-col">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-blue-600 font-black tracking-widest text-lg uppercase">
            CONTACT
          </h3>
          <p className="text-3xl md:text-5xl font-black text-gray-900">
            Hit me up! 👇
          </p>
        </div>

        <div className="flex items-center gap-12 md:gap-24 flex-wrap justify-center md:justify-start">
          <div className="flex items-center gap-6 group">
            <span className="w-20 h-20 bg-white shadow-xl text-blue-600 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
              <TbMapSearch size={36} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-black text-gray-900">Location</h3>
              <p className="text-lg font-medium text-gray-600">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <span className="w-20 h-20 bg-white shadow-xl text-blue-600 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-6 duration-300">
              <MdOutlineEmail size={36} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-black text-gray-900">Mail</h3>
              <a
                href="mailto:babatundeadebowale1998@gmail.com"
                className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
                style={{ wordBreak: "break-all" }}
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
