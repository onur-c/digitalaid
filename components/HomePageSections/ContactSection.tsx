import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import Tag from "../Tag/Tag";
import GoogleMap from "../GoogleMap/GoogleMap";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mt-24 bg-gradient-to-b from-primary to-secondary shadow-2xl  p-5 rounded-sm w-full left-0 mb-6"
    >
      <div className="flex items-center justify-center mt-8">
        <hr className="w-1/12 border-0 border-t-4 border-dark" />
        <h2 className=" text-dark text-3xl font-bold">Bize Ulaşın</h2>
      </div>
      <div className="mt-8 flex gap-4 w-3/4 m-auto flex-wrap justify-center">
        <Tag
          icon={IoMail}
          text="digitalaid@digitalaid.io"
          url="mailto:digitalaid@digitalaid.io"
        />
        <Tag icon={BsPhoneFill} text="+90 532 473 9164" url="tel:+4733378901" />
        <Tag
          icon={FaMapLocation}
          text="Bakırköy, Bakırköy/İstanbul, Türkiye"
          url="https://www.google.com/maps?daddr=Bak%C4%B1rk%C3%B6y,+Bak%C4%B1rk%C3%B6y/%C4%B0stanbul,+T%C3%BCrkiye"
        />
        <Tag
          icon={RiWhatsappFill}
          text="WhatApp üzerinden bize ulaşın"
          url="https://wa.me/9005324739164"
        />
      </div>
      <GoogleMap />
    </section>
  );
};

export default ContactSection;
