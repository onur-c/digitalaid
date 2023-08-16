"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ConsultingCard = ({
  url,
  title,
  desc,
  list,
}: {
  url: string;
  title: string;
  desc: string;
  list?: string[];
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-fit w-[400px] flex flex-col gap-4 bg-slate-100 p-5 rounded">
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
        <p className="text-black">{desc}</p>
        {list && (
          <ul className="list-disc list-inside text-black">
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {showMore && <span className="text-center text-black">...</span>}

      <button
        className="bg-primaryBg px-5 py-3 text-black"
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
    </div>
  );
};

export default ConsultingCard;
