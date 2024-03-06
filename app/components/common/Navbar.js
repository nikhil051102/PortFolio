// app/components/common/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black p-3 w-full flex items-center justify-between overflow-x-hidden overscroll-x-none sticky z-20 top-0 shadow-2xl shadow-silver-100">
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white focus:outline-none"
        >
          <FaBars />
        </button>
      </div>
      <div className="flex items-center justify-center ml-8 md:ml-2">
        <Link href="/">
          <img src="/images/SomrajBGB.png" alt="Logo" className="h-14" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-4 font-semibold gap-4 text-white">
        <Link href="/">
          <p>About Me</p>
        </Link>
        <Link href="/services">
          <p>Services</p>
        </Link>
        {/* <Link href="/portfolio">
          <p>Portfolio</p>
        </Link> */}
        <Link href="/blog">
          <p>Blog</p>
        </Link>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-center">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl">
              &times;
            </button>
          </div>
          <Link href="/">
            <p className=" py-2">About Me</p>
          </Link>
          <Link href="/services">
            <p className=" py-2">Services</p>
          </Link>
          {/* <Link href="/portfolio">
            <p className=" py-2">Portfolio</p>
          </Link> */}
          <Link href="/blog">
            <p className=" py-2">Blog</p>
          </Link>
        </div>
      )}

      <Link href="/images.Somraj.svg">
        <button className="hidden md:block bg-indigo-500 hover:bg-green-800 text-white font-bold py-4 px-4 md:mr-4 rounded-[15px]   mr-[-2px]">
          Get Resume
        </button>
        {/* <button className="block md:hidden bg-indigo-600 hover:bg-green-800 text-white font-bold py-2 px-3 md:mr-4 rounded-[15px] md:w-[133px]  md:h-[51px]">
          <img src="/images/resumedl.png" alt="Download Resume" />
        </button> */}

        <img
          src="/images/resume.png"
          alt="Contact"
          className="block md:hidden "
        />
      </Link>
    </nav>
  );
};

export default Navbar;
