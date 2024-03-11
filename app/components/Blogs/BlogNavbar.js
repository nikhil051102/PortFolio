"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDevDropdownOpen, setDevDropdownOpen] = useState(false);
  const [isCloudDropdownOpen, setCloudDropdownOpen] = useState(false);
  const [isDBDropdownOpen, setDBDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDevDropdown = () => {
    setDevDropdownOpen(!isDevDropdownOpen);
    setCloudDropdownOpen(false);
    setDBDropdownOpen(false);
  };

  const toggleCloudDropdown = () => {
    setCloudDropdownOpen(!isCloudDropdownOpen);
    setDevDropdownOpen(false);
    setDBDropdownOpen(false);
  };

  const toggleDBDropdown = () => {
    setDBDropdownOpen(!isDBDropdownOpen);
    setCloudDropdownOpen(false);
    setDevDropdownOpen(false);
  };

  return (
    <div className="stick top-0">
      <nav className="flex  justify-between items-center p-2 bg-white">
        <div className="">
          <img src="/images/Somraj.svg" alt="Logo" className="h-12" />
        </div>
        <div className=" items-center relative md:block hidden">
          <input
            type="text"
            placeholder="Search your Blog...🤝"
            className=" rounded-xl p-2 pr-10 pl-4 outline outline-1 focus:outline-green-500 w-96"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 ">
            <MdSearch className="text-3xl text-black" />
          </div>
        </div>

        <div className="px-4 z-20">
          <button
            className="text-3xl text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </button>
          {menuOpen && (
            <div className="fixed top-0 right-0 h-screen w-[20rem] bg-white border shadow-2xl flex flex-col">
              <div className=" flex p-4 justify-end ">
                <button onClick={toggleMenu} className="text-4xl">
                  &times;
                </button>
              </div>
              <div className="flex flex-col px-10">
                <ul className="space-y-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <button
                      onClick={toggleDevDropdown}
                      className="flex items-center dropdown focus:outline-none rounded-md"
                    >
                      <span>Devops</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ml-2 ${
                          isDevDropdownOpen ? "transform rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                        />
                      </svg>
                    </button>
                    {isDevDropdownOpen && (
                      <ul className="absolute left-[7.5rem] drop-list items-center bg-white  rounded-md border w-[10rem]">
                        <li>
                          <a href="/docker">Docker</a>
                        </li>
                        <li>
                          <a href="/kubernetes">Kubernetes</a>
                        </li>
                        <li>
                          <a href="/cicd">CI/CD</a>
                        </li>
                        <li>
                          <a href="/terraform">Terraform</a>
                        </li>
                        <li>
                          <a href="/monitoring">Monitoring</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={toggleCloudDropdown}
                      className="flex items-center dropdown focus:outline-none rounded-md"
                    >
                      <span>Cloud</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ml-2 ${
                          isCloudDropdownOpen ? "transform rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                        />
                      </svg>
                    </button>
                    {isCloudDropdownOpen && (
                      <ul className="absolute left-[7.5rem] drop-list items-center bg-white  rounded-md border w-[10rem]">
                        <li>
                          <a href="/aws">AWS</a>
                        </li>
                        <li>
                          <a href="/gcp">Google Cloud</a>
                        </li>
                        <li>
                          <a href="/azure">Azure</a>
                        </li>
                        <li>
                          <a href="/openshift">OpenShift</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href="/nextjs">NextJS</Link>
                  </li>
                  <li>
                    <Link href="/tailwind">Golang</Link>
                  </li>
                  <li>
                    <button
                      onClick={toggleDBDropdown}
                      className="flex items-center dropdown focus:outline-none rounded-md"
                    >
                      <span>Cloud</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ml-2 ${
                          isDBDropdownOpen ? "transform rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                        />
                      </svg>
                    </button>
                    {isDBDropdownOpen && (
                      <ul className="absolute left-[7.5rem] drop-list items-center bg-white  rounded-md border w-[10rem]">
                        <li>
                          <a href="/mongodb">MongoDB</a>
                        </li>
                        <li>
                          <a href="/mysql">MySQL</a>
                        </li>
                        <li>
                          <a href="/postgresql">PostgreSQL</a>
                        </li>
                        <li>
                          <a href="/redis">Redis</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
              <div className="flex justify-end bottom-0 fixed right-0 py-10 px-4 md:px-0">
                <Link href="/">
                  <button className="bg-slate-600 hover:bg-emerald-400 text-white font-semibold py-3 px-4 md:mr-4 rounded-[15px]   mr-[-2px]">
                    About Author
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="items-center relative block md:hidden p-2">
        <input
          type="text"
          placeholder="Search your Blog...🤝"
          className="rounded-xl p-2 pr-10 pl-4 outline outline-1 focus:outline-green-500 w-full md:w-96"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <MdSearch className="text-3xl text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
