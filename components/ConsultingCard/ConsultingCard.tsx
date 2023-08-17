"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SectionRevealer from "../Animation/SectionRevealer";

const ConsultingCard = ({
  url,
  title,
  desc,
  list,
}: {
  url: StaticImageData;
  title: string;
  desc: string;
  list?: string[];
}) => {
  const [showMore, setShowMore] = useState(true);

  return (
    <div className="h-fit w-[400px] flex flex-col gap-4 bg-amber-100 p-5 rounded">
      <SectionRevealer>
        <div className="h-56 relative overflow-hidden">
          <Image src={url} alt="" fill className="object-contain rounded-sm" />
        </div>
        <h3 className="w-fit relative bottom-8 bg-blue-800 p-5 rounded-sm">
          {title}
        </h3>
        <div
          className={
            showMore
              ? "h-12 overflow-hidden transition-all"
              : "h-fit transition-all"
          }
        >
          <p className="text-black leading-6">{desc}</p>
          {list && (
            <ul className="list-disc list-inside text-black">
              {list.map((item, idx) => (
                <li key={idx} className="leading-5">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        {showMore && (
          <span className="text-center block text-black pb-2">...</span>
        )}
        <button
          title="Show-More"
          type="button"
          className="bg-blue-800 px-5 py-3 text-white w-full mt-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <span className="flex items-center justify-center">
              <IoIosArrowDown />
              Daha fazla göster
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <IoIosArrowUp />
              Gizle
            </span>
          )}
        </button>
      </SectionRevealer>
    </div>
  );
};

export default ConsultingCard;
