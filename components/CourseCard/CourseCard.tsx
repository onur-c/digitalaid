import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

const CourseCard = ({
  url,
  title,
  subtitles,
  subtext,
}: {
  url: StaticImageData;
  title: string;
  subtitles: string[];
  subtext: string[];
}) => {
  return (
    <div className="flex flex-col w-[450px] items-center rounded-3xl shadow-lg shadow-dark/50 overflow-hidden">
      <div className="w-full h-[350px] relative  rounded-lg ">
        <Image src={url} alt="" fill objectFit="contain" />
      </div>
      <div className="w-full h-[345px] bg-secondary p-2 text-dark rounded-sm">
        <p className="font-extrabold bg-dark p-5 relative bottom-14 text-center text-white rounded-lg">
          {title}
        </p>
        <div className="relative bottom-12 flex flex-col ">
          {subtitles.map((subtitle, idx) => (
            <div key={idx}>
              <p className="bg-dark text-white p-1 w-fit rounded-sm font-semibold">
                {subtitle}
              </p>
              <p className="p-2">{subtext[idx]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
