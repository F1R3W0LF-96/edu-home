import React, { useState } from "react";
import { Modal, DatePicker } from "antd";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const AddressForm = ({ isModalOpen, handleOk, handleCancel, _addresses }) => {
  console.log(_addresses);
  const [address, setAddress] = useState({
    houseno: "",
    street: "",
    landmark: "",
    district: "",
    state: "",
    pincode: "",
    isCurrent: true,
    isPermanent: false,
  });
  return (
    <Modal
      title="Update Educations"
      open={isModalOpen}
      onOk={(params) => {
        const addresses = _addresses;
        addresses.push(address);
        handleOk(params, {
          address: address,
        });
      }}
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
      }}
      cancelButtonProps={{
        type: "link",
      }}
    >
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          House No
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="House No"
            name="houseno"
            onChange={(e) =>
              setAddress((ps) => ({ ...ps, [e.target.name]: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Street
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="Street"
            name="street"
            onChange={(e) =>
              setAddress((ps) => ({ ...ps, [e.target.name]: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Landmark
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="Landmark"
            name="landmark"
            onChange={(e) =>
              setAddress((ps) => ({ ...ps, [e.target.name]: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          District
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="District"
            name="district"
            onChange={(e) =>
              setAddress((ps) => ({ ...ps, [e.target.name]: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="text-xs font-semibold px-1">
          Pincode
        </label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="number"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="Pincode"
            name="pincode"
            onChange={(e) =>
              setAddress((ps) => ({ ...ps, [e.target.name]: e.target.value }))
            }
          />
        </div>
      </div>
    </Modal>
  );
};
export default AddressForm;
