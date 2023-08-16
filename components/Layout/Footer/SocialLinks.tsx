import React from "react";

import { socialLinks } from "./socials";
const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-3xl">
      {socialLinks.map((link) => (
        <a
          href={link.url}
          className="hover:text-headerBg transition-colors"
          key={link.id}
        >
          {link.Icon()}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
