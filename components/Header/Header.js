import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.png";
import Avatar from "../Elements/Avatar";
const Header = ({ isAuthenticated, os }) => {
  const mobileMenu = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    // Burger menus
    document.addEventListener("DOMContentLoaded", function () {
      // open
      const burger = document.querySelectorAll(".navbar-burger");
      const menu = document.querySelectorAll(".navbar-menu");

      if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].addEventListener("click", function () {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle("hidden");
            }
          });
        }
      }

      // close
      const close = document.querySelectorAll(".navbar-close");
      const backdrop = document.querySelectorAll(".navbar-backdrop");

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].addEventListener("click", function () {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle("hidden");
            }
          });
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener("click", function () {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle("hidden");
            }
          });
        }
      }
    });
  });
  const handleShowMobileMenu = () => {
    setOpenMenu((ps) => !ps);
    // if (mobileMenu) {
    //   console.log(mobileMenu.current.classList.includes("hidden"));
    //   mobileMenu.current.classList.forEach((ele) => console.log(ele));
    // }
  };
  return (
    <header>
      <nav className=" relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none" href="/">
          <Image src={logo} width={200} alt="logo" />
        </Link>
        <div className="lg:hidden flex flex-row" onClick={handleShowMobileMenu}>
          {isAuthenticated && (
            <Avatar
              size={300}
              imageSrc={
                "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_6.png"
              }
            />
          )}
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className={"flex flex-row items-center hidden lg:flex"}>
          {isAuthenticated && (
            <Avatar
              size={300}
              imageSrc={
                "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_6.png"
              }
            />
          )}
          <Link
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="/login"
          >
            Sign In
          </Link>
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-sky-500 hover:bg-sky-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/"
          >
            Sign up
          </Link>
        </div>
      </nav>
      {openMenu && (
        <div
          className="navbar-menu relative z-50"
          id="mobile-menus"
          ref={mobileMenu}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Image src={logo} width={200} alt="logo" />
              </a>
              <button
                className="navbar-close"
                onClick={() => setOpenMenu(false)}
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <Link
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="/login"
                >
                  Sign in
                </Link>
                <Link
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-blue font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © {new Date().getFullYear()}</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;
