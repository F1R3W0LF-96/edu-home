import React, { useState } from "react";
import Link from "next/link";
import Wrapper from "@/components/Layouts/Wrapper";
import axios from "axios";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/router";
const Login = () => {
  const { push } = useRouter();
  const { getLogin, loading, isAuthenticated, loginResponse, userDetails } =
    useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = process.env.API_URL;
    console.log("process.env.HOST>>>>>>>>>>>>>>>>>>>>>>>", apiUrl);
    if (email && password) {
      axios
        .post(`${apiUrl}/api/v1/users/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("accessToken", response.data.data.accessToken);
            localStorage.setItem("fullName", response.data.data.fullName);
            push("/student");
          }
        });
    } else {
      alert("Please enter your Email Address and Password");
    }
  };
  return (
    <Wrapper>
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 h-screen">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login !</h1>

          <p className="mt-4 text-gray-500 text-left">
            Welcome to the tuition search login page! Here, you can access all
            the features and benefits of our platform to find the perfect tutor
            for your educational needs.
          </p>
        </div>

        <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                autoComplete="false"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="underline" href="/">
                Sign up
              </Link>
            </p>

            <button
              className="inline-block rounded-lg bg-sky-500 px-5 py-3 text-sm font-medium text-white"
              onClick={(e) => handleSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;