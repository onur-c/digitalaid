"use client";
import React from "react";
import { MdArrowUpward } from "react-icons/md";

const ButtonScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      title="Go To Top"
      type="button"
      className="fixed bottom-10 text-light right-10 rounded-full bg-black text-3xl p-5"
      onClick={scrollToTop}
    >
      <MdArrowUpward />
    </button>
  );
};

export default ButtonScrollToTop;
