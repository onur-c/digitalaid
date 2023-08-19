"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { links } from "../links";
import { IoMdArrowDropleft } from "react-icons/io";
const BurgerMenu = ({
  isOpen,
  handleBurgerMenu,
}: {
  isOpen: boolean;
  handleBurgerMenu: () => void;
}) => {
  const [isDropdown, setDropdown] = useState<boolean>(false);
  const handleDropdown = () => {
    setDropdown(!isDropdown);
  };
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
        {links.slice(0, 3).map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="hover:opacity-60">{link.title}</p>
          </Link>
        ))}
        <div
          onClick={handleDropdown}
          className={isDropdown ? " cursor-pointer " : " cursor-pointer "}
        >
          <p className="flex items-center right-4 relative hover:opacity-60">
            <IoMdArrowDropleft />
            Hizmetler
          </p>
          <div
            className={
              isDropdown
                ? "absolute flex gap-5 top-2/3 rounded-lg right-32 flex-col bg-dark p-4"
                : "hidden"
            }
          >
            {links.slice(3, 6).map((link) => (
              <Link href={link.url} key={link.id}>
                <p className="hover:opacity-60">{link.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <Link href={links[6].url} key={links[6].id}>
          <p className="hover:opacity-60">{links[6].title}</p>
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
