import { alignment } from "@/helper/Constant";
import Link from "next/link";
import React from "react";

function ListsLayout({ type, ele, parentidx }) {
  switch (type) {
    case alignment.GRID:
      return (
        <div className="p-4 w-full lg:w-1/3 md:w-1/2" key={ele._id.toString()}>
          <div className="h-full border border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-white">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="blog"
            />
            <div className="p-6">
              <div className="flex flex-row items-center">
                {ele?.subjects?.length > 0 ? (
                  ele?.subjects?.map((sub, idx) => (
                    <div
                      key={idx}
                      className="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-full bg-lime-200 w-1/2"
                    >
                      {sub}
                    </div>
                  ))
                ) : (
                  <div className="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-full bg-lime-200 w-1/2">
                    No subjects found
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center">
                {ele?.board?.length > 0 ? (
                  ele?.board?.split(",").map((_b, idx) => (
                    <div
                      key={idx}
                      className="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-full bg-lime-200 w-1/2"
                    >
                      {_b}
                    </div>
                  ))
                ) : (
                  <div className="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-full bg-lime-200 w-1/2">
                    No boards found
                  </div>
                )}
              </div>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {ele.firstName} {ele.LastName}
              </h1>
              <p className="leading-relaxed mb-3">
                {ele.description !== "" ? ele.description : "Details..."} <br />
                <span className="phone-number" onClick={() => {}}>
                  Ph.No: &nbsp;
                  <span className="visible-digits">
                    {ele.phoneno.substring(0, 4)}
                  </span>
                </span>
              </p>

              <div className="flex items-center flex-wrap">
                <Link
                  href={`/profile/${ele._id}`}
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Know More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                {/* <span className="text-black-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-black-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span> */}
              </div>

              {/* <div className="flex justify-between items-center flex-wrap mt-8">
                  <span className="text-black-400 mr-3 inline-flex items-center text-sm pr-3 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    10 lessons
                  </span>
                  <span className="text-black-400 inline-flex items-center leading-none text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-share-2"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    6
                  </span>
                </div> */}
            </div>
          </div>
        </div>
      );

    case alignment.ROW:
      return (
        <div className="p-4 w-full ">
          <div className="h-full border border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-white">
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                12th Physics
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <div className="flex items-center flex-wrap">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-black-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-black-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <div className="flex justify-between items-center flex-wrap mt-8">
                <span className="text-black-400 mr-3 inline-flex items-center text-sm pr-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  10 lessons
                </span>
                <span className="text-black-400 inline-flex items-center leading-none text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-share-2"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default ListsLayout;
