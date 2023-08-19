"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import BurgerMenu from "@/components/Layout/Header/BurgerMenu/BurgerMenu";
import { usePathname } from "next/navigation";
import { links } from "./links";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdown, setDropdown] = useState<boolean>();
  const currentRoute = usePathname();

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMainIcon = () => {
    if (isOpen) handleBurgerMenu();
  };

  const handleDropdown = () => {
    setDropdown(!isDropdown);
  };

  return (
    <header>
      <div className=" flex items-center justify-between md:justify-normal font-bold fixed top-0 left-0  w-full gap-3 z-50 transition-all duration-500  p-4">
        {/* LOGO */}
        <Link
          onClick={handleMainIcon}
          href="/"
          className="w-24 h-20 flex items-center justify-center gap-2 rounded-xl p-3   bg-dark shadow-gray-400 hover:scale-105 transition-all lg:ml-5 ml-2"
        >
          <div className="w-12 h-9 relative">
            <Image src={Logo} alt="Logo" fill sizes="" />
          </div>
        </Link>
        {/* LINKS IN HEADER - hide when view<768px(md)*/}
        {links.slice(0, 3).map((link) => (
          <Link href={link.url} key={link.id}>
            <p
              className={
                currentRoute === link.url
                  ? "hover:opacity-90 text-[10px] bg-gray text-primary rounded p-3  md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
                  : "hover:opacity-90 text-[10px]  bg-dark text-light rounded p-2 md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
              }
            >
              {link.title}
            </p>
          </Link>
        ))}
        <div
          onClick={handleDropdown}
          className={
            isDropdown
              ? " cursor-pointer text-[10px] bg-dark/50 text-primary rounded p-3  md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
              : " cursor-pointer text-[10px]  bg-dark text-light rounded p-2 md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
          }
        >
          <p className="flex items-center">
            Hizmetler <IoIosArrowDown />
          </p>
          <div
            className={
              isDropdown
                ? "absolute flex gap-3 top-14 left-0 flex-col"
                : "hidden"
            }
          >
            {links.slice(3, 6).map((link) => (
              <Link href={link.url} key={link.id}>
                <p
                  className={
                    currentRoute === link.url
                      ? "hover:opacity-90 text-[10px] bg-gray text-primary rounded p-3  md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
                      : "hover:opacity-90 text-[10px]  bg-dark text-light rounded p-2 md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
                  }
                >
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <Link href={links[6].url} key={links[6].id}>
          <p
            className={
              "md:!ml-auto text-[10px]  bg-dark text-light rounded p-1 md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-all"
            }
          >
            {links[6].title}
          </p>
        </Link>
        {/* BURGER MENU - when view<768px(md) */}
        <BurgerMenu isOpen={isOpen} handleBurgerMenu={handleBurgerMenu} />
      </div>
    </header>
  );
};

export default Header;
{
  /* */
}
