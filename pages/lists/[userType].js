import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Layouts/Wrapper";
import CategoriesFilter from "@/components/Elements/CategoriesFilter";
import GridIcon from "@/public/Icons/GridIcon";
import SortIcon from "@/public/Icons/SortIcon";
import { RegistrationTypes, alignment } from "@/helper/Constant";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/router";
import Link from "next/link";
import ListsLayout from "./ListsLayout";

function Student() {
  const { getUserByRole } = useAuthentication();
  const router = useRouter();
  const { userType } = router.query;
  const [results, setResults] = useState([]);
  const [align, setAlign] = useState(alignment.GRID);
  useEffect(() => {
    if (userType) {
      getUserListing(userType);
    }
  }, [userType]);

  const getUserListing = async (type) => {
    const response = await getUserByRole(
      type.toLowerCase() === RegistrationTypes.TEACHER_TYPE
        ? RegistrationTypes.STUDENT_TYPE.toUpperCase()
        : RegistrationTypes.TEACHER_TYPE.toUpperCase()
    );
    console.log(response);
    setResults(response.data);
  };
  return (
    <Wrapper>
      <section className="container text-gray-600 body-font mx-auto">
        <div className="w-full p-4 flex flex-row justify-between mt-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-500">
            The {userType === "teacher" ? "Teacher" : "Student"} Listing
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
            <div className="mx-auto">
              <div
                className={`flex flex-wrap m-4 ${
                  align !== alignment.GRID ? "flex-col " : "flex-row "
                } `}
              >
                {results.length > 0 &&
                  results.map((ele, idx) => (
                    <ListsLayout
                      key={idx}
                      ele={ele}
                      type={align}
                      parentidx={idx}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Student;
