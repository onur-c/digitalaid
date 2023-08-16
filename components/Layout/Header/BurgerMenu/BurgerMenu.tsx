"use client";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { links } from "../links";
const BurgerMenu = ({
  isOpen,
  handleBurgerMenu,
}: {
  isOpen: boolean;
  handleBurgerMenu: () => void;
}) => {
  return (
    <div className="burger-menu">
      <div
        className="md:hidden mr-5 text-3xl bg-black p-4 rounded-md cursor-pointer"
        onClick={handleBurgerMenu}
      >
        <RxHamburgerMenu />
      </div>
      <div
        className={
          isOpen
            ? "flex flex-col gap-4 bg-black text-white rounded-md  absolute right-5 p-5 h-fit md:hidden transition-all "
            : "invisible absolute transition-all right-10 opacity-0"
        }
      >
        {links.map((link) => (
          <Link href={link.url} key={link.id} onClick={handleBurgerMenu}>
            <p className="text-lg  h-1/5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              {link.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
