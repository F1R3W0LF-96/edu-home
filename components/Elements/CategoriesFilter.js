import React, { useState } from "react";

const filters = [
  {
    name: "Subjects",
    values: [
      { showname: "Physics", val: "physics" },
      { showname: "Chemistry", val: "chemistry" },
      { showname: "Mathematics", val: "mathematics" },
    ],
  },
  {
    name: "Teachers",
    values: [
      { showname: "Physics", val: "physics" },
      { showname: "Chemistry", val: "chemistry" },
      { showname: "Mathematics", val: "mathematics" },
    ],
  },
  {
    name: "Boards",
    values: [
      { showname: "ICSE", val: "ICSE" },
      { showname: "CBSE", val: "CSBE" },
      { showname: "IGCSE", val: "IGCSE" },
    ],
  },
  {
    name: "Min Hourly Rate",
    values: [
      { showname: "500/hr - 1000/hr", val: "500" },
      { showname: "1000/hr - 2000/hr", val: "1000" },
      { showname: "2000/hr and above", val: "2000" },
    ],
  },
  {
    name: "Area Radius",
    values: [
      { showname: "within 5km", val: "5" },
      { showname: "within 10km", val: "10" },
      { showname: "within 15km", val: "15" },
      { showname: "within 30km", val: "30" },
    ],
  },
];
const FlexAlignation = ({ data }) => {
  return (
    <div className="flex flex-col w-full mt-4">
      {data.map((filter, idx) => (
        <select
          key={idx + filter.name}
          className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm mb-2"
        >
          {filter.values.map((val, i) => (
            <option key={Math.random().toString()} value={val.val}>
              {val.showname}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

const GridAlignation = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {data.map((filter, idx) => (
        <select
          key={idx + filter.name}
          className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        >
          <option key={Math.random().toString()} value="">
            {filter.name}
          </option>
          {filter.values.map((val, i) => (
            <option key={Math.random().toString()} value={val.val}>
              {val.showname}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};
const CategoriesFilter = ({ type = "flex" }) => {
  return (
    <div className="w-full shadow p-5 rounded-lg bg-white m-4">
      {/* <div className="relative">
        <div className="absolute flex items-center ml-2 h-full">
          <svg
            className="w-4 h-4 fill-current text-primary-gray-dark"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search by listing, location, bedroom number..."
          className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        />
      </div> */}

      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
          Reset Filter
        </button>
      </div>
      {type === "flex" ? (
        <FlexAlignation data={filters} />
      ) : (
        <GridAlignation data={filters} />
      )}
    </div>
  );
};

export default CategoriesFilter;
