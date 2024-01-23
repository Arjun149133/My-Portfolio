import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className=" flex bg-btn-secondary p-1 items-center justify-center fixed w-full z-20 text-white">
      <ul
        className={` flex gap-x-7 p-2 mx-3  ${poppins.className}`}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </ul>
      <button
        className={`lg:hidden mx-3 justify-end`}
        onClick={onToggleSidebar}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
