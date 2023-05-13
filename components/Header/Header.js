import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.png";
import Avatar from "../Elements/Avatar";
import { Button } from "antd";
import { useRouter } from "next/router";
import coinImage from "../../public/Images/rupee.png";

const Header = ({ isAuthenticated, os, location }) => {
  const { push } = useRouter();
  const mobileMenu = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("accessToken")) {
        setLoggedInUser(true);
      }
      if (localStorage.getItem("fullName")) {
        setUserName(localStorage.getItem("fullName"));
      }
    }
  }, []);
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
  console.log(">>>>>>>>>loggedInUser", loggedInUser);
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

          {loggedInUser ? (
            <>
              <div class="relative">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  {userName}(
                  <Image src={coinImage} alt={"rupee"} width={20} />
                  {1000} coins)
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdown"
                  class={`z-10 ${
                    showProfileDropdown
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 transition-opacity duration-200`}
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        onClick={() => {
                          push("/profile");
                        }}
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => {
                          localStorage.removeItem("accessToken");
                          push("/");
                        }}
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
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
              {loggedInUser ? (
                <Button
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    push("/");
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                    href="/login"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-blue font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                    href="/"
                  >
                    Sign Up
                  </Link>
                </>
              )}
              <div className="pt-6"></div>
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
