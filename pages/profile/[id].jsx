import React from "react";

function ProfilePage() {
  return (
    <div class="px-16 py-4 h-full">
      <div class="p-8 bg-white shadow mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p class="font-bold text-gray-700 text-xl">300</p>
              <p class="text-gray-400">Coins</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">5</p>
              <p class="text-gray-400">Subjects</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">9</p>
              <p class="text-gray-400">Teachers</p>
            </div>
          </div>
          <div class="relative">
            <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Update Profile
            </button>
            <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Stats
            </button>
          </div>
        </div>
        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-gray-700">
            Jessica Jones, <span class="font-light text-gray-500">27</span>
          </h1>
          <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>
          <p class="mt-8 text-gray-500">Class 12th</p>
          <p class="mt-2 text-gray-500">ST. Annes Convent School Bangalore</p>
        </div>
        <div className="w-full mt-10">
          <div className="flex flex-row items-center">
            <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-lg bg-lime-200 w:1/4">
              Physics
            </div>
            <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-lg bg-sky-200 w:1/4">
              Mathematics
            </div>
            <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-lg bg-orange-200 w:1/4">
              Chemistry
            </div>
            <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-lg bg-teal-200 w:1/4">
              Biology
            </div>
            <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-lg bg-gray-200 w:1/4">
              English
            </div>
            <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1 mr-1 p-2 text-center rounded-lg bg-red-200 w:1/4">
              Art
            </div>
          </div>
        </div>
        <div className="w-full flex mt-16 flex-col">
          <h2 class="text-gray-600 text-left font-bold mb-2 ms-2">Addresses</h2>
          <div className="sm-w-full md-w:1/2 flex flex-row">
            <div className="w-full flex sm-w-full lg-w:1/4 flex-col border-1 m-4 p-6 bg-white rounded-lg drop-shadow-xl">
              <div className="flex w-full">House no</div>
              <div className="flex w-full">Street</div>
              <div className="flex w-full">Landmark</div>
              <div className="flex w-full">City</div>
              <div className="flex w-full">Dist</div>
              <div className="flex w-full">State</div>
              <div className="flex w-full">pincode</div>
            </div>
            <div className="w-full flex sm-w-full lg-w:1/4 flex-col border-1 m-4 p-6 bg-white rounded-lg drop-shadow-xl">
              <div className="flex w-full">House no</div>
              <div className="flex w-full">Street</div>
              <div className="flex w-full">Landmark</div>
              <div className="flex w-full">City</div>
              <div className="flex w-full">Dist</div>
              <div className="flex w-full">State</div>
              <div className="flex w-full">pincode</div>
            </div>
            <div className="w-full flex sm-w-full lg-w:1/4 flex-col border-1 m-4 p-6 bg-white rounded-lg drop-shadow-xl">
              <div className="flex w-full">House no</div>
              <div className="flex w-full">Street</div>
              <div className="flex w-full">Landmark</div>
              <div className="flex w-full">City</div>
              <div className="flex w-full">Dist</div>
              <div className="flex w-full">State</div>
              <div className="flex w-full">pincode</div>
            </div>
            <div className="w-full flex sm-w-full lg-w:1/4 flex-col border-1 m-4 p-6 bg-white rounded-lg drop-shadow-xl">
              <div className="flex w-full">House no</div>
              <div className="flex w-full">Street</div>
              <div className="flex w-full">Landmark</div>
              <div className="flex w-full">City</div>
              <div className="flex w-full">Dist</div>
              <div className="flex w-full">State</div>
              <div className="flex w-full">pincode</div>
            </div>
          </div>
        </div>
        <div class="mt-12 flex flex-col justify-center">
          <button class="text-sky-500 py-2 px-4 font-medium mt-4">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
