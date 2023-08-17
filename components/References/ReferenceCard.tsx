import Image from "next/image";
import React from "react";
import type { StaticImageData } from "next/image";

const ReferenceCard = ({
  link,
  url,
}: {
  link: string;
  url: StaticImageData;
}) => {
  return (
    <>
      <a
        href={link}
        className="w-48 h-24 relative opacity-60 hover:opacity-90 transition-all"
      >
        <Image src={url} alt="Referans" fill className="object-contain" />
      </a>
    </>
  );
};

export default ReferenceCard;
