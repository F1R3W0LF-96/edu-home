import React, { useState } from "react";
import Link from "next/link";
import Login from "../Auth/Login";
function Hero({ ...props }) {
  return (
    <section className="p-6 bg-white dark:text-gray-100">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
          <span className="block mb-2 dark:text-violet-400">Tuition</span>
          <h1 className="text-5xl font-extrabold dark:text-gray-50">
            Tuition Search
          </h1>
          <p className="mt-2 mb-8">
            <span className="text-xl font-medium dark:text-gray-50">
              Learning At Doorstep
            </span>
            {/* <span className="font-medium dark:text-gray-50">
              One Child, One Teacher, One Pen{" "}
            </span>
            <br />
            can change the world */}
          </p>
          <Login />
          <div className="my-4">
            <p className="text-sm text-gray-500 text-justify">
              No account? Create a account as your Role (Teacher / Student)
            </p>
          </div>
          <Link
            className="block w-full rounded bg-sky-600 px-12 py-3 my-2 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            href="/register/teacher"
          >
            Teacher
          </Link>

          <Link
            className="block w-full rounded px-12 py-3 my-2 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
            href="/register/student"
          >
            Student
          </Link>
        </div>
        <img
          src="https://source.unsplash.com/random/480x360"
          alt=""
          className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
        />
      </div>
    </section>
  );
}

export default Hero;
