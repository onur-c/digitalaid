"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.webp";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className=" flex items-center justify-between md:justify-normal font-bold fixed top-0 left-0  w-full gap-3 z-50 transition-all duration-500 bg-[#400E32] p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl p-3 outline outline-3 outline-primaryBg shadow-gray-400 hover:scale-105 transition-all lg:ml-5 ml-2"
        >
          <div className="md:w-20 md:h-16 w-12 h-9 relative">
            <Image src={Logo} alt="Logo" fill={true} />
          </div>
        </Link>

        <Link href="/">
          <p className="text-[10px] md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Hakkımızda
          </p>
        </Link>
        <Link href="/">
          <p className="  text-[10px] md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Hizmetler
          </p>
        </Link>
        <Link href="/">
          <p className="  text-[10px] md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Blog
          </p>
        </Link>
        <Link href="/">
          <p className="  text-[10px] md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Referanslar
          </p>
        </Link>
        <Link href="/">
          <p className="  text-[10px] md:text-lg md:block hidden font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            İletişim
          </p>
        </Link>
        <div className="burger-menu">
          <div
            className="md:hidden mr-5 text-3xl bg-black p-4 rounded-md shadow-lg shadow-gray-400 "
            onClick={handleBurgerMenu}
          >
            <RxHamburgerMenu />
          </div>
          <div
            className={
              isOpen
                ? "flex gap-4 flex-col bg-black text-white rounded-md  absolute right-5 p-5 h-fit md:hidden"
                : "hidden"
            }
          >
            <Link href="/">
              <p className="text-lg  h-1/5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Hakkımızda
              </p>
            </Link>
            <Link href="/">
              <p className="  text-lg  h-1/5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Hizmetler
              </p>
            </Link>
            <Link href="/">
              <p className="  text-lg  h-1/5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Blog
              </p>
            </Link>
            <Link href="/">
              <p className="  text-lg  h-1/5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Referanslar
              </p>
            </Link>
            <Link href="/">
              <p className="  text-lg  h-1/5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                İletişim
              </p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
