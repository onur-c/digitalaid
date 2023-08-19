import Image from "next/image";
import React from "react";
import type { StaticImageData } from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CommentCard = ({
  img,
  rating,
  comment,
  name,
  date,
}: {
  img: StaticImageData;
  rating: number;
  comment: string;
  name: string;
  date: string;
}) => {
  return (
    <div className="w-[280px] h-[350px] rounded shadow-lg shadow-dark p-5 text-dark bg-light/70 flex gap-2 flex-col items-center justify-around">
      <Image src={img} alt="Comment" />
      <p className="bg-black text-white p-2 rounded">{rating}/5</p>
      <div className="mr-auto text-black/30">
        <FaQuoteLeft />
      </div>
      <p className="text-center text-sm italic">{comment}</p>
      <div className="ml-auto text-black/30">
        <FaQuoteRight />
      </div>
      <p>
        {name}-{date}{" "}
      </p>
    </div>
  );
};

export default CommentCard;
