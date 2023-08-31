import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import Wrapper from "@/components/Layouts/Wrapper";
import useAuthentication from "@/hooks/useAuthentication";
import ImageUploader from "@/components/Elements/ImageUploader";
import QualificationsForm from "@/components/Elements/QualificationsForm";
import ProfileUpdateForm from "@/components/Elements/ProfileUpdateForm";
function Profile({ ...props }) {
  const userState = useSelector((state) => state).user;
  const [openImageUploader, setOpenImageUploader] = useState(false);
  const [openProfileForm, setOpenProfileForm] = useState(false);
  const [openQForm, setOpenQForm] = useState(false);
  const { getUserDetails, loading, userDetails } = useAuthentication();
  const handleUpdateProfile = (data) => {};
  const handleDeleteQualifications = (_data, idx) => {
    _data.splice(idx, 1);
    handleUpdateProfile({
      qualifications: _data,
    });
  };
  useEffect(() => {
    getUserDetails(userDetails?._id);
  }, [userDetails?._id]);
  return (
    <Wrapper>
      {loading ? (
        <div className=" h-full flex m-16 flex-col">
          <Skeleton active avatar={true} size={100} />
          <Skeleton active avatar={true} size={100} />
          <Skeleton active avatar={true} size={100} />
          <Skeleton active avatar={true} size={100} />
          <Skeleton active avatar={true} size={100} />
        </div>
      ) : (
        <div className="container mx-auto my-5 p-5 h-full">
          <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-2 border-green-400 rounded">
                <div className="image overflow-hidden relative">
                  <img
                    className="h-auto w-full mx-auto"
                    src={
                      userDetails?.image === ""
                        ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        : userDetails?.image
                    }
                    alt=""
                  />
                  <button
                    className="bg-blue-500 text-white rounded p-2 text-sm w-full"
                    onClick={() => setOpenImageUploader(true)}
                  >
                    Update Profile photo
                  </button>
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {userDetails?.fullName}
                </h1>
                <h3 className="text-gray-600 font-lg font-bold leading-6">
                  Physics Teacher
                </h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  {userDetails?.description}
                </p>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        {userDetails?.status === 1 ? "Active" : "Inactive"}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Coins</span>
                    <span className="ml-auto">
                      <span className="bg-yellow-500 py-1 px-2 rounded text-gray-900 text-sm font-semibold">
                        {userDetails?.coins}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">
                      {new Date(
                        userState?.data?.createdAt
                      ).toLocaleDateString()}
                    </span>
                  </li>
                </ul>
              </div>
              {userDetails?.user_role === "STUDENT" && (
                <div className="bg-white p-3 hover:shadow mt-4">
                  <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Your&apos;s Teachers</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                        alt=""
                      />
                      <a href="#" className="text-gray-600">
                        Kojstantin
                      </a>
                    </div>
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                        alt=""
                      />
                      <a href="#" className="text-gray-600">
                        James
                      </a>
                    </div>
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                        alt=""
                      />
                      <a href="#" className="text-gray-600">
                        Steve
                      </a>
                    </div>
                    <div className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                        alt=""
                      />
                      <a href="#" className="text-gray-600">
                        Mike
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full md:w-9/12 md:mx-2 mt-4 md:mt-0 h-full">
              <div className="my-4 flex">
                <button
                  onClick={(e) => setOpenProfileForm(true)}
                  className="inline-flex items-center justify-center w-full h-12 px-6 me-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                >
                  Update Profile
                </button>
                <button
                  onClick={(e) => handleUpdateProfile(e, userDetails?.address)}
                  className="inline-flex items-center justify-center w-full h-12 px-6 ms-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                >
                  Update Addresses
                </button>
              </div>
              <div className="my-4"></div>
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">
                        {userDetails?.firstName || "Update for firstname"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">
                        {userDetails?.LastName || "Update for lastname"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">
                        {userDetails?.gender || "Please update gender"}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">
                        +91 {userDetails?.phoneno}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          {userDetails?.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">Feb 06, 1998</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        {userDetails?.address
                          ?.filter((_add) => _add.isCurrent === true)
                          .map(
                            (_add, idx) =>
                              `${_add.houseno}, ${_add.street}, ${_add.landmark}, ${_add.district}, ${_add.state}, ${_add.pincode}`
                          )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div className="px-4 py-2">
                        {userDetails?.address
                          ?.filter((_add) => _add.isPermanent === true)
                          .map(
                            (_add, idx) =>
                              `${_add.houseno}, ${_add.street}, ${_add.landmark}, ${_add.district}, ${_add.state}, ${_add.pincode}`
                          ) || "Add permanent address"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4 flex">
                <button
                  onClick={(e) => setOpenQForm(true)}
                  className="inline-flex items-center justify-center w-full h-12 px-6 me-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                >
                  Add Qualifications
                </button>

                <button
                  onClick={(e) => handleUpdateProfile(e)}
                  className="inline-flex items-center justify-center w-full h-12 px-6 ms-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                >
                  Update Educations
                </button>
              </div>
              <div className="my-4"></div>
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Qualifications</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      {userDetails?.qualifications.map((_q, idx) => (
                        <li key={idx + _q.toString()}>
                          <div className="text-teal-600">{_q.org}</div>
                          <div className="text-gray-500 text-xs">
                            {_q?.designation}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {_q.fromMonthYear} - {_q.toMonthYear}
                          </div>
                          <button
                            className="bg-red-300 text-xs p-1 rounded not my-1"
                            onClick={() =>
                              handleDeleteQualifications(
                                userDetails?.qualifications,
                                idx
                              )
                            }
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      {userDetails?.education.map((_edu, idx) => (
                        <li key={idx}>
                          <div className="text-teal-600">{_edu.name}</div>
                          <div className="text-gray-500 text-xs">
                            {_edu.fromYear} - {_edu.toYear}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ImageUploader
        isModalOpen={openImageUploader}
        handleCancel={() => setOpenImageUploader(false)}
        handleOk={() => setOpenImageUploader(false)}
      />
      <QualificationsForm
        qualifications={userDetails?.qualifications}
        isModalOpen={openQForm}
        handleCancel={() => setOpenQForm(false)}
        handleOk={() => setOpenQForm(false)}
      />
      <ProfileUpdateForm
        data={userDetails}
        isModalOpen={openProfileForm}
        handleCancel={() => setOpenProfileForm(false)}
        handleOk={() => setOpenProfileForm(false)}
      />
    </Wrapper>
  );
}

export default Profile;