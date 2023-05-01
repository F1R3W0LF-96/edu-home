import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function LandingPage() {
  const router = useRouter();

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Tuition Search
            <br />
            <strong className="font-extrabold text-sky-700 sm:block">
              Learn Everywhere
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Are you Teacher or Student whichever you may be we are there for
            your help
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
              href="/register/teacher"
            >
              Teacher
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
              href="/register/student"
            >
              Student
            </Link>
          </div>
          <div className="pt-16">Scroll Down to know more</div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className={styles.landing_page_wrapper}>
  //     <div className="lg:container mx-auto">
  //       <br />
  //       <br />
  //       <br />
  //       <div className="w-1/2 p-8 mt-8 rounded shadow-lg mx-auto">
  //         <div className="flex-auto">
  //           <div className="">
  //             <h2 className="text-2xl font-bold mb-4">Register AS</h2>
  //             <div className="flex-auto flex-row">
  //               <button
  //                 className="text-white bg-sky-500 rounded py-2 px-4 w-1/2"
  //                 onClick={() => router.push("/register/teacher")}
  //               >
  //                 Teacher
  //               </button>
  //               <button
  //                 className="bg-lime-500 text-white rounded py-2 px-4 w-1/2"
  //                 onClick={() => router.push("/register/student")}
  //               >
  //                 Student
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
  //         <div className="flex flex-col justify-center items-center h-screen">
  //           <form className="bg-white p-8 rounded shadow-lg">
  //             <h2 className="text-2xl font-bold mb-4">
  //               Login with Phone Number
  //             </h2>
  //             <div className="mb-4">
  //               <label
  //                 className="block text-gray-700 font-bold mb-2"
  //                 htmlFor="phone"
  //               >
  //                 Phone Number
  //               </label>
  //               <input
  //                 className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  //                 placeholder="Phone Number"
  //                 type="tel"
  //                 id="phone"
  //                 name="phone"
  //               />
  //             </div>
  //             <div className="mb-4">
  //               <label
  //                 className="block text-gray-700 font-bold mb-2"
  //                 htmlFor="otp"
  //               >
  //                 OTP
  //               </label>
  //               <input
  //                 className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  //                 id="otp"
  //                 type="text"
  //                 placeholder="One-time password"
  //               />
  //             </div>
  //             <div className="flex items-center justify-between">
  //               <button
  //                 className="bg-sky-500 hover:bg-sky-700 text-white font-regular py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
  //                 type="button"
  //               >
  //                 Get OTP
  //               </button>
  //               <a
  //                 className="block text-gray-700 font-bold hover:underline"
  //                 href="#"
  //               >
  //                 Forgot Password?
  //               </a>
  //             </div>
  //             <button
  //               className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
  //               type="submit"
  //             >
  //               Login
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default LandingPage;
