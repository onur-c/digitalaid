"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import { links } from "./links";
import BurgerMenu from "@/components/Layout/Header/BurgerMenu/BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMainIcon = () => {
    if (isOpen) handleBurgerMenu();
  };

  return (
    <header>
      <div className=" flex items-center justify-between md:justify-normal font-bold fixed top-0 left-0  w-full gap-3 z-50 transition-all duration-500 bg-headerBg p-4">
        {/* LOGO */}
        <Link
          onClick={handleMainIcon}
          href="/"
          className="flex items-center gap-2 rounded-xl p-3 outline outline-3 outline-primaryBg shadow-gray-400 hover:scale-105 transition-all lg:ml-5 ml-2"
        >
          <div className="w-12 h-9 relative">
            <Image src={Logo} alt="Logo" fill={true} />
          </div>
        </Link>
        {/* LINKS IN HEADER hide when view<768px(md)*/}
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="text-[10px] md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              {link.title}
            </p>
          </Link>
        ))}
        {/* BURGER MENU when view<768px(md) */}
        <BurgerMenu isOpen={isOpen} handleBurgerMenu={handleBurgerMenu} />
      </div>
    </header>
  );
};

export default Header;
