import React, { useRef } from "react";
import Image from "next/image";
import contact from "../../public/Images/contact-us.svg";
const Contact = () => {
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white pb-32">
        <div className="container mx-auto bg-white pt-10 rounded px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 text-4xl font-bold mb-8">
                Contact Us
              </h1>

              <p className="text-gray-700 text-lg font-light">
                Please drop a mail! Our executive will reach you out.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="lg:w-1/2 sm:w-full">
              <div className="mx-auto pt-4">
                <div className="container mx-auto">
                  <div className="flex flex-row w-full">
                    <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-6">
                      <label
                        htmlFor="fullname"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        required
                        className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                        placeholder
                      />
                    </div>
                    <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-6">
                      <label
                        htmlFor="Email"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Email
                      </label>
                      <div className="border border-gray-300 shadow-sm rounded flex">
                        <div className="px-4 py-3  flex items-center border-r border-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-mail"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="Email"
                          name="email"
                          required
                          className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      {/* <div className="flex justify-between items-center pt-1 text-green-400">
                      <p className="text-xs">Email submission success!</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                      >
                        <path
                          className="heroicon-ui"
                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                          stroke="currentColor"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="currentColor"
                        />
                      </svg>
                    </div> */}
                    </div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="w-full flex flex-col mb-6 mx-6">
                      <label
                        htmlFor="FirstName"
                        className="pb-2 text-sm font-bold text-gray-800"
                      >
                        Message
                      </label>
                      <textarea
                        rows={10}
                        type="text"
                        id="message"
                        name="message"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                        placeholder
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full flex flex-row-reverse mx-6">
                    <button
                      className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-full">
              <Image
                src={contact}
                alt="conatct"
                className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Contact;
