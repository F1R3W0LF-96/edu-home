import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Layouts/Wrapper";
import CategoriesFilter from "@/components/Elements/CategoriesFilter";
import GridIcon from "@/public/Icons/GridIcon";
import SortIcon from "@/public/Icons/SortIcon";
import { alignment } from "@/helper/Constant";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/router";

function Student() {
  const { getUserBtRole } = useAuthentication();
  const router = useRouter();
  const { userType } = router.query;
  const [results, setResults] = useState([]);
  const fetchLists = () => {};
  const [align, setAlign] = useState(alignment.GRID);
  useEffect(() => {
    console.log("userType", userType);
    debugger;

    getUserBtRole(router.pathname.substring(1).toUpperCase());
  }, []);

  const layout = (type, ele) => {
    switch (type) {
      case alignment.GRID:
        return (
          <div class="p-4 w-full lg:w-1/3 md:w-1/2" key={ele.toString()}>
            <div class="h-full border border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-white">
              <img
                class="lg:h-72 md:h-48 w-full object-cover object-center"
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="blog"
              />
              <div class="p-6">
                <div className="flex flex-row items-center">
                  <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-full bg-lime-200 w-1/2">
                    ICSE
                  </div>
                  <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-full bg-lime-200 w-1/2">
                    CBSE
                  </div>
                </div>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  12th Physics
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
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
                  <span class="text-black-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
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
                  <span class="text-black-400 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
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

                <div class="flex justify-between items-center flex-wrap mt-8">
                  <span class="text-black-400 mr-3 inline-flex items-center text-sm pr-3 py-1">
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
                      class="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    10 lessons
                  </span>
                  <span class="text-black-400 inline-flex items-center leading-none text-sm">
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
                      class="feather feather-share-2"
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

      case alignment.ROW:
        return (
          <div class="p-4 w-full ">
            <div class="h-full border border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-white">
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  12th Physics
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
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
                  <span class="text-black-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
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
                  <span class="text-black-400 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
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
                <div class="flex justify-between items-center flex-wrap mt-8">
                  <span class="text-black-400 mr-3 inline-flex items-center text-sm pr-3 py-1">
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
                      class="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    10 lessons
                  </span>
                  <span class="text-black-400 inline-flex items-center leading-none text-sm">
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
                      class="feather feather-share-2"
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
  };
  return (
    <Wrapper>
      <section class="container text-gray-600 body-font mx-auto">
        <div className="w-full p-4 flex flex-row justify-between mt-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-500">
            The Teacher Listing
          </h1>
          <div className="flex align-items-center">
            <h3 className="mr-3 font-semibold">Sort</h3>
            <SortIcon />
            <span className="mr-5"></span>
            <h3
              className="mr-3 font-semibold cursor-pointer"
              onClick={() => {
                setAlign(
                  align === alignment.GRID ? alignment.ROW : alignment.GRID
                );
              }}
            >
              Align
            </h3>
            <GridIcon />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3">
            <CategoriesFilter />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div class="mx-auto">
              <div
                class={`flex flex-wrap m-4 ${
                  align !== alignment.GRID ? "flex-col " : "flex-row "
                } `}
              >
                {[1, 2, 4, 5, 6, 7, 8, 9].map((ele) => layout(align, ele))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Student;
