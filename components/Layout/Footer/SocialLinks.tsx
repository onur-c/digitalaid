import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-3xl">
      <a
        href="https://www.instagram.com/digitalaid_io"
        className="hover:text-headerBg transition-colors"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/digitalaid-io "
        className="hover:text-headerBg transition-colors"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.twitter.com/Digitalaid_io "
        className="hover:text-headerBg transition-colors"
      >
        <AiFillTwitterCircle />
      </a>
    </div>
  );
};

export default SocialLinks;
