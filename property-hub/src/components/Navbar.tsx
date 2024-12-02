"use client";
import { useState } from "react";
import Image from "next/image";
import { Logo } from "./ImportImages";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Buy", link: "/buy" },
    { name: "Rent", link: "/rent" },
    { name: "Companies", link: "/companies" },
    { name: "Manage Rentals", link: "/manage-rentals" },
    { name: "Login", link: "/login" },
  ];

  return (
    <header className="md:px-24 fixed top-0 left-0 w-full z-50 bg-white-color shadow-md">
      <nav className="flex justify-between items-center px-4 md:px-8 py-4">
        <div className="logo">
          <Image
            src={Logo}
            alt="9ja@PropertyHub"
            className="w-[150px] md:w-auto"
          />
        </div>
        <div className="hidden md:flex gap-10 justify-center items-center flex-1">
          {menu.map((item, index) => (
            <Link
              className={`hover:text-primary-color transition-colors `}
              key={index}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
          <button className="custom-btn">Register</button>
        </div>
        <div
          className="md:hidden flex flex-col items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-8 h-1 bg-black mb-1"></span>
          <span className="block w-8 h-1 bg-black mb-1"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white-color shadow-md">
          {menu.map((item, index) => (
            <Link
              className={`hover:text-primary-color transition-colors py-2`}
              key={index}
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="custom-btn mt-2 mb-4">Register</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
