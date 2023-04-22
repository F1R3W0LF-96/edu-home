import React from "react";
import { teams } from "../../helper/index";
const link = `<link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>`;
const Teams = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col mt-8">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 text-4xl font-bold mb-8">
                Meet the Team
              </h1>

              <p className="text-gray-700 text-lg font-light">
                With over 100 years of combined experience, we've got a
                well-seasoned team at the helm.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {teams.map((ele, idx) => (
              <div
                className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                key={(Math.random() + idx).toString()}
              >
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={ele.image}
                      alt=""
                    />
                  </a>

                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      {ele.name}
                    </h1>

                    <div className="text-gray-700 font-light mb-2">
                      {ele.designation}
                    </div>

                    <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                      >
                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                      </a>

                      <a
                        href="#"
                        className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                      >
                        <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                      </a>

                      <a
                        href="#"
                        className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                      >
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
