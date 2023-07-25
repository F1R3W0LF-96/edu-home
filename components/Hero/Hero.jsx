import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Auth from "../Auth/Auth";
function Hero({ ...props }) {
  return (
    <section
      className="dark:text-gray-100 hero-background mt-16 flex justify-center align-center"
      id="hero"
    >
      <div className="container grid mx-auto text-left grid-cols-12 items-center text-center">
        <div className="md:col-span-3 order-3 lg:order-1">
          {/* <img
            src={
              "https://storebucket.fra1.digitaloceanspaces.com/hero-section-model.png"
            }
            height={1000}
            alt="teacher"
            className="object-cover w-full rounded-md h-full"
          /> */}
        </div>
        <div className="flex-column col-span-12 lg:col-span-4 order-2">
          <h1 className="text-5xl font-extrabold text-white">Tuition Search</h1>
          <p className="mt-2 mb-8">
            <span className="text-xl font-medium text-white">
              Learning At Doorstep
            </span>
          </p>
          <Link
            className="text-center block w-full rounded-full shadow-lg bg-teal-600 px-12 py-3 my-2 text-lg font-bold text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            href="/register/teacher"
          >
            Teacher
          </Link>

          <Link
            className="text-center block w-full rounded-full shadow bg-teal-600 px-12 py-3 mt-4 text-lg font-bold text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
            href="/register/student"
          >
            Student
          </Link>
        </div>
        <div className="w-full px-6 rounded-md sm:px-12 md:px-16 col-span-12 lg:col-span-5 order-1 lg:order-3">
          <Auth />
          <div className="my-4">
            <p className="text-sm text-white text-justify">
              No account? Create a account as your Role (Teacher / Student)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
