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
        className="md:hidden mr-5 text-3xl bg-dark text-light p-4 rounded-md cursor-pointer"
        onClick={handleBurgerMenu}
      >
        <RxHamburgerMenu />
      </div>
      <div
        className={
          isOpen
            ? "flex flex-col gap-4 bg-dark text-light rounded-md  absolute right-5 p-5 h-fit md:hidden transition-all "
            : "invisible absolute transition-all right-10 opacity-0"
        }
      >
        {links.map((link) => (
          <Link href={link.url} key={link.id} onClick={handleBurgerMenu}>
            <p className="text-lg  h-1/5 font-light ">
              {link.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
