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
    <div className="w-[280px] h-[400px] rounded shadow-sm shadow-dark p-5   flex gap-2 flex-col items-center justify-around">
      <Image src={img} alt="Comment" />
      <p className="bg-dark shadow-sm shadow-dark text-light p-2 rounded">
        {rating}/5
      </p>
      <div className="mr-auto text-dark">
        <FaQuoteLeft />
      </div>
      <p className="text-center text-sm italic text-dark shadow-sm shadow-dark p-5 rounded bg-secondary">
        {comment}
      </p>
      <div className="ml-auto text-dark">
        <FaQuoteRight />
      </div>
      <p className="text-dark">
        {name}-{date}{" "}
      </p>
    </div>
  );
};

export default CommentCard;
