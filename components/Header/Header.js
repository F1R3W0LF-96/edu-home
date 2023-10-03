import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";
import { PayCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.png";
import Avatar from "../Elements/Avatar";
import coinImage from "../../public/Images/rupee.png";
import InstagramIcon from "@/public/Icons/instagram";
import WhatsappIcon from "@/public/Icons/whatsapp";
import PhoneIcon from "@/public/Icons/Phone";
import { useSelector, useDispatch } from "react-redux";
import CustomPopover from "../Elements/CustomPopover";
import { isAuthenticated } from "@/redux/userReducer";

const Header = ({ isauthenticated, os, location, userState }) => {
  const { push, route } = useRouter();
  const dispatch = useDispatch();
  const mobileMenu = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
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
  const token = localStorage.getItem("accessToken");

  return (
    <header>
      <nav className=" relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none" href="/">
          <Image src={logo} width={200} alt="logo" />
        </Link>
        <div className="lg:hidden flex justify-center content-center items-center">
          <div className="flex justify-center content-center items-center">
            <div className="ps-1 pe-1">
              <UserOutlined size={100} />
            </div>
            <div className="ps-1">
              <PayCircleOutlined color="yellow" />
            </div>
            <div className="ps-1 pe-1 pt-1">
              <p>{userState?.data?.coins}</p>
            </div>
          </div>

          <div className="flex flex-row" onClick={handleShowMobileMenu}>
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
        </div>
        <div className={"flex flex-row items-center hidden lg:flex"}>
          {isauthenticated && (
            <Avatar
              size={300}
              imageSrc={
                "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_6.png"
              }
            />
          )}
          <>
            <Link className="flex items-center mr-3" href="tel:9553444001">
              <PhoneIcon />
              <span className="ms-1 text-sm text-sky font-bold">
                +919553444001
              </span>
            </Link>
            <Link
              className="flex items-center mr-3"
              href="https://wa.me/+919553444001"
              target="_blank"
            >
              <WhatsappIcon />
              <span className="ms-1 text-sm text-sky font-bold">
                +919553444001
              </span>
            </Link>
            <Link
              className="flex items-center mr-3"
              href="https://www.instagram.com/tuitionsearch/"
            >
              <InstagramIcon />
              <span className="ms-1 text-sm text-sky font-bold">
                tuitionsearch
              </span>
            </Link>
            {route === "/" && (
              <>
                <Link
                  className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                  href="#hero"
                >
                  Home
                </Link>
                <Link
                  className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                  href="#about-us"
                >
                  About Us
                </Link>
                <Link
                  className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                  href="#contact-us"
                >
                  Contact Us
                </Link>
              </>
            )}
            {/* <Link
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                href="/login"
              >
                Sign In
              </Link> */}
            {token && (
              <>
                {userState?.data?.user_role === "TEACHER" ? (
                  <Link
                    className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                    href="/lists/teacher"
                  >
                    Student Lists
                  </Link>
                ) : (
                  <Link
                    className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                    href="/lists/student"
                  >
                    Teacher Lists
                  </Link>
                )}
              </>
            )}
          </>
          {token && (
            <>
              <CustomPopover
                open={openProfileMenu}
                handleClose={() => setOpenProfileMenu(false)}
                handleOpen={(newOpen) => setOpenProfileMenu(newOpen)}
                title={""}
                text={
                  <div className="flex justify-center content-center items-center">
                    <div className="ps-2 pe-2">
                      <UserOutlined size={100} />
                    </div>

                    {/* <Avatar
                      size={20}
                      imageSrc={
                        "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
                      }
                    /> */}
                    <div className="ps-2">
                      <PayCircleOutlined color="yellow" />
                    </div>

                    {/* <Image
                      src={coinImage}
                      alt={"rupee"}
                      width={20}
                      height={20}
                    /> */}
                    <div className="ps-1 pe-2 pt-1">
                      <p>{userState?.data?.coins}</p>
                    </div>
                  </div>
                }
                contentHtml={
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        onClick={() => {
                          push("/profile");
                        }}
                        className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => {
                          localStorage.removeItem("accessToken");
                          dispatch(isAuthenticated(null));
                          push("/");
                        }}
                        className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                }
              />
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
                {!token && (
                  <>
                    <li className="mb-1">
                      <a
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        href="https://tuitionsearch.co.in"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        href="#about-us"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        href="#contact-us"
                      >
                        Contact
                      </a>
                    </li>
                  </>
                )}
                {token && (
                  <>
                    <li className="mb-1">
                      <a
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          push("/profile");
                        }}
                      >
                        Profile
                      </a>
                    </li>
                    {userState?.data?.user_role === "TEACHER" ? (
                      <li className="mb-1">
                        <Link
                          className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                          href="/lists/teacher"
                        >
                          Student Lists
                        </Link>
                      </li>
                    ) : (
                      <li className="mb-1">
                        <Link
                          className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                          href="/lists/student"
                        >
                          Teacher Lists
                        </Link>
                      </li>
                    )}
                  </>
                )}
              </ul>
            </div>
            <div className="mt-auto">
              {token ? (
                <div className="flex content-center justify-center items-center w-full px-2 py-2">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded w-full text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem("accessToken");
                      dispatch(isAuthenticated(null));
                      push("/");
                    }}
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <>
                  <Link
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                    href="/register/teacher"
                  >
                    Sign-Up as Teacher
                  </Link>
                  <Link
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-blue font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                    href="/register/student"
                  >
                    Sign-Up as Student
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
