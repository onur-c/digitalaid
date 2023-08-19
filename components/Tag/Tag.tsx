import React from "react";
import { IconType } from "react-icons";
import { IoMail } from "react-icons/io5";

const Tag = ({
  url,
  icon,
  text,
}: {
  url: string;
  icon: IconType | null;
  text: string;
}) => {
  const Icon = icon;
  return (
    <a
      className="bg-dark text-light w-fit h-fit p-4 rounded border border-dark border-solid hover:bg-primary hover:text-dark hover:border hover:border-solid hover:border-dark  transition-colors duration-300 flex items-center gap-5"
      href={url}
      target="_blank"
    >
      {Icon && (
        <div className="outline outline-1 p-1 rounded-md text-3xl">
          <Icon />
        </div>
      )}

      <p>{text}</p>
    </a>
  );
};

export default Tag;
