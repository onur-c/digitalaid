import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="mt-auto mb-5 bg-primaryBg w-full fluid flex flex-col gap-3 items-center justify-center">
      <SocialLinks />
      <hr className="w-2/12" />
      <p>DigitalAid © Tüm Hakları Saklıdır.</p>
    </footer>
  );
};

export default Footer;
